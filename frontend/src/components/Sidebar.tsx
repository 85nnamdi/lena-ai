import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/image-generator" className="block p-2 rounded hover:bg-blue-100">
              Image Generator
            </Link>
          </li>
          <li>
            <Link to="/video-generator" className="block p-2 rounded hover:bg-blue-100">
              Video Generator
            </Link>
          </li>
          <li>
            <Link to="/editing-tools" className="block p-2 rounded hover:bg-blue-100">
              Editing Tools
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="block p-2 rounded hover:bg-blue-100">
              Analytics Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}