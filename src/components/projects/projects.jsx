import * as S from "./styles";
import * as Images from "../../assets/index";
import { Container } from "react-bootstrap";

export default function Projects(){
  return (
    <Container>
    <S.Projects id="projects">
    <h1 id="title-project">Projetos</h1>
    <hr />
    <section className="projectSections">
     <a
      className="noneLinkStyle single-project"
      href="https://github.com/rootdnh/portfolio"
      target="_blank"
     >
      <img src={Images.projectsPortifolio} />
      <h3>Portifólio</h3>
      <p>
       Este é o site em que você está neste momento, desenvolvido com o intuito
       de mostrar um pouco mais sobre mim e meus projetos. Desenvolvido com
       REACT JS, STYLED COMPONENTS, CSS, JS, HTML.
      </p>
     </a>
     <a
      className="noneLinkStyle single-project"
      href="https://github.com/rootdnh/blog-frontend-react"
      target="_blank"
     >
      <img src={Images.blog} />
      <h3>Blog</h3>
      <p>Desenvolvimento de um blog completo com REACT + TS, Bootstrap</p>
     </a>

     <a
      className="noneLinkStyle single-project"
      href="https://github.com/rootdnh/blog-api-node"
      target="_blank"
     >
      <img src={Images.blogApi} />
      <h3>API Blog</h3>
      <p>
       Backend API RESTful de um blog, com NODE, JWT, BCRYPT, SEQUELIZE com
       POSTGRES e DOCKER
      </p>
     </a>
     <a
      className="noneLinkStyle single-project"
      href="https://github.com/rootdnh/CRUD-cli-com-NODEJS"
      target="_blank"
     >
      <img src={Images.crudcli} />
      <h3>CRUD CLI</h3>
      <p>
       CRUD para manipular json <br />
       fs, nodejs, commander, mocha.
      </p>
     </a>

     <a
      className="noneLinkStyle single-project"
      href="https://github.com/rootdnh/Multi-DB-s-"
      target="_blank"
     >
      <img src={Images.multidb} />
      <h3>Multi DB's</h3>
      <p>
       Projeto multi bancos com docker <br />
       Postgres, MongoDB, Sequelize, Mocha
      </p>
     </a>
     <a
      className="noneLinkStyle single-project"
      href="https://thebandproducoes.com.br/"
      target="_blank"
     >
      <img src={Images.theband} />
      <h3>The Band</h3>
      <p>
       Freelance:
       <br />
       REACT JS, STYLED COMPONENTS, CSS, JS, HTML.
      </p>
     </a>
    </section>
   </S.Projects>
   </Container>
  )
}