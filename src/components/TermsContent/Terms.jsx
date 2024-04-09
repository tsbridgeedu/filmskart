import React from 'react'
import './terms.css'

const Terms = () => {
  return (
    <div className='wrapper flex_align_justify'>
      <div className="terms_services">
        <div className="tc_item tc_head flex_align_justify">
          
          <div className='text'>
          <h2>TERMS OF SERVICE</h2>
          <p>Last updated on APRIL 2024</p>
          </div>
        </div>
        <div className="tc_item tc_body">
          <ol>
            <li>
              <h3 >Terms of use</h3>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
Your continued use of the website after any such changes constitute your acceptance of the new Terms.</p>
            </li>
            <li>
              <h3 >Intellectual property rights</h3>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
Your continued use of the website after any such changes constitute your acceptance of the new Terms.</p>
            </li>
            <li>
              <h3 >Prohibited activities</h3>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
Your continued use of the website after any such changes constitute your acceptance of the new Terms.</p>
            </li>
            <li>
              <h3 >Terminal clause</h3>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
Your continued use of the website after any such changes constitute your acceptance of the new Terms.</p>
            </li>
            <li>
              <h3 >Governing law</h3>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
Your continued use of the website after any such changes constitute your acceptance of the new Terms.</p>
            </li>
          </ol>
        </div>
        <div className="tc_item tc_foot flex_align">
        <button className='decline_btn'>Declined</button> 
        <button className='accept_btn'>Accept</button> 
        </div>

        
      </div>
    </div>
  )
}

export default Terms