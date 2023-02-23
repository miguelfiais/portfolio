import Title from "../Title/Title"
import templateTodo from '../../assets/templateTodo.png'
import templateConvert from '../../assets/templateConvert.png'
import templateBlog from '../../assets/templateBlog.png'
import templateForm from '../../assets/templateForm.png'
import templateCalc from '../../assets/templateCalc.png'
import templateGuia from '../../assets/templateGuia.png'
import templateEdie from '../../assets/templateEdie.png'
import templateNike from '../../assets/templateNike.png'
import templateFlix from '../../assets/templateFlix.png'
import templateWeather from '../../assets/templateWeather.png'

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

          <ItemProject template={templateWeather} name= "Weather"  descrition='O projeto é capaz de obter informações climáticas, como temperatura, estado do vento, pressão do ar, visibilidade, umidade e as previsões climáticas para os próximos 5 dias, assim que a pessoa digitar o nome de alguma cidade. A interface foi criada de forma simples e intuitiva, com campo de busca para digitar o nome da cidade e o botão de busca, assim que o usuário digita e busca as informações são exibidas logo em seguida. O projeto foi desenvolvido com React e usa a API do weatherapi.com para obter as informações climáticas.' link1="https://github.com/miguelfiais/weather" link2="https://mfweather.netlify.app/"
          icon={<SiReact />} icon2={<SiStyledcomponents />} data="23/01/2023"/>

          <ItemProject template={templateTodo} name= "To Do List"  descrition='Eu criei um aplicativo de lista de tarefas usando React que me permite adicionar, atualizar e excluir tarefas. Além disso, eu incluí três modos de exibição diferentes: "all", "active" e "completed". Para alternar entre os modos de exibição, usei a biblioteca React Router DOM para criar rotas diferentes para cada modo. Para garantir que as tarefas sejam salvas mesmo após a atualização da página, implementei o uso do LocalStorage do navegador. Por fim, para permitir que diferentes componentes da aplicação acessem informações de contexto, utilizei a API useContext do React. Com isso, pude compartilhar informações sobre as tarefas entre os diferentes componentes, tornando a construção do aplicativo mais fácil e intuitiva.' link1="https://github.com/miguelfiais/todo-list" link2="https://mftodolist.netlify.app/"
          icon={<SiReact />} icon2={<SiStyledcomponents />} data="17/09/2022"/>

          <ItemProject template={templateFlix} name= "Rocketflix"  descrition='Desenvolvi o projeto com React para resolver um desafio da Rocketseat. Utilizei a API do TMDB para exibir filmes aleatórios ao clicar em "Encontrar Filme". Estudei a documentação da API antes de começar o projeto. Criei uma interface simples com React e implementei a lógica para requisição e tratamento da resposta da API. Enfrentei desafios, mas consegui completar o projeto com sucesso.' link1="https://github.com/miguelfiais/rocketflix" link2="https://mfrocketflix.netlify.app/"
          icon={<SiReact />} icon2={<SiStyledcomponents />} data="21/01/2023"/>

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

        </Gallery>
        <BoxButton isOpen={isOpen}>
          <button onClick={()=> setIsOpen(!isOpen)}>Mostrar mais</button>
          <button onClick={()=> setIsOpen(!isOpen)}>Mostrar Menos</button>
        </BoxButton>
    </ContainerProjects>
  )
}

export default Projects