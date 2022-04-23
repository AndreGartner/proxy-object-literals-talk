import React from "react";
import { Input } from "@chakra-ui/react";

import { FormControl } from "../../services/FormService";

import { Container } from "./style";

interface IInputProps extends FormControl {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: React.FC<IInputProps> = ({
  onChange,
  id,
  label,
  type,
  regex,
}: IInputProps) => {
  return (
    <Container>
      <label>{label}</label>
      <Input
        id={id}
        type={type}
        placeholder={label}
        onChange={onChange}
        autoComplete="off"
      ></Input>
    </Container>
  );
};
