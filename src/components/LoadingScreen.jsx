import React from 'react';
import '../styles/css/LoadingScreen.css';
import hotelLogo from '../assets/webp_images/hotel-brand-logo.webp';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <div className="loader"></div>
        <img src={hotelLogo} alt="Hotel Kavita Inn Logo" className="loading-logo" />
      </div>
      <h2 className="welcome-message">Welcome to Hotel Kavita Inn</h2>
    </div>
  );
};

export default LoadingScreen;