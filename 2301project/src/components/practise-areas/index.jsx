import React from 'react'
import Capture from "../../images/Capture.PNG"
import Capture2 from "../../images/Capture2.PNG"
import Capture3 from "../../images/Capture3.PNG"
import Capture4 from "../../images/Capture4.PNG"
import Capture5 from "../../images/Capture5.PNG"
import Capture6 from "../../images/Capture6.PNG"
import "./index.scss"
const PracticesAreas = () => {
  return (
    <div id='practices'>
      <div className="container">
        <div className="card">
         <div className="cards">
         <img src={Capture} alt="" />
            <h3 className='cards-h3'>Bankruptcy Law</h3>
            <p className='cards-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
         </div>
         <div className="cards">
         <img src={Capture2} alt="" />
            <h3 className='cards-h3'>Business Law</h3>
            <p className='cards-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
         </div>
         <div className="cards">
         <img src={Capture3} alt="" />
            <h3 className='cards-h3'>Civil Rights Law</h3>
            <p className='cards-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
         </div>
         <div className="cards">
         <img src={Capture4} alt="" />
            <h3 className='cards-h3'>Criminal Law</h3>
            <p className='cards-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
         </div>
         <div className="cards">
         <img src={Capture5} alt="" />
            <h3 className='cards-h3'>Immigration Law</h3>
            <p className='cards-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
         </div>
         <div className="cards">
         <img src={Capture6} alt="" />
            <h3 className='cards-h3'>Family Law</h3>
            <p className='cards-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default PracticesAreas
