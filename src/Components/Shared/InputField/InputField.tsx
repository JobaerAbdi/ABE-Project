import React from "react";

type TInputProps = {
    inputBg: string;
    placeholder: string;
    iconBg: string;
    icon: string | undefined;
  };

const InputField: React.FC<TInputProps> = ({ inputBg, icon, iconBg, placeholder,  }) => {
  return (
    <div className={`flex items-center justify-start p-2 gap-2 rounded-md w-80 ${inputBg}`}>
      <div className={`flex justify-center items-center ${iconBg}`}>
        <img src={icon} alt="" className="size-4" />
      </div>
      <div>
        <input
          type="text"
          placeholder={`${placeholder}`}
          className={`w-full bg-transparent outline-none`}
        />
      </div>
    </div>
  );
};

export default InputField;
