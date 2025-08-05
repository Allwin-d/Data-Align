import React from "react";

type InputFieldProps =  {
  label?: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

function InputField(props: InputFieldProps) {
  const {
    label,
    name,
    type = "text",
    value,
    placeholder,
    onChange,
    required = false,
    className = "",
  } = props;

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-sm font-medium">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={`px-3 py-2 border rounded-md outline-none focus:ring-2 ring-blue-500 ${className}`}
      />
    </div>
  );
}

export default InputField;
