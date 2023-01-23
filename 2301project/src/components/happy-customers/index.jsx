import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";
import "./styles.scss"
import { Link } from 'react-router-dom';

const HappyCustomers = () => {
    const [customer, setCustomer] = useState([]);
    
    const getData = async() => {
        let response = await axios.get("http://localhost:8000/customer")
        setCustomer(response.data)
    }
    useEffect(() => {
      getData()
    }, []);
   const handleSearch = (e) => {
    axios.get("http://localhost:8000/customer")
    .then((response) => {
      let searchCustomer = response.data.filter((element) => {
        return element.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      })
      setCustomer(searchCustomer)
    })
   }
//    const handleSortByName = (obj) => {
//  setCustomer(obj.sort((a, b) => a.name - b.name ? 1 : -1))
    
//    }
  return (
    <div id='happy-customer'>
      <div className="container">
        <div className="customers">
        <Swiper
          slidesPerView={3}
          spaceBetween={35}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
         {customer.map((element) => {
            return <SwiperSlide>
               <div className="customer-about">
               <div className="customer">
                   <Link to={`/home/${element._id}`}> <img src={element.imgUrl} alt="" /></Link>
                    <h5 className='text-h5'>{element.name} <br /> <span>{element.title}</span></h5>
                </div>
                <p className='text_p_customer'>{element.description}</p>
               </div>
                </SwiperSlide>
         })}
        </Swiper>
       <div className="input">
       <input type="text" placeholder='Seacrh by Name' onChange={(e) => handleSearch(e)}/>
       {/* <button onClick={() => handleSortByName(customer)}>Sort Name</button> */}
       </div>
        </div>
      </div>
    </div>
  )
}

export default HappyCustomers
