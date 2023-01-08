import Title from "../Title/Title"
import templateTodo2 from '../../assets/templateTodo2.png'
import templateConvert from '../../assets/templateConvert.png'
import templateBlog from '../../assets/templateBlog.png'
import templateForm from '../../assets/templateForm.png'
import templateCalc from '../../assets/templateCalc.png'
import templateGuia from '../../assets/templateGuia.png'

import { SiCss3, SiJavascript, SiStyledcomponents, SiNodedotjs, SiHtml5, SiReact} from "react-icons/si";
import { BoxButton, ContainerProjects, Gallery } from "./styles"
import ItemProject from "../ItemProject/ItemProject"
import { useState } from "react"


const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ContainerProjects id="projects" className="container">
        <Title title="PROJETOS"/>
        <Gallery isOpen={isOpen}>
          <ItemProject template={templateTodo2} name= "To Do List"  descrition="Projeto desenvolvido no DevClub, com a finalidade de aprender React. Neste projeto o usuário adiciona tarefas do dia a dia, alterando o estado quando concluída e também deletar alguma tarefa. Com isso, aprendi sobre os Hooks do React o uso do useState, também a estilizar com Styled-components (CSS in JS), e definir CSS atrvés de algum dado através das props." link1={"https://github.com/miguelfiais/to-do-list"} link2="https://todolistreactm.netlify.app/"
          icon={<SiReact />} icon2={<SiStyledcomponents />} data="07/01/2023"/>
          <ItemProject template={templateConvert} name= "Convert Money" descrition="O Convert Money foi um projeto desenvolvido no curso do DevClub. Foi a partir dele que eu tive o primeiro contato com a DOM (Document Obeject Model), com objetivo de  manipular os elementos do HTML de forma dinâmina por determinado evento, através do JavaScript. Além disso, foi muito importante para treinar a lógica a de programação."
          icon={<SiHtml5 />} icon2={<SiCss3 />} icon3={<SiJavascript />}  data="07/01/2023"/>
          <ItemProject template={templateCalc} name= "Calculadora de Arbitragem" descrition="A calculadora de arbitragem serve para descobrir como garantir lucro num mercado bilateral ou trilateral. As apostas de arbitragem são maneiras sem riscos para as apostas que garante lucro.Envolvem o envio de apostas proporcionais em todos os resultados possíveis de um evento."
          icon={<SiHtml5 />} icon2={<SiCss3 />} icon3={<SiJavascript />} data="07/01/2023"/>
          <ItemProject template={templateGuia} name= "Guia Valorant" descrition="Breve" 
          icon={<SiReact />} icon2={<SiStyledcomponents />} data="07/01/2023"/>
          <ItemProject template={templateBlog} name= "Rocket Blog" descrition="Breve" 
          icon={<SiHtml5 />} icon2={<SiCss3 />} icon3={<SiJavascript />}  data="07/01/2023"/>
          <ItemProject template={templateForm} name= "React Form" descrition="Breve" 
          icon={<SiReact />} icon2={<SiStyledcomponents />} data="07/01/2023"/>
        </Gallery>
        <BoxButton isOpen={isOpen}>
          <button onClick={()=> setIsOpen(!isOpen)}>Mostrar mais</button>
          <button onClick={()=> setIsOpen(!isOpen)}>Mostrar Menos</button>
        </BoxButton>
    </ContainerProjects>
  )
}

export default Projects