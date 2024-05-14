import React, {useState} from "react";
import { SquareTerminal } from "lucide-react";

import { NavLink } from "react-router-dom";

import "./terms.css";
import { termsData } from "../../../constants/constant";

import {Toaster, toast} from 'react-hot-toast'

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
      toast.success('Congrats! Accepted')
    }
    const declineToggle = () => {
      setHide(!hide)
      showToggle();
      toast.error('Uhh Ohh! Declined')
    }
  return (
    <div className="wrapper flex_align_justify bg-color scrollbar text-black bg-red-500">
      <Toaster position='top-center' />
      <div className="terms_services my-32 ">
        <div className="tc_item tc_head flex_align_justify">
          <div className="w-10 h-10 bg-red-500 text-white rounded-full flex justify-center items-center mr-5">
            <SquareTerminal />
          </div>
          <div className="text-black">
            <h2 className="font-bold">TERMS OF SERVICE</h2>
            <p className="text-sm">Last updated on APRIL 2024</p>
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
