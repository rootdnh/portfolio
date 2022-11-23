import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0px 20px 0px;
  img {
    max-width: 35%;
    height: auto;
    border-radius: 50%;
    transition: 0.3s;
    box-shadow: 0px 0px 8px var(--primary), 0px 0px 8px var(--primary) inset;
  }

  img:hover {
    box-shadow: 0px 0px 35px var(--primary), 0px 0px 30px var(--primary) inset;
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-top: 30px;
      max-width: 300px;
    }
  }
`;

export const TextBanner = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  h1 {
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
`;

export const Button = styled.a`
  text-decoration: none;
  color: var(--white);
  display: flex;
  border: 1px solid var(--primary);
  width: 110px;
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

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
