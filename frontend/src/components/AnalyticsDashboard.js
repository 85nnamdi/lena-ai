import React from 'react';

const mockData = {
  totalGenerations: 1000,
  imageGenerations: 750,
  videoGenerations: 250,
  popularPrompts: [
    { prompt: 'Sunset over mountains', count: 50 },
    { prompt: 'Futuristic cityscape', count: 45 },
    { prompt: 'Abstract art', count: 40 },
  ],
};

export default function AnalyticsDashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Generations</h3>
          <p className="text-3xl font-bold">{mockData.totalGenerations}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Image Generations</h3>
          <p className="text-3xl font-bold">{mockData.imageGenerations}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Video Generations</h3>
          <p className="text-3xl font-bold">{mockData.videoGenerations}</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Popular Prompts</h3>
        <ul className="space-y-2">
          {mockData.popularPrompts.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
              <span>{item.prompt}</span>
              <span className="font-semibold">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}