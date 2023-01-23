import React from 'react'
import Image1 from "../../images/aboutimg1.webp"
import Image2 from "../../images/aboutimg2.webp"
import "./index.scss"
const AboutSection = () => {
  return (
    <div id='about'>
      <div className="container">
        <div className="about-section">
          <div className="img1">
            <img src={Image1} alt="" />
          </div>
          <div className="img2">
            <img src={Image2} alt="" />
          </div>
          <div className="text">
            <h3 className='text-h3'>We Provide Highly <strong>Reliable <br /> & Effective</strong> Legal Solutions </h3>
            <p className='text-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
            <button className='text-btn'>Book an appointment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
