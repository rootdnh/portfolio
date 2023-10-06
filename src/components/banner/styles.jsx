import styled from "styled-components";

export const Banner = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-around;
 padding: 30px 0px 20px 0px;
 position: relative;

 img {
  max-width: 35%;
  height: auto;
  transition: 0.3s;
 }
 .bounce-effect1 {
   animation: bounce1 2s ease-in-out infinite;
  }
  .bounce-effect2 {
   animation: bounce2 2s ease-in-out infinite;
  }
  @keyframes bounce1 {
   0% {
    transform: translateY(0px);
   }
   50% {
    transform: translateY(10px);
   }
   100% {
    transform: translateY(0px);
   }
  }
  @keyframes bounce2 {
   0% {
    transform: translateY(10px);
   }
   50% {
    transform: translateY(0px);
   }
   100% {
    transform: translateY(10px);
   }
  }
 #profile {
  position: relative;
  z-index: 10;
 }

 .ball-left {
  position: absolute;
  bottom: 0;
  left: 0;
 }
 .ball-left img {
  width: 500px;
 }
 .zigzag-right {
  position: absolute;
  top: 20%;
  right: -8%;
  z-index: 10;
 }
 .zigzag-right img {
  width: 300px;
 }
 .arrows-center {
  position: absolute;
  bottom: 15%;
  align-self: center;
  right: 22%;
  z-index: 10;
 }
 .arrows-center img {
  width: 200px;
 }

 @media (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
   margin-top: 30px;
   max-width: 300px;
  }
  .ball-left img {
   display: none;
  }
  .zigzag-right {
   position: absolute;
   top: 60%;
   right: 25%;
   z-index: 10;
  }
  .zigzag-right img {
   width: 100px;
  }
  .arrows-center {
   position: absolute;
   bottom: 10%;
   align-self: center;
   left: 23%;
   z-index: 10;
  }
  .arrows-center img {
   width: 100px;
  }

  @media (max-width: 543px) {
   .zigzag-right {
    position: absolute;
    top: 65%;
    right: 10%;
    z-index: 10;
   }
   .zigzag-right img {
    width: 100px;
   }
   .arrows-center {
    position: absolute;
    bottom: 10%;
    align-self: center;
    left: 10%;
    z-index: 10;
   }
   .arrows-center img {
    width: 80px;
   }
  }

 }
`;

export const Container = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 gap: 20px;

 @media (max-width: 768px) {
  justify-content: center;
 }
`;

export const TextBanner = styled.div`
 max-width: 50%;
 display: flex;
 flex-direction: column;
 position: relative;
 h1 {
  min-height: 150px;
  font-size: 44px;
  color: var(--white);
  padding-bottom: 30px;
 }
 .main-title::after {
  content: "|";
  color: white;
  position: absolute;
  animation: pointer 0.7s infinite;
  opacity: 1;
 }

 @keyframes pointer {
  0% {
   opacity: 1;
  }
  50% {
   opacity: 0;
  }
 }

 @media (max-width: 768px) {
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 80%;
 }
`;


export const Button = styled.a`
 text-decoration: none;
 color: var(--white);
 display: flex;
 border: 1px solid var(--primary);
 width: 130px;
 height: 45px;
 padding: 10px;
 border-radius: 20px;
 margin-top: 30px;
 align-items: center;

 svg {
  height: 20px;
  width: 20px;
  margin-right: 8px;
 }

 &:hover {
  box-shadow: 0px 0px 8px var(--primary), 0px 0px 8px var(--primary) inset;
  transform: scale(1.1);
 }
`;

