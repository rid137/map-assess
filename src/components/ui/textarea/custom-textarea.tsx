import React, { ChangeEvent } from "react";
import { Textarea } from "./textarea";

interface CustomTextareaProps {
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  name: string;
  [key: string]: any; // Allows additional props to be passed
}

export const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  value,
  onChange,
  error,
  name,
  ...props
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-[#475367]">
          {label}
        </label>
      )}
      <div className="relative">
        <Textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full outline-none ${error ? "border-destructive" : ""}`}
          {...props}
        />
      </div>
      {error && <small className="text-destructive mt-1">{error}</small>}
    </div>
  );
};