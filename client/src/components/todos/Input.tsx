import { Button } from "antd";
import React, { useState } from "react";
import { Container } from "../styles/Containet";
import { Flex } from "../styles/Flex.styled";

interface InputI {
  input: string;
  setInput: (a: any) => void;
  submit: (e: any) => void;
  submit2: (body: any) => void;
}

export const Input: React.FC<InputI> = ({ input, submit, submit2 }) => {
  return (
    <Container>
      <input value={input} onChange={submit}/>
      <Button type="primary" onClick={submit2}>
        Submit
      </Button>
    </Container>
  );
};
