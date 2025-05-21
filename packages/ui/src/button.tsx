import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${disabledStyles}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
