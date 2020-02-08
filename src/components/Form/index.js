import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import AlertIcon from "./alert.svg";
import {
  Field,
  Label,
  Hint,
  Input as ZenInput,
  Message as ZenMessage,
  Radio
} from "@zendeskgarden/react-forms";

const GeneralMessage = styled(ZenMessage)`
  background-image: none;
  padding-left: 0;

  i {
    display: inline-block;
    margin-right: 0.3rem;
  }
`;

const Message = ({ children, ...rest }) => (
  <GeneralMessage {...rest}>
    <i className="fa fa-exclamation-triangle" />
    {children}
  </GeneralMessage>
);

const ErrorMessage = styled(Message)`
  /* color: ${({ theme }) => theme.fontColor} !important; */
  color: red;
`;

export default function Form({ defaultValues = {}, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <ThemeProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Array.isArray(children)
          ? children.map(child => {
              return child.props.name
                ? React.createElement(child.type, {
                    ...{
                      ...child.props,
                      register: methods.register,
                      formMethods: methods,
                      key: child.props.name
                    }
                  })
                : child;
            })
          : children}
      </form>
    </ThemeProvider>
  );
}

export function Input({
  register,
  registerProps,
  name,
  label,
  hint,
  message,
  formMethods,
  ...rest
}) {
  const inputRegister = registerProps ? register(registerProps) : register;

  const error =
    `${name}` in formMethods.errors ? formMethods.errors[name] : null;

  return (
    <Field>
      {label && <Label>{label}</Label>}
      {hint && <Hint>{hint}</Hint>}
      <ZenInput ref={inputRegister} name={name} {...rest} />
      {error && <ErrorMessage validation="error">{error.message}</ErrorMessage>}
    </Field>
  );
}

export function Select({ register, options, name, ...rest }) {
  return (
    <select name={name} ref={register} {...rest}>
      {options.map(value => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
}
