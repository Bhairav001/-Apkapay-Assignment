import React, { useContext } from 'react'
import { createData } from '../searchBus/SearchBus'
const ListBus = () => {
  const myData = useContext(createData)
  console.log("myData",myData)
  return (
    <div>
   
    </div>
  )
}

export default ListBus