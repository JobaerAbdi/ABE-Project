import React from "react";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  imgSrc?: any;
  color?: string;
  type?: string;
  iconClassName?: string;
  onClick?: () => void;
};

const DeshboardButton: React.FC<ButtonProps> = ({
  text,
  icon,
  imgSrc,
  color,
  type,
  iconClassName,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 rounded-lg font-medium flex justify-center items-center gap-2 ${color}`}
    >
      {imgSrc && (
        <img src={imgSrc} alt={text} className={`w-4  h-4 ${iconClassName}`} />
      )}
      {icon && <span className={iconClassName}>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default DeshboardButton;
