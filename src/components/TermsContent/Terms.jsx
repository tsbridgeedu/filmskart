import React, {useState} from "react";
import { SquareTerminal } from "lucide-react";

import { NavLink } from "react-router-dom";

import "./terms.css";
import { termsData } from "../../../constants/constant";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Terms = () => {
  const [hide,setHide] = useState(true)
  const [home, setHome] = useState(false);

  const showToggle = () => {
    setHome(!home)
   
  }
  
    const acceptToggle = () => {
      setHide(!hide)
      // setHome(!home)
      showToggle();
      toast('Congrats! Accepted')
    }
    const declineToggle = () => {
      setHide(!hide)
      showToggle();
      toast('Uhh Ohh! Declined')
    }
  return (
    <div className="wrapper flex_align_justify bg-color scrollbar">
      <ToastContainer theme="dark" draggable transition:Bounce />
      <div className="terms_services ">
        <div className="tc_item tc_head flex_align_justify">
          <div className="icon flex_align_justify">
            <SquareTerminal />
          </div>
          <div className="text">
            <h2>TERMS OF SERVICE</h2>
            <p>Last updated on APRIL 2024</p>
          </div>
        </div>
        <div className="tc_item tc_body scrollbar">
          {termsData.map((item) => {
            return (
              <ol key={item.heading}>
                <li>
                  <h3>{item.heading} :</h3>
                  <p>{item.content}</p>
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

export default Terms;
