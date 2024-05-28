import React, { useState } from "react";
import "../TermsContent/terms.css";
import { privacyContent } from "../../../constants/constant";
import { Cookie } from "lucide-react";
import {Toaster, toast} from 'react-hot-toast'

import { NavLink } from "react-router-dom";

const PrivacyContent = () => {
  const [hide, setHide] = useState(true);
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
    <div className="wrapper flex_align_justify bg-#EF4444 scrollbar">
         <Toaster position='top-center' />
      <div className="terms_services ">
        <div className="tc_item tc_head flex_align_justify mobile">
          
          <div className="icon flex_align_justify " style={{ backgroundColor: "#EF4444" }}>
            <Cookie style={{ color: "white" }} />
          </div>
          <div className="text">
            <h2>Privacy POLICY</h2>
            <p>Last updated on APRIL 2024</p>
          </div>
        </div>
        <div className="tc_item tc_body scrollbar">
          {privacyContent.map((item) => {
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
          <button className={hide ? 'decline_btn' : 'display-none'} onClick={declineToggle}>
            Declined
          </button>
          <button className={hide ? 'decline_btn' : 'display-none'} onClick={acceptToggle}>
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

export default PrivacyContent;
