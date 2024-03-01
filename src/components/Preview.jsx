import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const PreviewStyle = styled.div`
  background-color: #d3d3d3;
  width: 50%;
  min-height: 100vh;
  padding: 1em;
`;

const Preview = ({ children }) => {
  return (
    <PreviewStyle id="preview">
      {" "}
      <ReactMarkdown>{children}</ReactMarkdown>
    </PreviewStyle>
  );
};

Preview.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Preview;
