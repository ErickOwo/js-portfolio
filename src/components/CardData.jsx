import React from "react";

const CardData = ({ picture, firstName, lastName, email, coutry})=>{
  return(
    <>
      <div className="card_details">
        <div className="card_photo center circle">
          <img src={picture} alt={firstName} />
          <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            style={{ enableBackground: "new -580 439 577.9 194" }}
            xmlSpace="preserve">
              <circle 
                cx="50" 
                cy="50" 
                r="40" />
          </svg>
        </div>
        <p className="card_title">Hi, My name is</p>
        <p className="card_value">{firstName} {lastName}</p>
      </div>
      <div className="card_userdata">
        <ul>
          <li>{email}</li>
          <li>{coutry}</li>
        </ul>
      </div>
    </>
  );
};

export default CardData;