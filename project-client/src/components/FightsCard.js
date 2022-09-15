import React from "react";
import { useEffect, useState } from "react";
import "./Fights.css";

function FightsCard({ fight, setClicked, ufcNum }) {

    let initialObj = {name: '', image: ''}
    const [blue, setBlue] = useState(initialObj)
    const [red, setRed] = useState(initialObj)



  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function handleBlueChange(e) {
    setBlue({ ...blue, [e.target.name]: e.target.value });
    console.log(blue)
  }
  function handleRedChange(e) {
    setRed({ ...red, [e.target.name]: e.target.value });
    console.log(red)
  }
  function handleSubmit(e) {
      e.preventDefault()

      //EDIT BLUE FIGHTER
    fetch(`http://localhost:9292/blue/${fight.blue_fighter.id}`, {
        method:'PATCH',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(blue)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBlue(initialObj)
        // setRed(initialObj)
        setClicked(prev => !prev)
      })
  }

  function handleRedSubmit(e) {
      e.preventDefault()
            // EDIT RED FIGHTER
    fetch(`http://localhost:9292/red/${fight.red_fighter.id}`, {
        method:'PATCH',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(red)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRed(initialObj)
        // setRed(initialObj)
        setClicked(prev => !prev)
      })
  }


  //DELETE FIGHT

  function handleClick() {
    fetch(`http://localhost:9292/fight/${fight.id}`, {
        method:'Delete',
        headers: {
          'Content-Type' : 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRed(initialObj)
        // setRed(initialObj)
        setClicked(prev => !prev)
      })
  }

  return (
    <div className="fightersCard">
      <div className="eachFighter">
        <img alt=""
          className="fighterPic"
          src={fight.blue_fighter.image}
        />
        <h2>{fight.blue_fighter.name}</h2>
        <div >
          <form onSubmit={handleSubmit} action="/action_page.php">
            <input 
            onChange={handleBlueChange}
              className="inputFront"
              type="text"
              id="fname"
              name="name"
              placeholder="Your name.."
              value={blue.name}
            />
            <input className="inputFront" value={blue.image} onChange={handleBlueChange} type="text" id="lname" name="image" placeholder="image" />
            <input className="submitBtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="details">
        <button onClick={handleClick} className="deleteBtn">DELETE</button>
        <h1>UFC {getRandomInt(300)}</h1>
        <div className="info">
          <div>
            <p className="writing">{fight.blue_fighter.age}</p>
            <p className="writing">{fight.blue_fighter.reach}</p>
            <p className="writing">{fight.blue_fighter.weight}</p>
            <p className="writing">{fight.blue_fighter.height}</p>
          </div>
          <div className="attr">

            <p className="middle">AGE</p>
            <p className="middle">HEIGHT</p>
            <p className="middle">WEIGHT</p>
            <p className="middle">REACH</p>
            <p className="weightclass">{fight.weight_class}</p>
          </div>
          <div>
            <p className="writing">{fight.red_fighter.age}</p>
            <p className="writing">{fight.red_fighter.reach}</p>
            <p className="writing">{fight.red_fighter.weight}</p>
            <p className="writing">{fight.red_fighter.height}</p>
          </div>
        </div>
      </div>
      <div className="eachFighter">
        <img alt=""
          className="fighterPic"
          src={fight.red_fighter.image}
        />
        <h2>{fight.red_fighter.name}</h2>
        <div>
          <form onSubmit={handleRedSubmit} action="/action_page.php">
            <input 
            value={red.name}
              className="inputFront"
              onChange={handleRedChange}
              type="text"
              id="fname"
              name="name"
              placeholder="Your name.."
            />
            <input className="inputFront" onChange={handleRedChange} value={red.image} type="text" id="lname" name="image" placeholder="image" />
            <input className="submitBtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default FightsCard;
