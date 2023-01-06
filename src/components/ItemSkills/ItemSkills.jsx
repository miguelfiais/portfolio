import React from 'react'
import { BoxItem } from './styles'

const ItemSkills = ({name, icon}) => {
  return (
    <BoxItem>
        <p>{name}</p>
        {icon}
    </BoxItem>
  )
}

export default ItemSkills