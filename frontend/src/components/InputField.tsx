import TextField from "@mui/material/TextField";
import React from "react";

interface InputFieldProps {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  my?: string | number;
}

export default function InputField({
  label,
  value,
  type,
  onChange,
  onKeyDown,
  autoFocus,
  className,
  disabled,
  my,
}: InputFieldProps) {
  return (
    <TextField
      autoFocus={autoFocus}
      className={className}
      value={value}
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      label={label}
      variant="filled"
      disabled={disabled}
      sx={{
        width: "100%",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "white",
        my: my,
        "& .MuiFilledInput-root": {
          "&:after": {
            borderBottomColor: "orange",
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "orange",
          },
        },
      }}
    />
  );
}