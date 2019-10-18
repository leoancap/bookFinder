import React from "react";
import { Field, FieldProps } from "formik";

import { Container, Input, Label, TextArea, ErrorMessage } from "./styles";
import { IBook } from "#domainTypes";


type IFormValue =  "title" | "content"

interface IProps {
  label: IFormValue;
  textArea?: boolean;
}

export function InputField({ label, textArea = false }: IProps) {
  return (
    <Field
      name={label}
      render={({ field, form }: FieldProps<IFormValue>) => {
        return (
          <Container>
            <Label>{label}
            {form.touched[label as unknown as number] && form.errors[label as unknown as number] && (
              <ErrorMessage>{form.errors[label as unknown as number]}</ErrorMessage>
            )}
            </Label>
            {textArea ? (
              <TextArea {...field} placeholder={`Type your ${label}`} />
            ) : (
              <Input
                type="text"
                {...field}
                placeholder={`Type your ${label}`}
              />
            )}
          </Container>
        );
      }}
    />
  );
}

export default InputField;
