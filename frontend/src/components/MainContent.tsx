import React from 'react';
import ImageGenerator from './ImageGenerator';
import VideoGenerator from './VideoGenerator';

export default function MainContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Lena-AI</h1>
      <p className="text-lg mb-4">
        Generate high-quality images and videos using our cutting-edge AI technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageGenerator />
        <VideoGenerator />
      </div>
    </div>
  );
}