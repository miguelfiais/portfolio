import Title from "../Title/Title"
import templateTodo2 from '../../assets/templateTodo2.png'
import templateConvert from '../../assets/templateConvert.png'
import templateBlog from '../../assets/templateBlog.png'
import templateForm from '../../assets/templateForm.png'
import templateCalc from '../../assets/templateCalc.png'
import templateGuia from '../../assets/templateGuia.png'
import templateEdie from '../../assets/templateEdie.png'
import templateNike from '../../assets/templateNike.png'

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
          <ItemProject template={templateTodo2} name= "To Do List"  descrition="Projeto desenvolvido no DevClub, com a finalidade de aprender React. Neste projeto o usuário adiciona tarefas do dia a dia, alterando o estado quando concluída e também deletar alguma tarefa. Com isso, aprendi sobre os Hooks do React o uso do useState, também a estilizar com Styled-components (CSS in JS), e definir CSS atrvés de algum dado através das props." link1="https://github.com/miguelfiais/to-do-list" link2="https://todolistreactm.netlify.app/"
          icon={<SiReact />} icon2={<SiStyledcomponents />} data="17/09/2022"/>

          <ItemProject template={templateConvert} name= "Convert Money" descrition="O Convert Money foi um projeto desenvolvido no curso do DevClub. Foi a partir dele que eu tive o primeiro contato com a DOM (Document Obeject Model), com objetivo de  manipular os elementos do HTML de forma dinâmina por determinado evento, através do JavaScript. Além disso, foi muito importante para treinar a lógica a de programação."  link1="https://github.com/miguelfiais/ConvertMoney" link2="https://miguelfiais.github.io/ConvertMoney/"
          icon={<SiHtml5 />} icon2={<SiCss3 />} icon3={<SiJavascript />}  data="07/07/2022"/>

          <ItemProject template={templateCalc} name= "Calculadora de Arbitragem" descrition="A calculadora de arbitragem serve para descobrir como garantir lucro num mercado bilateral ou trilateral. As apostas de arbitragem são maneiras sem riscos para as apostas que garante lucro.Envolvem o envio de apostas proporcionais em todos os resultados possíveis de um evento."
          icon={<SiHtml5 />} icon2={<SiCss3 />} icon3={<SiJavascript />}link1="https://github.com/miguelfiais/Calculadora-de-arbitragem" link2="https://miguelfiais.github.io/Calculadora-de-arbitragem/" data="26/07/2022"/> 

          <ItemProject template={templateGuia} name= "Guia Valorant" descrition="Desenvolvimento"
          link1="https://github.com/miguelfiais/valorant-information" 
          link2="https://guiavalorant.netlify.app/" icon={<SiReact />} icon2={<SiStyledcomponents />} data="13/12/2022"/>

          <ItemProject template={templateEdie} name= "Edie Homepage" descrition="Desafio da DevChallenges.io, para praticar HTML, CSS, e JavaScript na criação de uma página."
          link1="https://github.com/miguelfiais/edie-homepage-master" 
          link2="https://miguelfiais.github.io/edie-homepage-master/"  icon={<SiHtml5 />} icon2={<SiCss3 />} icon3={<SiJavascript />} data="05/09/2022"/>

          <ItemProject template={templateNike} name= "Landing page Nike" descrition="Landing page, layout extraido do figma. Esse projeto foi com a finalidade de praticar as tecnologias HTML e CSS. Também fiz o uso de JavaScript para fazer um menu mobile."
          link1="https://github.com/miguelfiais/Page-Nike" 
          link2="https://miguelfiais.github.io/Page-Nike/"  icon={<SiHtml5 />} icon2={<SiCss3 />} icon3={<SiJavascript />} data="05/09/2022"/>

          
          <ItemProject template={templateForm} name= "React Form" descrition="Nesse projeto fiz um formulário no React. Onde utilizei o React Hook Forms que facilita muito na criação de formulário, fazendo validação dos campos, como criar um Schema do formulário e também como verificar todos os dados do formulário."  link1="https://github.com/miguelfiais/forms-react" link2="https://flourishing-platypus-ff8700.netlify.app/"
          icon={<SiReact />} icon2={<SiStyledcomponents />} data="10/10/2022"/> 

          <ItemProject template={templateBlog} name= "Rocket Blog" descrition="Landing page de um site de nóticias, layout extraido do figma. Esse projeto foi um dos desafios da Rocketseat com a finalidade de praticar as tecnologias HTML e CSS. Também fiz o uso de JavaScript para fazer um menu mobile." link1="https://github.com/miguelfiais/Rocket-Blog" link2="https://miguelfiais.github.io/Rocket-Blog/"
          icon={<SiHtml5 />} icon2={<SiCss3 />} icon3={<SiJavascript />}  data="07/08/2022" />

        </Gallery>
        <BoxButton isOpen={isOpen}>
          <button onClick={()=> setIsOpen(!isOpen)}>Mostrar mais</button>
          <button onClick={()=> setIsOpen(!isOpen)}>Mostrar Menos</button>
        </BoxButton>
    </ContainerProjects>
  )
}

export default Projects