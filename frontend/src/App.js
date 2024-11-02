import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ImageGenerator from './components/ImageGenerator';
import VideoGenerator from './components/VideoGenerator';
import EditingTools from './components/EditingTools';
import UserProfile from './components/UserProfile';
import SubscriptionManager from './components/SubscriptionManager';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Footer from './components/Footer';

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const useAuth = () => useContext(AuthContext);

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/image-generator" element={<PrivateRoute><ImageGenerator /></PrivateRoute>} />
                <Route path="/video-generator" element={<PrivateRoute><VideoGenerator /></PrivateRoute>} />
                <Route path="/editing-tools" element={<PrivateRoute><EditingTools /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                <Route path="/subscription" element={<PrivateRoute><SubscriptionManager /></PrivateRoute>} />
                <Route path="/analytics" element={<PrivateRoute><AnalyticsDashboard /></PrivateRoute>} />
                <Route path="/login" element={<div>Login Page (Not implemented)</div>} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
    </AuthContext.Provider>
  );
}

export default App;