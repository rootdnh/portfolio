import * as S from "./styles";
import * as Images from "../../assets/index";
import { useState } from "react";
import { FaGithub, FaRegWindowMaximize } from "react-icons/fa";

export default function Projects() {
 const [activeTab, setActiveTab] = useState("frontend");

 return (
  <S.Projects>
   <h1 id="title-project">
    Projetos
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
      <img src={Images.projectsPortfolio} />
      <h3>Portifólio</h3>
      <p>
       Este é o site em que você está neste momento, desenvolvido com o intuito
       de mostrar um pouco mais sobre mim e meus projetos. Desenvolvido com
       <S.Bold> REACT JS</S.Bold>, <S.Bold>STYLED COMPONENTS</S.Bold>,{" "}
       <S.Bold>CSS</S.Bold>, <S.Bold>JS</S.Bold>, <S.Bold>HTML</S.Bold>.
       <br />
       <div className="StyledButtons">
       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/portfolio"
        target="_blank"
       >
        <span>
         <FaGithub />
         GitHub
        </span>
       </a>
      </div>
      </p>
     </div>
    </S.Project>

    <S.Project>
     <div className="single-project">
      <img src={Images.gameLife} />
      <h3>Jogo da vida</h3>
      <p>
      O jogo da vida é um autómato celular desenvolvido pelo matemático britânico John Horton Conway,
      implementado com <S.Bold>JavaScript vanilla</S.Bold> e <S.Bold>Canvas</S.Bold>.
       <br />

       <div className="StyledButtons">
       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/test-rota-das-oficinas/tree/master/TAREFA%202"
        target="_blank"
       >
        <span>
         <FaGithub />
         GitHub
        </span>
        </a>

        <a
        className="noneLinkStyle"
        href="https://jogo-da-vida-root.vercel.app/"
        target="_blank"
       >
        <span>
         <FaRegWindowMaximize />
         Web
        </span>
       </a>
       </div>
      </p>
     </div>
    </S.Project>

    <S.Project>
     <div className="single-project">
      <img src={Images.blog} />
      <h3>Blog</h3>
      <p>
       Desenvolvimento de um blog completo com autenticação e gerenciamento, usando  <S.Bold>REACT</S.Bold> +<S.Bold> TS</S.Bold>, <S.Bold>BOOTSTRAP</S.Bold>
       , <S.Bold>AXIOS</S.Bold>, <S.Bold>STYLED COMPONENTS</S.Bold> e muito mais.
       <br />

       <div className="StyledButtons">
       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/blog-frontend-react"
        target="_blank"
       >
        <span>
         <FaGithub />
         GitHub
        </span>
        </a>

        <a
        className="noneLinkStyle"
        href=" https://blog-frontend-react-delta.vercel.app/"
        target="_blank"
       >
        <span>
         <FaRegWindowMaximize />
         Web
        </span>
       </a>
       </div>
      </p>
     </div>
    </S.Project>

    <S.Project>
     <div className="single-project">
      <img src={Images.theband} />
      <h3>The Band</h3>
      <p>
       Site para uma agência de shows, com catálogo de bandas, feito com
       <S.Bold> REACT JS</S.Bold>, <S.Bold>STYLED COMPONENTS</S.Bold>, <S.Bold>CSS</S.Bold>, <S.Bold>JS</S.Bold>, <S.Bold>HTML</S.Bold>.
       <div className="StyledButtons">
       <a
        className="noneLinkStyle"
        href="https://thebandproducoes.com.br/"
        target="_blank"
       >
        <span>
         <FaRegWindowMaximize />
         Web
        </span>
       </a>
       </div>
      </p>
     </div>
    </S.Project>
   </S.StyledTabContent>

   <S.StyledTabContent active={activeTab === "backend"}>
    <S.Project>
     <div className="single-project">
      <img src={Images.blogApi} />
      <h3>API Blog</h3>
      <p>
       API REST de um blog implementando toda parte de autenticação, busca, 
       testes, documentação e cache, feito com <S.Bold>NODE</S.Bold>,  <S.Bold>JWT</S.Bold>,  <S.Bold>BCRYPT</S.Bold>, 
       <S.Bold>SEQUELIZE</S.Bold> + <S.Bold>POSTGRES</S.Bold> e <S.Bold>DOCKER</S.Bold>.
       <div className="StyledButtons">
       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/blog-api-node"
        target="_blank"
       >
        <span>
         <FaGithub />
         GitHub
        </span>
       </a>
       </div>
      </p>
     </div>
    </S.Project>
    
    <S.Project>
     <div className="single-project">
      <img src={Images.springApi} />
      <h3>TODO List</h3>
      <p>
       TODO list de tarefas, com criação de usuários, autenticação e verificação de horários.
        <S.Bold> SPRING BOOT</S.Bold>,  <S.Bold>JPA</S.Bold>,<S.Bold> H2</S.Bold>,<S.Bold> BASIC AUTH</S.Bold>,<S.Bold> LOMBOK</S.Bold>,<S.Bold> MAVEN</S.Bold>.
       <div className="StyledButtons">
       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/todolist-java"
        target="_blank"
       >
        <span>
         <FaGithub />
         GitHub
        </span>
       </a>
       </div>
      </p>
     </div>
    </S.Project>
    <S.Project>
     <div className="single-project">
      <img src={Images.crudcli} />
      <h3>CRUD CLI</h3>
      <p>
       CRUD para manipular json <br />
       fs, nodejs, commander, mocha.
       <div className="StyledButtons">
       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/CRUD-cli-com-NODEJS"
        target="_blank"
       >
        <span>
         <FaGithub />
         GitHub
        </span>
       </a>
       </div>
      </p>
     </div>
    </S.Project>

    <S.Project>
     <div className="single-project">
      <img src={Images.multidb} />
      <h3>Multi DB's</h3>
      <p>
       Projeto multi bancos com docker <br />
       Postgres, MongoDB, Sequelize, Mocha.
       <div className="StyledButtons">       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/Multi-DB-s-"
        target="_blank"
       >
        <span>
         <FaGithub />
         GitHub
        </span>
       </a>
       </div>
      </p>
     </div>
    </S.Project>

    <S.Project>
     <div className="single-project">
      <img src={Images.php} />
      <h3>CRUD PHP</h3>
      <p>
       Crud em php de um e-commerce <br />
       <S.Bold>PDO, </S.Bold><S.Bold>COMPOSER</S.Bold>.
       <div className="StyledButtons">       <a
        className="noneLinkStyle"
        href="https://github.com/rootdnh/php-crud"
        target="_blank"
       >
        <span>
         <FaGithub />
         GitHub
        </span>
       </a>
       </div>
      </p>
     </div>
    </S.Project>

   </S.StyledTabContent>
  </S.Projects>
 );
}
