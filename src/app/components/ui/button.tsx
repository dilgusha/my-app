// @/components/ui/button.tsx

import React from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
}

const Button = ({ size = 'md', variant = 'solid', children }: ButtonProps) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  };

  const variantClasses = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-100',
  };

  return (
    <button
      className={`transition-all duration-300 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
