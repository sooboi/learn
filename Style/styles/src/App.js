import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled, { css } from "styled-components";

function App() {
  return (
    <div className="App">
      <Button1 />
      <Button2 />
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </div>
  );
}

export default App;

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
