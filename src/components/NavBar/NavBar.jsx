import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline, IoLibraryOutline} from "react-icons/io5";
import { MdOutlineWorkOutline, MdOutlineMenu } from "react-icons/md";
import Menu from "../Menu/Menu";
import { BoxHeader } from "./styles"

const NavBar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <BoxHeader>
        <nav>
            <a href="#home"><h1>Portfólio</h1></a>
            <ul>
                <li><a href="#home"> <AiOutlineHome/> Ínicio</a></li>
                <li><a href="#about"><IoPersonOutline/> Sobre mim</a></li>
                <li><a href="#skills"><IoLibraryOutline/> Conhecimentos</a></li>
                <li><a href="#projects"><MdOutlineWorkOutline/> Projetos</a></li>
            </ul>
            <button className="openMenu" onClick={()=> setMenuIsVisible(!menuIsVisible)}><MdOutlineMenu /></button>
            <Menu menuisVisible={menuIsVisible} setMenuisVisible={setMenuIsVisible}/>
        </nav>
    </BoxHeader>
  )
}

export default NavBar