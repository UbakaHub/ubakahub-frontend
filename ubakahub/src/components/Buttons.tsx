import React from 'react';
import './Buttons.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: 'primary' | 'secondary' | 'disabled';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
  const getButtonClass = () => {
    switch (type) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'disabled':
        return 'btn-disabled';
      default:
        return '';
    }
  };

  return (
    <button 
      className={`btn ${getButtonClass()}`} 
      onClick={onClick} 
      disabled={type === 'disabled'}>
      {type === 'disabled' ? 'Coming Soon' : text}
    </button>
  );
};

export default Button;
