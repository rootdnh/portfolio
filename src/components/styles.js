import styled from "styled-components";

export const MyHeader = styled.header`
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    background: var(--shape-hover);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 50px;
  height: 80px;

  .btnMobile {
    display: none;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
   
  }
  .one,
  .three {
    background-color: var(--white);
    height: 3px;
    margin-top: 3px;
    width: 100%;
    transition: .4s;
  }
  .two {
    position: relative;
    background-color: var(--white);
    height: 3px;
    margin-top: 3px;
    width: 70%;
  }

  @media (max-width: 768px) {
    .btnMobile {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 30;
    }
  }

  .btnMobile.on .one {
    transform: rotate(45deg) translate(7px, 1px);
    
  }

  .btnMobile.on .two {
    opacity: 0;
  }

  .btnMobile.on .three {
    transform: rotate(-45deg)  translate(7px, -2px);
  }

  .btnMobile.on {
    position: fixed;
    right: 2em;
  }

`;

export const Logo = styled.h2`
  color: var(--primary);

  span {
    color: var(--white);
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 20px;
    padding-bottom: 31px;
  }

  a:hover {
    border-bottom: 2px solid var(--primary);
  }

  @media (max-width: 768px) {
    display: none;
  }

  &.on {
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 22;
    height: 100vh;
    border-left: 1px solid var(--primary);
    box-shadow: 0px 0px 5px var(--primary) ;
    background-color: hsl(0 0% 0% / 0.9);
    backdrop-filter: blur(6px);
  }
  &.on ul li {
  
    padding-bottom: 10px;
    transform: scale(1.8);
   
  }
 
  

  &.on ul li a:hover {
    border: none;
    color: var(--primary)
  }
 
  &.on ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;
   
    width: 100vw;
    height: 100vh;
    
  }
`;
