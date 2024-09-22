import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, type = 'button', onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300 disabled:bg-indigo-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
