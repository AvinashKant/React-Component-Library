import React from "react";

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  id?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  body?: React.ReactNode;
  variant?: "blue" | "default";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  id,
  onClick,
  type = "button",
  ariaLabel,
  body,
  variant = "default",
  className = "",
}) => {

  // ----- Variant Styles -----
  const variantClasses: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-300",
    default: "bg-gray-200 hover:bg-gray-300 text-black disabled:bg-gray-100",
  };

  return (
    <button
      id={id}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded ${variantClasses[variant]} ${className}`}
    >
      {/* Render Title */}
      {title && <span>{title}</span>}

      {/* Render Body (icons, custom jsx, etc.) */}
      {body}
    </button>
  );
};

export default Button;
