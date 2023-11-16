import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const[time,setTime]=useState(10);
    const navigate=useNavigate();

    useEffect(()=>{
        setInterval(()=>{
            setTime(time=>time-1)
        },1000)
        setTimeout(()=>{
            navigate("/");
        },10000)
    }, [navigate])
  return (
    <div>
        <h3>Your order placed sucessfully. You will be redirected to home page in {time} seconds</h3>
    </div>
  )
}
