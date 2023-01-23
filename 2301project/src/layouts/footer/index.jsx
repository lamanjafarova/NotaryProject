import React from 'react'
import footerImg from "../../images/hero_bg_1.jpg.webp"
import "./index.scss"

const Footer = () => {
  return (
    <div id='footer'>
    <div className="footerSection">
    <img src={footerImg} alt="" />
        <div className="footerText">
            <p className='footer-p'>Copyright ©2023 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <span>Colorlib</span></p>
      </div>
    </div>
    </div>
  )
}

export default Footer
