import { MyHeader, Logo, Container, Menu } from "./styles";

function Header(props) {
  var isOpen = false;

  function toggleMenu() {
    var menu = document.querySelector("#menu");
    var btnMobile = document.querySelector(".btnMobile");
    var width = window.innerWidth;

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

        <button class="btnMobile" onClick={toggleMenu}>
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
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
          </ul>
        </Menu>
      </Container>
    </MyHeader>
  );
}

export default Header;
