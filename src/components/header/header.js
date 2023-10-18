import { MyHeader, Logo, Container, Menu } from "./styles";

function Header(props) {
  let isOpen = false;

  function toggleMenu() {
    let menu = document.querySelector("#menu");
    let btnMobile = document.querySelector(".btnMobile");
    let width = window.innerWidth;

    if (width <= "768") {
      isOpen = !isOpen;

      if (isOpen) {
        menu.classList.add("on");
        btnMobile.classList.add("on");
        document.documentElement.style.overflowY = "hidden";
      } else {
        menu.classList.remove("on");
        btnMobile.classList.remove("on");
        document.documentElement.style.overflowY = "auto";
      }
    }
  }

  return (
    <MyHeader>
      <Container>
        <Logo>
          <span>&#60;</span>
          {props.title}
          <span>&#47;&gt;</span>
        </Logo>

        <button className="btnMobile" onClick={toggleMenu}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </button>

        <Menu id="menu">
          <ul>
            <li>
              <a onClick={toggleMenu} href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#technologies">
                Tecnologias
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#projects">
                Projetos
              </a>
            </li>
          </ul>
        </Menu>
      </Container>
    </MyHeader>
  );
}

export default Header;
