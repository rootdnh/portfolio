import styled from "styled-components";

export const Footer = styled.footer`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100vw;
 height: 50px;
 position: relative;
 bottom: 0;
 background: var(--background);

 hr {
  width: 100%;
  border: 1px solid var(--shape-hover);
  margin-bottom: 10px;
 }
`;