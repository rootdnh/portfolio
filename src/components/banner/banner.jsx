import * as S from "./styles";
import * as Images from "../../assets/index";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";

export default function Banner() {
 function typeWriter(tag) {
  let arrayText = tag.innerHTML.split("");
  tag.innerHTML = "";
  arrayText.forEach((element, index) => {
   setTimeout(() => {
    document.querySelector(".main-title").innerHTML += element;
   }, 100 * index);
  });
 }

 useEffect(() => {
  typeWriter(document.querySelector(".main-title"));
 }, []);

 return (
  <S.Banner alt="banner">
   <S.TextBanner>
    <h1 className="main-title">Olá, seja BEM-VINDO ao meu portfólio</h1>
    <p>
     Aqui vou apresentar a você um pouco do que já fiz na minha carreira como
     dev, e as experiências que tive no mercado de trabalho, espero que curta.
    </p>

    <S.Container>
     <S.Button target="_blank" href="https://github.com/rootdnh">
      <FaGithub />
      <span>GitHub</span>
     </S.Button>

     <S.Button
      target="_blank"
      href="https://www.linkedin.com/in/djonata-nossol-hortz-1b7168151/"
     >
      <FaLinkedin />
      <span>Linkedin</span>
     </S.Button>
    </S.Container>
   </S.TextBanner>
   <img id="profile" src={Images.banner} alt="Foto de perfil" />

   <div className="ball-left">
    <img src={Images.circleEffect} alt="Enfeite de círculo" />
   </div>
   <div className="bounce-effect1 zigzag-right">
    <img src={Images.zigzag} alt="Enfeite de zig zag" />
   </div>
   <div className="bounce-effect2 arrows-center">
    <img src={Images.arrows} alt="Enfeite de setas" />
   </div>
  </S.Banner>
 );
}
