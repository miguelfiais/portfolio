import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MenuMobile } from "./styles";
import { useEffect } from "react";

const Menu = ({menuisVisible, setMenuisVisible}) => {

  useEffect(() => {
    document.body.style.overflowY = menuisVisible ? "hidden" : "auto"
  }, [menuisVisible])

  return (
    <MenuMobile isVisible={menuisVisible} onClick={()=> setMenuisVisible(!menuisVisible)}>
        <button><AiOutlineClose/></button>
        <li><a href="#home" > <AiOutlineHome/> Ínicio</a></li>
        <li><a href="#about"><IoPersonOutline/> Sobre mim</a></li>
        <li><a href="#projects"><MdOutlineWorkOutline/> Projetos</a></li>
        <li><a href="#contato"><FiPhoneCall/> Contato</a></li>
    </MenuMobile>
  )
}

export default Menu