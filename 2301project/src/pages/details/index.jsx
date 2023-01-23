import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./index.scss"

const Details = () => {
    const { _id } = useParams()
    const navigate = useNavigate()
    const [customerDetail, setCustomerDetail] = useState([]);
    const getDetailData = async() => {
        let response = await axios.get(`http://localhost:8000/customer/${_id}`)
        setCustomerDetail(response.data)
    }
    useEffect(() => {
        getDetailData()
    }, []);
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:8000/customer/${_id}`)
        navigate("/")
    }
  return (
    <div id='detail'>
      <div className="container">
        <div className="details">
            <img src={customerDetail.imgUrl} alt="" />
            <div className="text">
                <h1 className='detail-h1'>{customerDetail.name}</h1>
                <span className='detail-span'>{customerDetail.title}</span>
                <p className='detail-p'>{customerDetail.description}</p>
                <button className='backBtn' onClick={() => navigate("/")}>Back To Home</button>
                <button className='deleteBtn' onClick={() => handleDelete(customerDetail._id)}>Delete Customer</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details
