import * as S from "./styles"
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
 import {FaNode} from "react-icons/fa"
 
export default function Technologies(){
  return (
    <S.Technologies id="technologies">
    <h1>Tecnologias</h1>
    <hr />
    <S.TechBoxes>
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
    </S.TechBoxes>
   </S.Technologies>
  )
}