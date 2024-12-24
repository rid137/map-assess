import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
  } from "./select";
  import { ReactNode } from "react";
  
  interface Option {
    value: string;
    label: string;
  }
  
  interface CustomSelectProps {
    label?: string;
    options?: Option[];
    value?: string;
    onChange?: (selectedOption: Option | undefined) => void;
    error?: string;
    icon?: ReactNode;
    name: string;
    isDisabled?: boolean;
    [key: string]: any; // Allows additional props to be passed
    bgTransparent?: boolean;
    defaultOption?: string;
  }
  
  export const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    options = [],
    value,
    onChange,
    error,
    icon,
    name,
    isDisabled,
    bgTransparent = false,
    defaultOption,
    ...props
  }) => {
    const handleValueChange = (selectedValue: string) => {
      const selectedOption = options.find((option) => option.value === selectedValue);
      onChange!(selectedOption);
    };
  
    return (
      <div className="space-y-1">
        <label htmlFor={name} className="block text-sm font-medium">
          {label}
        </label>
        <Select
          disabled={isDisabled}
          // onValueChange={handleValueChange}
        >
          <SelectTrigger
            className={`w-full ${bgTransparent ? "" : "bg-[#F0F2F5]"} ${error ? "border-destructive" : ""}`}
            name={name}
            id={name}
            {...props}
          >
            {icon && <span className="absolute left-3 top-2.5">{icon}</span>}
            {options.find((option) => option.value === value)?.label || defaultOption}
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <small className="text-destructive mt-1">{error}</small>}
      </div>
    );
  };
  