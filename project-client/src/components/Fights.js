import React from 'react'
import FightsCard from './FightsCard'
import './Fights.css'

function Fights({fights, setClicked}) {

    console.log(fights)
  return (
    <div>
       {fights.map((el, i) => {
           return <FightsCard setClicked={setClicked} key={i} fight={el} />
       })}
    </div>
  )
}

export default Fights
