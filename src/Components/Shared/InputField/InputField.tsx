// import React from "react";

// type TInputProps = {
//     inputBg: string;
//     placeholder: string;
//     iconBg: string;
//     icon: string | undefined;
//   };

// const InputField: React.FC<TInputProps> = ({ inputBg, icon, iconBg, placeholder,  }) => {
//   return (
//     <div className={`flex items-center justify-start p-2 gap-2 rounded-md w-80 ${inputBg}`}>
//       <div className={`flex justify-center items-center ${iconBg}`}>
//         <img src={icon} alt="" className="size-4" />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder={`${placeholder}`}
//           className={`w-full bg-transparent outline-none`}
//         />
//       </div>
//     </div>
//   );
// };

// export default InputField;

type TInputProps = {
  label: string;
  required?: boolean;
  inputBg: string;
  type: string;
  placeholder: string;
  iconBg: string;
  icon?: string;
};

const InputField: React.FC<TInputProps> = ({
  label,
  required = false,
  inputBg,
  placeholder,
  iconBg,
  type,
  icon,
}) => {
  return (
    <div className="w-full">
      {/* -------------- there is input label ------------- */}
      <label className="pb-2">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {/* ------------------ Input fields -------------------- */}
      <div className={`relative mt-2 rounded-md w-full ${inputBg}`}>
        <input
          type={`${type ? type : "text"}`}
          className="w-full px-4 py-2 rounded-md border bg-transparent outline-none"
          placeholder={placeholder}
        />
        {icon && (
          <div
            className={`absolute top-3 right-3 flex justify-center items-center ${iconBg}`}
          >
            <img
              src={icon}
              alt="search-icon"
              className={`w-4 ${inputBg} h-4`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
