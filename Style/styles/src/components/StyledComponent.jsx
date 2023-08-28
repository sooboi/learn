import React from "react";
import styled, { css } from "styled-components";

export default function StyledComponent() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
`;

const Button = styled.button`
  background-color: beige;
  border-radius: 3px;
  padding: 2rem;
  color: green;
  margin: 0 1em;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;
