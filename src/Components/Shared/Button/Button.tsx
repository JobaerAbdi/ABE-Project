import React from "react";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  imgSrc?: any;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
};

const DeshboardButton: React.FC<ButtonProps> = ({
  text,
  icon,
  imgSrc,
  className,
  iconClassName,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md flex justify-center items-center gap-2 ${className}`}
    >
      {imgSrc && (
        <img src={imgSrc} alt={text} className={`w-4 h-4 ${iconClassName}`} />
      )}
      {icon && <span className={iconClassName}>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default DeshboardButton;
