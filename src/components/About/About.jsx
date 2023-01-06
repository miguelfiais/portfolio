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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum obcaecati architecto, hic porro numquam, reiciendis omnis sunt eum blanditiis nobis, rerum cumque deleniti laudantium nam beatae? Ut, tempora maxime? Vitae, quasi. Vero, eligendi! Beatae modi iure architecto dolorum quis! </p>
        </BoxInfo>
        <Title title="CONHECIMENTOS"/>
        <Skills />
    </ContainerAbout>
  )
}

export default About