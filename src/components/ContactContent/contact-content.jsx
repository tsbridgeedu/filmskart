import React from 'react'
import '../TermsContent/terms.css'
import { Headset, Scale } from 'lucide-react';
import { contactContent } from "../../../constants/constant";
import { Button } from '@mui/material';

const ContactContent = () => {
 
  return (
<div className="wrapper flex_align_justify bg-red-500 scrollbar">
      
      <div className="terms_services ">
        <div className="tc_item tc_head flex_align_justify">
          <div className="icon flex_align_justify">
            <Headset size={25} />
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
        <div className="flex w-full  justify-around items-center max-w-full p-4">
          
           <Button variant='contained' sx={{
            bgcolor:'#e85a4f',
            fontFamily:'Poppins',
            padding:'',
            ":hover": {
              bgcolor:'transparent'
            }
           }}>
           <a href="tel:+914567893246">Call</a>
           </Button>
          
           <Button variant='contained' sx={{
            bgcolor:'#ef4444',
            fontFamily:'Poppins',
            ":hover": {
              bgcolor:'transparent'
            }
           }}>
           <a href="mailto:fhghjj@gmail.com">E-mail</a>
           </Button>
          <Button variant='contained' sx={{
            bgcolor:'#ef4444',
            fontFamily:'Poppins',
            ":hover": {
              bgcolor:'transparent',
              
            }
           }}>
           Chat
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactContent