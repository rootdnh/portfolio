import styled from "styled-components";

export const Projects = styled.div`
 display: flex;
 padding: 30px 8% 30px 7%;
 flex-direction: column;
 justify-content: center;
 color: var(--white);
 

 .noneLinkStyle {
  text-decoration: none;
  color: white;
 }

 .projectSections {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
 }

 hr {
  width: 100px;
  margin: 0px 0px 30px 0px;
  border: 1px solid var(--primary);
 }

 .single-project {
  width: 23em;
  border: 2px solid var(--shape-hover);
  border-radius: 5px;
  transition: 0.7s;

  &:hover {
   scale: 1.01;
  }

  h3 {
   color: var(--primary);
   font-weight: bold;
   padding: 10px;
  }
  p {
   padding: 10px;
  }
  img {
   width: 100%;
   height: 170px;
   object-fit: cover;
  }
 }

 @media(max-width: 900px) {
   .single-project {
    width: 23em;
   }
   & {
    align-items: center;
   }
  

  }
`;
