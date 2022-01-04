import React from 'react';
import { BaseInput, Label, InputWrapper } from './styles';
import type { TInputProps } from './type';

export const Input = ({ name, type, label }: TInputProps) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <BaseInput name={name} id={name} type={type} />
    </InputWrapper>
  );
};
