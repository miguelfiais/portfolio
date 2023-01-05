import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { IoPersonOutline, IoLibraryOutline} from "react-icons/io5";
import { MdOutlineWorkOutline, MdOutlineMenu } from "react-icons/md";
import { MenuMobile } from "./styles";

const Menu = ({menuisVisible, setMenuisVisible}) => {

  return (
    <MenuMobile isVisible={menuisVisible}>
        <button onClick={()=> setMenuisVisible(!menuisVisible)}><AiOutlineClose/></button>
        <li><a href="#home" onClick={()=> setMenuisVisible(!menuisVisible)}> <AiOutlineHome/> Ínicio</a></li>
        <li><a href="#about" onClick={()=> setMenuisVisible(!menuisVisible)}><IoPersonOutline/> Sobre mim</a></li>
        <li><a href="#skills" onClick={()=> setMenuisVisible(!menuisVisible)}><IoLibraryOutline/> Conhecimentos</a></li>
        <li><a href="#projects" onClick={()=> setMenuisVisible(!menuisVisible)}><MdOutlineWorkOutline/> Projetos</a></li>
    </MenuMobile>
  )
}

export default Menu