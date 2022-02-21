import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card cardSize m-3">
        <img src={props.imgsrc} className="card-img-top abc" alt="" />
        <div className="card-body mt-5 mx-auto">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.des}</p>

          <span
            className="btn btn-primary"
            onClick={() => window.open(props.visite)}
          >
            Buy Now
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
