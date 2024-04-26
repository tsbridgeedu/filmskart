import React from 'react'
import Navbar from '../src/components/Navbar/navbar'
import AddtoCartContent from '../src/components/AddToCart/AddtoCart'
import Footer from '../src/components/Footer/footer'

const AddtoCart = () => {
  return (
    <div>
        <Navbar />
        <AddtoCartContent />
        <Footer />
    </div>
  )
}

export default AddtoCart