from fastapi import APIRouter,HTTPException
from pydantic import BaseModel
from io import BytesIO
from fastapi.responses import StreamingResponse
from config.model import pipeline,generate_image, generate_image_serverless
from PIL import Image

router = APIRouter()


# Define Pydantic model to handle prompt input
class ImageRequest(BaseModel):
    prompt: str

@router.post("/text-to-image/")
async def text_to_image(prompt: str):
    image = pipeline(prompt).images[0]
    
    # Convert the image to bytes for streaming response
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    buffer.seek(0)
    
    return StreamingResponse(buffer, media_type="image/png")

@router.post("/flux-image-generation/")
async def image_generation(prompt: str):
    try:
        image = generate_image(prompt)
        buffer = BytesIO()
        image.save(buffer, format="PNG")
        buffer.seek(0)
        
        
        return StreamingResponse(buffer, media_type="image/png")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image generation failed: {str(e)}")


@router.post("/serverless-image-generation/")
async def serverless_image_generation(prompt: str):
    try:
        image = generate_image_serverless(prompt)
        
        # Convert the image to bytes for streaming response
        buffer = BytesIO()
        image.save(buffer, format="PNG")
        buffer.seek(0)
        
        return StreamingResponse(buffer, media_type="image/png")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Serverless image generation failed: {str(e)}")