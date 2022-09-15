import React from "react";
import './FrontPage.css'

// let url = 'https://www.ufc.com/'
// let url2 = 'https://www.linkedin.com/in/tomasmakaj/'

function FrontPage() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="img"></div>
      <div className="center">
        <div className="title">UFC 279: DIAZ VS FERGUSON</div>
        <div className="sub_title">HE'S NOT SURPRISED</div>
        <div className="sub_title">Nate Diaz submits Tony Ferguson in Round 4</div>
        <div className="btns">
          <button onClick={() => openInNewTab('https://www.ufc.com/')}> Learn More </button>
          <button onClick={() => openInNewTab('https://www.linkedin.com/in/tomasmakaj/')}> Titleholder </button>
        </div>
      </div>
    </>
  );
}

export default FrontPage;