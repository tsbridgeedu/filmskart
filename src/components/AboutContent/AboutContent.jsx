import React, {useState} from "react";
import { SquareTerminal } from "lucide-react";

import { NavLink } from "react-router-dom";

import "../TermsContent/terms.css";
import { aboutData} from "../../../constants/constant";

import {Toaster, toast} from 'react-hot-toast'

const AboutContent = () => {
  const [hide,setHide] = useState(true)
  const [home, setHome] = useState(false);

  const showToggle = () => {
    setHome(!home)
   
  }
  
    const acceptToggle = () => {
      setHide(!hide)
      // setHome(!home)
      showToggle();
      toast.success('Congrats! Accepted')
    }
    const declineToggle = () => {
      setHide(!hide)
      showToggle();
      toast.error('Uhh Ohh! Declined')
    }
  return (
    <div className="wrapper flex_align_justify bg-color scrollbar">
      <Toaster position='top-center' />
      <div className="terms_services ">
        <div className="tc_item tc_head flex_align_justify">
          <div className="icon flex_align_justify">
            <SquareTerminal />
          </div>
          <div className="text">
            <h2>About Us</h2>
            <p>Last updated on APRIL 2024</p>
          </div>
        </div>
        <div className="tc_item tc_body scrollbar">
          {aboutData.map((item) => {
            return (
              <ol key={item.heading}>
                <li>
                  <h3 className="text-lg font-extrabold text-white">{item.heading} :</h3>
                  <p className="text-white">{item.content}</p>
                </li>
              </ol>
            );
          })}
        </div>
        <div className="tc_item tc_foot flex_align">
          <button
            className={hide ? "decline_btn" : "display-none"}
            onClick={declineToggle}
          >
            Declined
          </button>
          <button
            className={hide ? "decline_btn" : "display-none"}
            onClick={acceptToggle}
          >
            Accept
          </button>
          <button className={home ? 'decline_btn' : 'display-none'} >
            <NavLink to="/">Home</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
