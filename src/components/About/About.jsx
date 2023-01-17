import me from "../../assets/me.jpg"
import Skills from "../Skills/Skills"
import Title from "../Title/Title"
import { BoxInfo, ContainerAbout } from "./styles"

const About = () => {
  return (
    <ContainerAbout className="container" id="about">
       <Title title="SOBRE MIM"/>
       <BoxInfo>
          <img src={me} alt="foto-de-perfil" />
          <div>
            <p>Meu nome é Miguel Fiais, tenho 21 anos e sou de Cruz das Almas-BA.</p>
            <br />
            <p>Sou um desenvolvedor Front-End focado em aplicações Web. Gosto muito de transformar minhas ideias em códigos e ver minhas aplicações se tornarem realidade. Estou sempre em busca de aprender novas habilidades e técnicas para me tornar um profissional ainda melhor e estar sempre atualizado com as tendências tecnológicas.</p>
          </div>
        </BoxInfo>
        <Title title="CONHECIMENTOS"/>
        <Skills />
    </ContainerAbout>
  )
}

export default About