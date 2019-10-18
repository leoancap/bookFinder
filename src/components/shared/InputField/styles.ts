import styled from "styled-components";

export const Container = styled.div`
  display: grid;
`;

export const Label = styled.label`
  margin: 1em 0;
  font-size: 22px;
  text-transform: capitalize;
`;

export const Input = styled.input`
  padding: 0.5em;
  font-size: 20px;
  border: none;
  background: rgba(200, 200, 200, 0.2);
  border-radius: 0.5em;
  outline: none;
  max-width: 20em;
`;

export const TextArea = styled.textarea`
  padding: 0.5em;
  background: rgba(200, 200, 200, 0.2);
  border: none;
  height: 15em;
  border-radius: 0.5em;
  outline: none;
  font-size: 20px;
  resize: vertical;
  word-break: break-word;
`;

export const ErrorMessage = styled.span`
  margin: 1em 0;
  font-size: 22px;
  text-transform: capitalize;
  color: #C32D2A;

`