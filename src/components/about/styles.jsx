import styled from "styled-components";

export const About = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin-top: 100px;
 padding: 20px 30px;
 color: var(--white);

 img {
  position: relative;
  top: -50px;
  max-width: 500px;
  height: 500px;
 }

 hr {
  width: 100px;
  margin: 10px 0px 30px 0px;
  border: 1px solid var(--primary);
 }

 p {
  font-size: 18px;
  color: var(--text);
  max-width: 90%;
 }
 @media (max-width: 980px) {
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 100%;
  padding: 20px 20px;

  p {
   padding: 20px 20px;
   max-width: 100%;
  }
  img {
   position: relative;
   top: -50px;
   max-width: 80%;
   height: auto;
  }
  div {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }
 }

 .terminal {
  color: var(--primary);
 }
 .terminal span {
  color: var(--white);
 }
`;