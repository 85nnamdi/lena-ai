import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Lena-AI</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link></li>
            <li><Link to="/subscription" className="text-gray-600 hover:text-blue-600">Subscription</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}