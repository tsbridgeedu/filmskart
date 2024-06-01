import React from 'react'
import Navbar from '../src/components/Navbar/navbar'
import AddtoCartContent from '../src/components/AddToCart/AddtoCart'
import Footer from '../src/components/Footer/footer'

const AddtoCart = (props) => {
  return (
    <div>
        
        <AddtoCartContent {...props} />
       
    </div>
  )
}

export default AddtoCart