import * as S from "./styles";
import computerSide from "../../assets/computer-side.png";

export default function About() {
 return (
  <S.About id="about">
   <img src={computerSide} alt="Imagem composta do banner" />
   <div>
    <h1 className="main-title">
     <span className="terminal">
      [<span>~</span>]$
     </span>{" "}
     Sobre mim
    </h1>
    <br />
    <p>
     Meu objetivo como pessoa e desenvolvedor é sempre estar aprendendo, poder
     participar de projetos aonde possa colocar em prática meu conhecimento.
     <br />
     Adoro criar coisas novas e resolver problemas com tecnologia, sejam elas
     coisas simples do meu dia a dia ou necessidades mais complexas.
     <br />
     <br />
     Estou me formando em Sistemas de informação na UDESC, e pelo caminho tive
     várias experiências, desenvolvendo sistemas na indústria 4.0, utilizando
     ReactJs, React Native, Git, Bootstrap e Electron, trabalhei como
     desenvolvedor web, criando ecommerces, sites institucionais, landing pages
     e gerenciado a criação,desenvolvi textos, edição de imagens, muito uso de
     SEO junto com o Marketing Digital, aonde construí um sólido aprendizado em
     Wordpress, HTML, CSS, JAVASCRIPT, PHOTOSHOP, CPANEL, entre outras
     experiências, assim como atendimento ao cliente.
    </p>
   </div>
  </S.About>
 );
}
