import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
      --background: #060d15;
      --white: #fff;
      --text: #a8a8b3;
      --gray: #e1e1e6;
      --primary: #8257e5;
      --shape-hover: #29292e;
    }
    
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
    }
    html {
        background-color: var(--background);
        height: 100vh;
        width: 100vw;
        font-family: sans-serif;
        color: var(--text);
        overflow-x: hidden;  
    }
    ::-webkit-scrollbar{ 
        width: 10px;
    } 
    ::-webkit-scrollbar-track {
        background: var(--background);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--shape-hover);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export default GlobalStyles;
