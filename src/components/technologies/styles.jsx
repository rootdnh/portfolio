import styled from "styled-components";

export const Technologies = styled.div`
 display: flex;
 flex-direction: column;
 padding: 30px 10% 30px 10%;
 color: var(--white);
 gap: 10px;

 hr {
  width: 100px;
  margin: 0px 0px 30px 0px;
  border: 1px solid var(--primary);
 }

 svg {
  height: 100px;
  width: 100px;
 }
 @media (max-width: 768px) {
  align-items: center;

  hr {
   margin-bottom: 30px;
  }
 }
`;

export const TechBoxes = styled.section`
 display: flex;
 flex-direction: row;
 width: 100%;
 position: relative;
 gap: 20px;
 flex-wrap: wrap;
 padding-bottom: 50px;
 justify-content: space-around;
 div {
  padding: 25px;
  border: 1px solid var(--primary);
  border-radius: 30px;
 }

 div:hover {
  box-shadow: 0px 0px 8px var(--primary), 0px 0px 8px var(--primary) inset;
  transform: scale(1.1);
 }

 svg:hover {
  fill: var(--primary);
 }

 @media (max-width: 420px) {
  width: 100%;
  position: relative;
  gap: 20px;

  svg {
   height: 70px;
   width: 70px;
  }
 }
`;