import Header from "../../components/header";
import {
  Banner,
  Footer,
  TextBanner,
  About,
  Button,
  Container,
  Technologies,
  TechBoxes,
} from "./styles";
import bannerImage from "../../assets/perfil.jpeg";
import computerSide from "../../assets/computer-side.png";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaNode } from "react-icons/fa";
import {
  SiGithub,
  SiElectron,
  SiWordpress,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCsswizardry,
  SiPhp,
  SiMysql,
  SiReact,
  SiStyledcomponents,
} from "react-icons/si";

function typeWriter(tag) {
  var arrayText = tag.innerHTML.split("");
  tag.innerHTML = "";
  arrayText.forEach((element, index) => {
    setTimeout(() => {
      document.querySelector(".main-title").innerHTML += element;
    }, 100 * index);
  });
}

function Home() {
  useEffect(() => {
    typeWriter(document.querySelector(".main-title"));
  });

  return (
    <>
      <Header title="dnh" />

      <Banner alt="banner">
        <TextBanner>
          <h1 className="main-title">Olá, seja BEM-VINDO ao meu portfólio</h1>
          <p>
            Aqui vou apresentar a você um pouco do que já fiz na minha carreira
            como dev, e as experiências que tive no mercado de trabalho, espero
            que curta.
          </p>
          <Container>
            <Button target="_blank" href="https://github.com/rootdnh">
              <FaGithub />
              <span>GitHub</span>
            </Button>
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/djonata-nossol-hortz-1b7168151/"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </Button>
          </Container>
        </TextBanner>
        <img src={bannerImage} alt="Imagem composta do banner" />
      </Banner>

      <About id="about">
        <img src={computerSide} alt="Imagem composta do banner" />
        <div>
          <h1 className="main-title">Um pouco sobre mim...</h1>
          <hr />
          <p>
            Meu objetivo como pessoa e desenvolvedor é sempre estar aprendendo,
            poder participar de projetos aonde possa colocar em prática meu
            conhecimento.
            <br />
            Adoro criar coisas novas e resolver problemas com tecnologia, sejam
            elas coisas simples do meu dia a dia ou necessidades mais complexas.
            <br />
            <br />
            Estou me formando em Sistemas de informação na UDESC, e pelo caminho
            tive várias experiências, desenvolvendo sistemas na indústria 4.0,
            utilizando ReactJs, React Native, Git, Bootstrap e Electron,
            trabalhei como desenvolvedor web, criando ecommerces, sites
            institucionais, landing pages e gerenciado a criação,desenvolvi
            textos, edição de imagens, muito uso de SEO junto com o Marketing
            Digital, aonde construí um sólido aprendizado em Wordpress, HTML,
            CSS, JAVASCRIPT, PHOTOSHOP, CPANEL, entre outras experiências, assim
            como atendimento ao cliente.
          </p>
        </div>
      </About>

      <Technologies id="technologies">
        <h1>Tecnologias</h1>
        <hr />
        <TechBoxes>
          <div>
            <SiJavascript />
          </div>
          <div>
            <SiHtml5 />
          </div>
          <div>
            <SiCsswizardry />
          </div>
          <div>
            <FaNode />
          </div>

          <div>
            <SiPhp />
          </div>
          <div>
            <SiMysql />
          </div>
          <div>
            <SiReact />
          </div>
          <div>
            <SiStyledcomponents />
          </div>
          <div>
            <SiBootstrap />
          </div>
          <div>
            <SiWordpress />
          </div>
          <div>
            <SiElectron />
          </div>
          <div>
            <SiGithub />
          </div>
        </TechBoxes>
      </Technologies>

      <Footer>
        <hr />
        <div>© 2022 - Djonata Nossol Hortz</div>
      </Footer>
    </>
  );
}

export default Home;
