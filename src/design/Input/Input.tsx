import React from "react";

interface InputProps {
  name: string;
  id?: string;
  value: string;
  label: string;
  type?: "text-area" | "input";
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}

const Input = ({
  name,
  id,
  value,
  type,
  label,
  onChange,
  onBlur,
}: InputProps) => {
  const inputId = id ?? name;
  return (
    <div className="input-container">
      <label htmlFor={inputId}>{label} :</label>
      {type === "text-area" ? (
        <textarea
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          id={inputId}
          cols={30}
          rows={10}
        ></textarea>
      ) : (
        <input
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          id={inputId}
          type="text"
        />
      )}
    </div>
  );
};

export default Input;
