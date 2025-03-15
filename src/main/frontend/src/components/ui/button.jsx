// src/components/ui/button.jsx
import React from "react";

export const Button = React.forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
