import React, { useState } from "react";
import "../TermsContent/terms.css";
import { privacyContent } from "../../../constants/constant";
import { Cookie } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivacyContent = () => {
  const [hide, setHide] = useState(true);

  const acceptToggle = () => {
    setHide(!hide)
    toast('Congrats! Accepted')
  }
  const declineToggle = () => {
    setHide(!hide)
    toast('Uhh Ohh! Declined')
  }

  return (
    <div className="wrapper flex_align_justify bg-color scrollbar">
          <ToastContainer theme="dark" draggable 
          transition: Bounce
/>
      <div className="terms_services ">
        <div className="tc_item tc_head flex_align_justify mobile">
          <div className="icon flex_align_justify ">
            <Cookie />
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
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
