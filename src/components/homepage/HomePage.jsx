import React from 'react'
import SearchBus from '../searchBus/SearchBus'
import Services from '../Services'
import Recommend from '../Recommend'
// ../../assets/hero.png
const HomePage = () => {
  return (
    <div>
        <SearchBus/>
        <Services/>
        <Recommend/>
    </div>
  )
}

export default HomePage