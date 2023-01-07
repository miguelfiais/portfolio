import Title from "../Title/Title"
import templateTodo from '../../assets/templateTodo.png'
import templateConvert from '../../assets/templateConvert.png'
import templateBlog from '../../assets/templateBlog.png'
import templateForm from '../../assets/templateForm.png'
import templateCalc from '../../assets/templateCalc.png'

import { SiCss3, SiJavascript, SiStyledcomponents, SiNodedotjs, SiHtml5, SiReact, SiGit} from "react-icons/si";
import { ContainerProjects } from "./styles"


const Projects = () => {
  return (
    <ContainerProjects id="projects" className="container">
        <Title title="PROJETOS"/>
        <h2>Desenvolvimento</h2>
    </ContainerProjects>
  )
}

export default Projects