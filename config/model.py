from diffusers import StableDiffusionPipeline, FluxPipeline
import torch
import requests
from PIL import Image
import io
import os

# Set the device to "mps" for MPS backend or "cuda" for CUDA backend
device = None
if torch.cuda.is_available():
    device = torch.device("cuda")
    print("Using CUDA")
elif torch.backends.mps.is_available():
    device = torch.device("mps")
    print("Using MPS")
else:
    device = torch.device("cpu")
    print("Using CPU")

# Load the stable diffusion model
model_id = "CompVis/stable-diffusion-v1-4"
pipeline = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipeline = pipeline.to(device)

# Initiate the huggingface API token
TOKEN = os.environ.get('HF_API_TOKEN')

# Define image generation function using flux pipeline
def generate_image(prompt: str):
    pipe = FluxPipeline.from_pretrained("black-forest-labs/FLUX.1-dev",
                                        torch_dtype=torch.bfloat16)
    pipe = pipe.to(device)
    #pipe.enable_model_cpu_offload() #save some VRAM by offloading the model to CPU. Remove this if you have enough GPU power
    image = pipe(
    prompt,
    height=1024,
    width=1024,
    guidance_scale=3.5,
    num_inference_steps=50,
    max_sequence_length=512,
    generator=torch.Generator("cpu").manual_seed(0)
    ).images[0]
    return image

# using serverless function to generate images with flux
def generate_image_serverless(prompt: str):
    API_URL = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev"
    headers = {"Authorization": f"Bearer {TOKEN}"}

    def query(payload):
        response = requests.post(API_URL, headers=headers, json=payload)
        return response.content
    
    # Query the serverless endpoint
    image_bytes = query({
        "inputs": prompt
    })
    # Convert image bytes to a PIL image
    image = Image.open(io.BytesIO(image_bytes))
    return image
    