import React from "react";
import { useField } from "formik";
import { TextField } from "@fluentui/react";

import { getClasses } from "@app/components/Form/Input.classes";

interface IInput {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type: "text" | "password";
}

const Input: React.FC<IInput> = ({ label, name, placeholder, required = false, type }) => {
  const [field, { value = "", error }] = useField(name);
  const { textField } = getClasses();

  return (
    <TextField
      {...field}
      className={textField}
      errorMessage={error}
      label={label}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  );
};

export default Input;
