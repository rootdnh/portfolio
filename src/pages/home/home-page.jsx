import Header from "../../components/header/header";
import * as S from "./styles";
import About from "../../components/about/about";
import Technologies from "../../components/technologies/technologies";
import * as Images from "../../assets/index";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Projects from "../../components/projects/projects";

function Home() {
 return (
  <Container>
   <Header title="dnh" />

   <Banner />

   <About />
   <Technologies />
   <Projects />

   <Footer />
  </Container>
 );
}

export default Home;
