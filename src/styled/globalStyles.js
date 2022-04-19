import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    overflow-x: hidden;

    color: ${(props) => props.theme.color.primary2};;
    background-color: ${(props) => props.theme.color.primary1};

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.color.primaryMid};
    }

    &::-webkit-scrollbar-thumb {
      background-color:  ${(props) => props.theme.color.highlight1};
      border-radius: 30px;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
