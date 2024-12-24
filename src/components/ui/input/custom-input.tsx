// import { Input } from "./input";

// export const CustomInput = ({
//   label,
//   name,
//   value,
//   onChange,
//   error,
//   icon,
//   type= "text",
//   ...props
// }) => {
//   return (
//     <div className="space-y-1">
//       <label htmlFor={name} className="block text-sm font-medium">
//         {label}
//       </label>
//       <div className="relative">
//         <Input
//           {...props}
//           name={name}
//           value={value}
//           onChange={onChange}
//           type={type}
//           className={`w-full outline-none ${icon ? "pl-10" : ""} ${
//             error ? "border-destructive" : ""
//           }`}
//         />
//         {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>}
//       </div>
//       {error && <small className="text-destructive mt-1">{error}</small>}
//     </div>
//   );
// };

import { Input } from "./input";
import { ReactNode, ChangeEvent, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: ReactNode;
  type?: string;
  bgTransparent?: boolean;
  iconRight?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  icon,
  type = "text",
  bgTransparent = false,
  iconRight = false,
  ...props
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <Input
          {...props}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className={`w-full outline-none ${!iconRight && "pl-10"} ${bgTransparent ? "" : "bg-[#F0F2F5]"} ${
            error ? "border-destructive" : ""
          }`}
        />
        {icon && <span className={`absolute ${iconRight ? "right-3" : "left-3"} top-1/2 -translate-y-1/2`}>{icon}</span>}
      </div>
      {error && <small className="text-destructive mt-1">{error}</small>}
    </div>
  );
};