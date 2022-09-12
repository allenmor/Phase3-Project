import React from "react";
import "./Fights.css";

function FightsCard() {
  return (
    // <div className="eachStadium">
    //   <div className="card">
    //     <div className="img-wrap">
    //       <div className="inline">
    //         <img
    //           className="stadiumImage"
    //           src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-06/FERGUSON_TONY_L_05-07.png?itok=Q-waozUA"
    //         />
    //       </div>
    //       <div className="inline">
    //         <img
    //           className="stadiumImage"
    //           src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-06/DIAZ_NATE_L_06-12.png?itok=RxIR0wS6"
    //         />
    //       </div>
    //     </div>

    //     <div className="stadiumInfo">
    //       <p>yoyo</p>
    //       <p></p>
    //     </div>
    //   </div>
    // </div>
    <div className="fighterBox">
        <div className="fighterPics">
         <img
              className="fighterPic"
              src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-06/DIAZ_NATE_L_06-12.png?itok=RxIR0wS6"
            />
         <img
              className="fighterPic"
              src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-06/FERGUSON_TONY_L_05-07.png?itok=Q-waozUA"
            />
            </div>
    </div>
  );
}

export default FightsCard;
