import type { InputFieldProps } from "../Types";

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
    <div className="flex flex-col gap-3">
      {label && (
        <label htmlFor="" className="text-sm font-medium">
          {label}
        </label>
      )}
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
