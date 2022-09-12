import React from "react";
import './FrontPage.css'

function FrontPage() {
  return (
    <>
      <div className="img"></div>
      <div className="center">
        <div className="title">UFC 279: DIAZ VS FERGUSON</div>
        <div className="sub_title">HE'S NOT SURPRISED</div>
        <div className="sub_title">Nate Diaz submits Tony Ferguson in Round 4</div>
        <div className="btns">
          <button>Learn More</button>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
