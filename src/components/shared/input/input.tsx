import React from "react";
import { IonInput } from "@ionic/react";
import { TextFieldTypes } from "@ionic/core";

interface CustomInputProps {
  label?: string;
  type?: TextFieldTypes;
  placeholder?: string;
    clearInput?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  placeholder,
  clearInput = false,
}) => {
  return (
    <IonInput
      value=""
      label={label}
      type={type}
      placeholder={placeholder}
      labelPlacement="floating"
      clearInput={clearInput}
    />
  );
};

export default CustomInput;
