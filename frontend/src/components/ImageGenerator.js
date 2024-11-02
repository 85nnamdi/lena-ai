import React, { useState } from 'react';
import Axios from 'axios';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Fetch the image as a blob
      const response = await Axios.post(
        `${process.env.REACT_APP_API_BASE}/serverless-image-generation/`,
        { prompt },
        { responseType: 'blob' } // Ensure response is received as blob
      );

      // Convert blob to base64 data URL
      const reader = new FileReader();
      reader.readAsDataURL(response.data);
      reader.onloadend = () => {
        setGeneratedImage(reader.result); // Set the base64 URL as image source
      };
    } catch (error) {
      console.error("Image generation failed:", error);
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Image Generator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="imagePrompt" className="block text-sm font-medium text-gray-700">
            Enter your prompt
          </label>
          <input
            type="text"
            id="imagePrompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Describe the image you want to generate"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate Image
        </button>
      </form>
      {generatedImage && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Generated Image:</h3>
          <img src={generatedImage} alt="Generated" className="w-full h-auto rounded-md" />
        </div>
      )}
    </div>
  );
}