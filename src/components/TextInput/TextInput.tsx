import React from 'react';
import { Form } from 'react-bootstrap';

interface TextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <Form.Group controlId="formBasicText">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default TextInput;