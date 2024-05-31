import React from "react";
import "./movieDesc.css";
import { Dot } from "lucide-react";

const MovieDesc = () => {
  return (
    <div>
      <div className=""><img src="/" alt="" /></div>
      <div className="flex justify-start ml-7">
        <div className="heading text-5xl">KALKI</div>
      </div>
      <div>
        <p className="style flex items-start justify-start ml-7">
          2024
          <Dot />
          2h 50m
          <Dot />4 Languages
          <Dot />
          U/A 16+
        </p>
      </div>

      <div className=" ml-7">
        <p>
          Action movies are a thrilling rollercoaster ride of adrenaline-pumping
          excitement, typically featuring intense sequences of combat, stunts,
          and daring feats. These films often revolve around a protagonist who
          finds themselves embroiled in high-stakes situations, from saving the
          world from imminent destruction to seeking revenge against formidable
          adversaries.
        </p>
        <p className="about">Action | Thriller | Power Struggle</p>
      </div>
    </div>
  );
};

export default MovieDesc;
