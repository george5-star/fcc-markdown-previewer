import { marked } from "marked";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const App = () => {
  const [output, setOutput] = useState(
    "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code`<div></div>`, between 2 backticks.\n```// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n     return multiLineCode;\n   }\n}\n```\nYou can also make text **bold** ... whoa! Or _italic_. Or... wait for it **_both!_** And feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n        - That look like this.\n 1. And are numbered lists too.\n 1. Use just 1s if you want!\n 1. And last but not least, let's not forget embedded images:\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
  );

  marked.setOptions({ breaks: true });

  useEffect(() => {
    setOutput(marked.parse(output));
  }, [output]);

  const handlePreview = (e) => {
    setOutput(marked.parse(e.target.value));
  };
  return (
    <>
      <Wrapper>
        <Editor id="editor" onChange={handlePreview}>
          {output}
        </Editor>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: output,
          }}
        ></div>
      </Wrapper>
    </>
  );
};

export default App;
