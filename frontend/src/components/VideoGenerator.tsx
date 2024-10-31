import React, { useState } from 'react';

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedVideo, setGeneratedVideo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to generate video
    setGeneratedVideo('/placeholder.svg?height=300&width=300');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Video Generator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="videoPrompt" className="block text-sm font-medium text-gray-700">
            Enter your prompt
          </label>
          <input
            type="text"
            id="videoPrompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Describe the video you want to generate"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate Video
        </button>
      </form>
      {generatedVideo && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Generated Video:</h3>
          <video src={generatedVideo} controls className="w-full h-auto rounded-md">
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}