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
            <p>Meu nome é Miguel Fiais, tenho 21 anos, moro em Cruz das Almas-BA.</p>
            <br />
            <p>Sou um desenvolvedor Front-End focado no desenvolvimento Web. Gosto de solucionar problemas, criar novas aplicações através dos códigos e lidar com inovações na área de tecnologia. Estou constantemente aprimorando meus conhecimentos e também aprendendo novas tecnologias que fazem parte Back-End para eu ser um profissional Full-Stack.</p>
          </div>
        </BoxInfo>
        <Title title="CONHECIMENTOS"/>
        <Skills />
    </ContainerAbout>
  )
}

export default About