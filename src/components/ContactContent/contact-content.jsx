import React from 'react'
import '../TermsContent/terms.css'
import { Headset } from 'lucide-react';
import { contactContent } from "../../../constants/constant";

const ContactContent = () => {
 
  return (
<div className="wrapper flex_align_justify bg-color scrollbar">
      
      <div className="terms_services ">
        <div className="tc_item tc_head flex_align_justify">
          <div className="icon flex_align_justify">
            <Headset />
          </div>
          <div className="text">
            <h2>CONTACT US</h2>
            <p>Get in touch with us!</p>
          </div>
        </div>
        <div className="tc_item tc_body scrollbar">
          {contactContent.map((item) => {
            return (
              <ol className='contact-text' key={item.heading}>
                <li className='mt-4'>
                  <h3 className='text-base'>{item.heading} :</h3>
                  <p className='text-left tracking-widest font-semibold'>{item.content}</p>
                </li>
              </ol>
            );
          })}
        </div>
        <div className="tc_item tc_foot flex_align">
          <button
            className='decline_btn'
            
          >
            <a href="tel:+914567893246">Call</a>
          </button>
          <button
            className='decline_btn'
           
          >
           <a href="mailto:fhghjj@gmail.com">E-mail</a>
          </button>
          <button className='decline_btn' >
           Chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactContent