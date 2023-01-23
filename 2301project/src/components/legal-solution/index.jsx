import React from 'react'
import Image from "../../images/aboutimg2.webp"
import "./index.scss"
import { Collapse } from 'antd';
const { Panel } = Collapse;
const LegalSolutions = () => {
    const onChange = (key) => {
        console.log(key);
      };
  return (
    <div id='legal'>
        <div className="container">
            <div className="legalSections">
                <div className="image">
                    <img src={Image} alt="" />
                </div>
                <div className="text-one">
                    <h1 className='text-h1'>We Have <span>Legal <br /> Solutions</span></h1>
                    <p className='text-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
                    <p className='text-p'>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
                    <ul>
                        <li>
                        <i className="fa-solid fa-check"></i> Aperiam iste nam molestias
                        </li>
                        <li>
                        <i className="fa-solid fa-check"></i> Modi perferendis ipsa
                        </li>
                        <li>
                        <i className="fa-solid fa-check"></i> Perspic iste culpa
                        </li>
                    </ul>
                </div>
                <div className="text-two">
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="How to download and register?" key="1">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
      </Panel>
      <Panel header="How to create your paypal account?" key="2">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
      </Panel>
      <Panel header="How to link your paypal and bank account?" key="3">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
      </Panel>
    </Collapse>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LegalSolutions
