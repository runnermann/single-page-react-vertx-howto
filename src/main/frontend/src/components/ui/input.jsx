// src/components/ui/input.js
import React from 'react';

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`input-font px-4 py-2 input-fld ${className}`}
      {...props}
    />
  );
});

// For React.forwardRef, we assign a displayName for better debugging in dev tools.
Input.displayName = "Input";
