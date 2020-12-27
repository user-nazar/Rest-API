import React from "react";
import {
    ErrorStyles,
    InputContainer,
    InputStyles,
} from "../styles/InputStyles";
import { Field, ErrorMessage } from "formik";

const Input = ({ title, name, type }) => {
    return (
        <InputContainer>
            {title}:
            <Field id={name} name={name} type={type} as={InputStyles} />
            <ErrorStyles>
                <ErrorMessage name={name} />
            </ErrorStyles>
        </InputContainer>
    );
};

export default Input;