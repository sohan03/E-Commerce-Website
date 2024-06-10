import React from 'react'
import  './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website allows customers to shop for products or services online. With a wide range of offerings, secure payment options, and convenient delivery, these platforms make shopping easy and accessible</p>
        </div>
    </div>
  )
}

export default DescriptionBox