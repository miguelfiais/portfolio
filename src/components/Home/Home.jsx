import { ContainerHome, BoxSocials } from "./styles"
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import imageHome from "../../assets/home5.png"
const Home = () => {
  return (
    <ContainerHome className="container" id="home">
      <div>
            <h1>Miguel <span>Fiais</span></h1>
            <a href="https://git.io/typing-svg" target="_blank"><img src="https://readme-typing-svg.demolab.com?font=Raleway&weight=700&size=24&pause=2000&color=EAE2CF&vCenter=true&width=350&lines=DESENVOLVEDOR+FRONT+END" alt="Typing SVG" /></a>
            <BoxSocials>
              <a href="https://www.instagram.com/miguelfiais/" target="_blank"><BsInstagram /></a>
              <a href="https://www.linkedin.com/in/miguel-fiais/" target="_blank"><BsLinkedin /></a>
              <a href="https://github.com/miguelfiais" target="_blank"><BsGithub /></a>
            </BoxSocials>
        </div>
        <img src={imageHome} alt="home" />
    </ContainerHome>
  )
}

export default Home