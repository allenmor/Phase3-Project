import './App.css';
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar'
import FrontPage from './components/FrontPage'
import Fights from './components/Fights';
import CreateFight from './components/CreateFight';
import {useEffect, useState } from 'react'

function App() {

  const [fights, setFights] = useState([])
  const [clicked, setClicked] = useState(true)

  useEffect(() => {
    fetch('http://localhost:9292/fights')
    .then(res => res.json())
    .then(data => {
      setFights(data)
    })
  },[clicked])


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/fights' element={<Fights setClicked={setClicked} fights={fights}/>} />
        <Route path='/createfighter' element={<CreateFight />} />
      </Routes>
    </>
  );
}

export default App;
