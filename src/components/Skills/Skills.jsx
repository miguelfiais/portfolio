import React from 'react'
import ItemSkills from '../ItemSkills/ItemSkills'
import { SiCss3, SiJavascript, SiStyledcomponents, SiNodedotjs, SiHtml5, SiReact, SiGit, SiDocker, SiPostgresql, SiMongodb} from "react-icons/si";
import { ContainerSkills } from './styles';

const Skills = () => {
  return (
    <ContainerSkills>
        <ItemSkills name="HTML" icon={<SiHtml5/>}/>
        <ItemSkills name="CSS" icon={<SiCss3/>}/>
        <ItemSkills name="JavaScript" icon={<SiJavascript/>}/>
        <ItemSkills name="React" icon={<SiReact/>}/>
        <ItemSkills name="Node" icon={<SiNodedotjs/>}/>
        <ItemSkills name="Styled-Components" icon={<SiStyledcomponents/>}/>
        <ItemSkills name="Docker" icon={<SiDocker/>}/>
        <ItemSkills name="PostgreSQL" icon={<SiPostgresql/>}/>
        <ItemSkills name="MongoDB" icon={<SiMongodb/>}/>
        <ItemSkills name="Git" icon={<SiGit/>}/>
    </ContainerSkills>
  )
}

export default Skills