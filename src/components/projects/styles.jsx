import styled from "styled-components";


export const Projects = styled.div`
 
 color: var(--white);

 hr {
  width: 100px;
  margin: 0px 0px 30px 0px;
  border: 1px solid var(--primary);
 }
 padding: 30px 8% 30px 8%;
 
`;

export const Project = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 10px;
 color: var(--white);
 

 .single-project {
  width: 23em;
  border: 2px solid var(--shape-hover);
  border-radius: 5px;
  transition: 0.7s;

  h3 {
   color: var(--primary);
   font-weight: bold;
   padding: 10px;
  }
  p {
   padding: 10px;
   min-height: 12em;
   position: relative;
  }
  img {
   width: 100%;
   height: 170px;
   object-fit: cover;
  }
 }


 .noneLinkStyle {
  display: flex;
  text-decoration: none;
  color: white;
  position: absolute;
  bottom: 10px;
  border: 1px solid var(--primary);
  width: 30%;
  border-radius: 20px;
 }

 .noneLinkStyle span {
  display: flex;
  align-items: center;
  padding: .5em;
  gap: 5px;

 }
 .noneLinkStyle a:hover {
  box-shadow: 0px 0px 8px var(--primary), 0px 0px 8px var(--primary) ;

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

export const StyledTabs = styled.div`
  display: flex;
`;


export const StyledTab = styled.div`
  padding: 10px;
  width: 10em;
  border: 1px solid var(--primary);
  cursor: pointer;
  background-color: ${(props) => (props.active ? 'var(--primary)' : 'transparent')};
  
  &:first-child {
    border-radius: 20px 0px 0px 20px;
  }
  &:last-child {
    border-radius: 0px 20px 20px 0px;
  }
  
  &:hover {
    background-color: var(--secondary);
  }
`;

export const StyledTabContent = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 2em;

`;

export const Bold = styled.b`
  color: var(--primary)
`;

