import { useState } from "react";
import styled from "styled-components";
import Preview from "./components/Preview";

const Editor = styled.textarea`
  background-color: #e3e3e3;
  outline: none;
  width: 50%;
  padding: 1em;
  min-height: 100vh;

  &:focus {
    border: 1px solid #000;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const App = () => {
  const [input, setInput] = useState("");

  const handlePreview = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <Wrapper>
        <Editor id="editor" onChange={handlePreview} />
        <Preview>{input}</Preview>
      </Wrapper>
    </>
  );
};

export default App;
