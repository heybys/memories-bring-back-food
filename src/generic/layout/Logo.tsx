import React from 'react';
import './logo.css';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="logo"
      onClick={() => {
        navigate('/');
      }}
    >
      <img className="image" src={'/cooking.png'} alt={''} />
      <span className="text">Food Memories</span>
    </div>
  );
};

export default Logo;
