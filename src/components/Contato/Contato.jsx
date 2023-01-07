import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Title from "../Title/Title";
import { ContainerContato } from "./styles";
const Contato = () => {
  return (
    <ContainerContato id="contato">
        <Title title="CONTATO" />
        <div>
            <a href="https://www.linkedin.com/in/miguel-fiais/" target="blank"><BsLinkedin/>Miguel Fiais</a>
            <a href="https://api.whatsapp.com/send?phone=5575981499664" target="blank"><BsWhatsapp/> (75) 98149-9664</a>
            <a href="https://github.com/miguelfiais" target="blank"><BsGithub/> Miguel Fiais</a>
            <a href="mailto:miguel.fiais10@gmail.com" target="blank"><HiOutlineMail/>miguel.fiais10@gmail.com</a>
        </div>
    </ContainerContato>
  )
}

export default Contato