import React, { useState } from 'react';

export default function EditingTools() {
  const [selectedTool, setSelectedTool] = useState('');

  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
    // TODO: Implement tool functionality
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Editing Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleToolSelect('crop')}
          className={`p-2 rounded-md ${selectedTool === 'crop' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Crop
        </button>
        <button
          onClick={() => handleToolSelect('filter')}
          className={`p-2 rounded-md ${selectedTool === 'filter' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Filter
        </button>
        <button
          onClick={() => handleToolSelect('trim')}
          className={`p-2 rounded-md ${selectedTool === 'trim' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Trim
        </button>
        <button
          onClick={() => handleToolSelect('text')}
          className={`p-2 rounded-md ${selectedTool === 'text' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Add Text
        </button>
      </div>
      <div className="mt-4">
        <p>Selected tool: {selectedTool || 'None'}</p>
        {/* TODO: Implement tool-specific UI and functionality */}
      </div>
    </div>
  );
}