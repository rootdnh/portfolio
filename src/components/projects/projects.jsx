import * as S from "./styles";
import * as Images from "../../assets/index";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
 const [activeTab, setActiveTab] = useState("frontend");

 return (
  <S.Projects>
   <h1 id="title-project">Projetos
   <hr />
   </h1>
   
   <S.StyledTabs>
    <S.StyledTab
     active={activeTab === "frontend"}
     onClick={() => setActiveTab("frontend")}
    >
     Frontend
    </S.StyledTab>
    <S.StyledTab
     active={activeTab === "backend"}
     onClick={() => setActiveTab("backend")}
    >
     Backend
    </S.StyledTab>
   </S.StyledTabs>

   <S.StyledTabContent active={activeTab === "frontend"}>
    <S.Project>
     <div className="single-project">
      <img src={Images.projectsPortifolio} />
      <h3>Portifólio</h3>
      <p>
       Este é o site em que você está neste momento, desenvolvido com o intuito
       de mostrar um pouco mais sobre mim e meus projetos. Desenvolvido com 
       <S.Bold> REACT JS</S.Bold>, <S.Bold>STYLED COMPONENTS</S.Bold>, <S.Bold>CSS</S.Bold>, <S.Bold>JS</S.Bold>, <S.Bold>HTML</S.Bold>.
       <br />
       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/portfolio"
        target="_blank"
       >
        
        <span><FaGithub />GitHub</span>
       </a>
      </p>
     </div>
     </S.Project>

     <S.Project>
     <div className="single-project">
      <img src={Images.blog} />
       <h3>Blog</h3>
       <p>Desenvolvimento de um blog completo com REACT + TS, Bootstrap
        <br />
       <a
         className="noneLinkStyle"
         href="https://github.com/rootdnh/blog-frontend-react"
         target="_blank"
       >
        <span><FaGithub />GitHub</span>
       </a>
       </p>
     </div>
     </S.Project>
   </S.StyledTabContent>


   <S.StyledTabContent active={activeTab === "backend"}>
    Content for Profile Tab
   </S.StyledTabContent>
  </S.Projects>
  //   <Container>

  //   <S.Projects id="projects">
  //
  //   <section className="projectSections">

  //    
  //     className="noneLinkStyle single-project"
  //     href="https://github.com/rootdnh/blog-api-node"
  //     target="_blank"
  //    >
  //     <img src={Images.blogApi} />
  //     <h3>API Blog</h3>
  //     <p>
  //      Backend API RESTful de um blog, com NODE, JWT, BCRYPT, SEQUELIZE com
  //      POSTGRES e DOCKER
  //     </p>
  //    </a>
  //    <a
  //     className="noneLinkStyle single-project"
  //     href="https://github.com/rootdnh/CRUD-cli-com-NODEJS"
  //     target="_blank"
  //    >
  //     <img src={Images.crudcli} />
  //     <h3>CRUD CLI</h3>
  //     <p>
  //      CRUD para manipular json <br />
  //      fs, nodejs, commander, mocha.
  //     </p>
  //    </a>

  //    <a
  //     className="noneLinkStyle single-project"
  //     href="https://github.com/rootdnh/Multi-DB-s-"
  //     target="_blank"
  //    >
  //     <img src={Images.multidb} />
  //     <h3>Multi DB's</h3>
  //     <p>
  //      Projeto multi bancos com docker <br />
  //      Postgres, MongoDB, Sequelize, Mocha
  //     </p>
  //    </a>
  //    <a
  //     className="noneLinkStyle single-project"
  //     href="https://thebandproducoes.com.br/"
  //     target="_blank"
  //    >
  //     <img src={Images.theband} />
  //     <h3>The Band</h3>
  //     <p>
  //      Freelance:
  //      <br />
  //      REACT JS, STYLED COMPONENTS, CSS, JS, HTML.
  //     </p>
  //    </a>
  //   </section>
  //  </S.Projects>
  //  </Container>
 );
}
