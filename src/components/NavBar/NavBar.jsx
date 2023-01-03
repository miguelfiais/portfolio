import { BoxHeader } from "./styles"

const NavBar = () => {
  return (
    <BoxHeader>
        <nav>
            <a href="#home"><h1>Portfólio</h1></a>
            <ul>
                <li><a href="#home">Ínicio</a></li>
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#skills">Conhecimentos</a></li>
                <li><a href="#projects">Projetos</a></li>
            </ul>
            <button>Resume</button>
        </nav>
    </BoxHeader>
  )
}

export default NavBar