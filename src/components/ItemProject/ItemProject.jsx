import { Item, Modal } from './styles'
import { MdClose } from "react-icons/md";
import { useEffect, useState } from 'react';

const ItemProject = ({template, name, icon, icon2, icon3, data, descrition, link1, link2}) => {

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = modalOpen ? "hidden" : "auto"
  }, [modalOpen])

  return (
    <Item>
        <img src={template} alt="modelo do projeto" />
        <div className='details'>
            <h2>{name}</h2>
            <div className='skills'>
              {icon} {icon2} {icon3}
            </div>
        </div>
        <div className="data">
            <p>{data}</p>
            <button onClick={()=> setModalOpen(!modalOpen)}>Ver Mais</button>
        </div>
        <Modal isOpen={modalOpen}>
          <div className='conteudo-modal'>
            <button onClick={()=> setModalOpen(!modalOpen)}><MdClose /></button>
            <img src={template} alt="modelo do projeto" />
            <div>
              <h2>{name}</h2>
              <p>{descrition}</p>
              <div className='links'>
                <a href={link1} target="_blank">Repositório</a>
                <a href={link2} target="_blank">Ver projeto</a>
              </div>
            </div>
          </div>
        </Modal>
    </Item>
  )
}

export default ItemProject