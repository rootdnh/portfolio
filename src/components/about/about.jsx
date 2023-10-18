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
     Sou um desenvolvedor Full Stack com experiência em ajudar clientes a
     estabelecer sua presença digital por meio de portfólios, e-commerces e
     landing pages. Meu foco sempre foi no desempenho e na otimização, aplicando
     as melhores práticas de desenvolvimento. Minha trajetória inclui tanto
     trabalhos em empresas de software quanto como profissional autônomo.
     <br />
     <br />
     Como pessoa e desenvolvedor, meu objetivo contínuo é aprender e crescer.
     Estou sempre em busca de projetos desafiadores nos quais posso aplicar meu
     conhecimento e transformar ideias em realidade. Tenho uma paixão por criar
     soluções inovadoras e enfrentar problemas com tecnologia, independentemente
     de serem desafios do cotidiano ou necessidades mais complexas.
    </p>
   </div>
  </S.About>
 );
}
