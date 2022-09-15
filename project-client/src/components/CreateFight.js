import React from "react";
import "./CreateFight.css";
import {Helmet} from 'react-helmet'
import { useState, useEffect } from "react";

function CreateFighter({setClicked}) {
  let initalFighterObj = {
    name: "",
    age: "",
    image: "",
    reach: "",
    weight: "",
    height: "",
  };
  const [red, setRed] = useState(initalFighterObj);
  const [blue, setBlue] = useState(initalFighterObj);


  //BLUE FIGHTER INPUT
  function handleBlueChange(e) {
    setBlue({ ...blue, [e.target.name]: e.target.value });
    console.log("blue", blue);
  }

  // RED FIGHTER INPUT
  function handleRedChange(e) {
    setRed({ ...red, [e.target.name]: e.target.value });
    console.log("red", red);
  }

  function handleSubmit(e) {
    e.preventDefault()
    // setBlue(initalFighterObj);
    // setRed(initalFighterObj);

    //POST BLUE FIGHTER
    fetch('http://localhost:9292/blue', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(blue)
    })
    .then(res => res.json())
    .then(data => {
      console.log('newbluefighter', data)
    })

    //POST RED FIGHTER
    fetch('http://localhost:9292/red', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(red)
    })
    .then(res => res.json())
    .then(data => {
      console.log('newredfighter', data)
    })

    //PostFight
    fetch('http://localhost:9292/fight', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setBlue(initalFighterObj)
      setRed(initalFighterObj)
      setClicked(prev => !prev)
    })

  }

  return (
    <>
    <div className="backgrounD">
    {/* <h3 id="bg_title">UFC</h3> */}
    <form  onSubmit={handleSubmit} className="formBody">
      {/* BLUE CORNER FIGHTER */}
      <div className="form">
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
        <div className="title">Blue Corner</div>
        <div className="subtitle">Enter Fighter Info</div>
        <div className="input-container ic1">
          <input
            onChange={handleBlueChange}
            id="name"
            className="input"
            type="text"
            placeholder=" "
            name="name"
            value={blue.name}
          />
          <div className="cut"></div>
          <label htmlFor="name" className="placeholder">
            Name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={handleBlueChange}
            id="age"
            className="input"
            type="number"
            placeholder=" "
            name="age"
            value={blue.age}
          />
          <div className="cut"></div>
          <label htmlFor="age" className="placeholder">
            Age
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={handleBlueChange}
            value={blue.image}
            id="image"
            className="input"
            type="text"
            placeholder=" "
            name="image"
          />
          <div className="cut cut-short"></div>
          <label htmlFor="image" className="placeholder">
            Image
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={handleBlueChange}
            value={blue.reach}
            id="reach"
            className="input"
            type="number"
            placeholder=" "
            name="reach"
          />
          <div className="cut cut-short"></div>
          <label htmlFor="reach" className="placeholder">
            Reach
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={handleBlueChange}
            value={blue.weight}
            id="weight"
            className="input"
            type="number"
            placeholder=" "
            name="weight"
          />
          <div className="cut cut-short"></div>
          <label htmlFor="weight" className="placeholder">
            Weight
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={handleBlueChange}
            value={blue.height}
            id="height"
            className="input"
            type="number"
            placeholder=" "
            name="height"
          />
          <div className="cut cut-short"></div>
          <label htmlFor="height" className="placeholder">
            Height
          </label>
        </div>
      </div>
      {/* Button  */}
      <div className="wrapper">
        <a className="buttonA" href="#">
          <input className="span" type='submit' value='Create Fight'></input>
        </a>
      </div>
      {/* BUTTON  */}

      {/* RED CORNER FIGHTER */}
      <div className="form">
        <div className="title">Red Corner</div>
        <div className="subtitle">Enter Fighter Info</div>
        <div className="input-container ic1">
          <input
          value={red.name}
            onChange={handleRedChange}
            id="name"
            className="input"
            type="text"
            placeholder=" "
            name="name"
          />
          <div className="cut"></div>
          <label htmlFor="name" className="placeholder">
            Name
          </label>
        </div>
        <div className="input-container ic2">
          <input
          value={red.age}
            onChange={handleRedChange}
            id="age"
            className="input"
            type="number"
            placeholder=" "
            name="age"
          />
          <div className="cut"></div>
          <label htmlFor="age" className="placeholder">
            Age
          </label>
        </div>
        <div className="input-container ic2">
          <input
          value={red.image}
            onChange={handleRedChange}
            id="image"
            className="input"
            type="text"
            placeholder=" "
            name="image"
          />
          <div className="cut cut-short"></div>
          <label htmlFor="image" className="placeholder">
            Image
          </label>
        </div>
        <div className="input-container ic2">
          <input
          value={red.reach}
            onChange={handleRedChange}
            id="reach"
            className="input"
            type="number"
            placeholder=" "
            name="reach"
          />
          <div className="cut cut-short"></div>
          <label htmlFor="reach" className="placeholder">
            Reach
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={handleRedChange}
            id="weight"
            className="input"
            type="number"
            placeholder=" "
            name="weight"
            value={red.weight}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="weight" className="placeholder">
            Weight
          </label>
        </div>
        <div className="input-container ic2">
          <input
          value={red.height}
            onChange={handleRedChange}
            id="height"
            className="input"
            type="number"
            placeholder=" "
            name="height"
          />
          <div className="cut cut-short"></div>
          <label htmlFor="height" className="placeholder">
            Height
          </label>
        </div>
      </div>
    </form>
    </div>
    </>
  );
}

export default CreateFighter;
