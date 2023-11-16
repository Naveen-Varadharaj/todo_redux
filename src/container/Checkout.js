import React, { useState } from 'react'
import { useContext } from 'react';
import {  useSelector } from 'react-redux'
import Productlistitems from '../components/Productlistitems';

import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../App';
export default function Checkout() {
  const productlist = useContext(UserContext);

  const params=useParams();
  const navigate=useNavigate();
  const list = useSelector((state) => state.cart.list);
  const[state,setState]= useState(params.id? [ {...productlist.find((el)=>el.id=== parseInt(params.id)), count:1}]: list)
  console.log(list);
  const incrementItem = (item) => {
    
    const index= state.findIndex((e)=>e.id===item.id)
    setState((state)=>[
        ...state.slice(0,index), 
        {...item, count:item.count+1},
        ...state.slice(index+1)]
    )
  }
  const decrementItem = (item) => {
    if(item.count===1){
      removeItemfromcart(item);
    }
    else{
   
        const index= state.findIndex((e)=>e.id===item.id)
        setState((state)=>[
            ...state.slice(0,index), 
            {...item, count:item.count-1},
            ...state.slice(index+1)]
        )
    }
  }
  const removeItemfromcart = (item) => {
    
    const index= state.findIndex((e)=>e.id===item.id)
    setState((state)=>[
        ...state.slice(0,index), 
       
        ...state.slice(index+1)]
    )
  }
  return (
    <div>
      {state.length>0 ? 
      <>
      {state.map((lis) => <Productlistitems {...lis} key={lis.id} incrementItem={() => incrementItem(lis)} 
      decrementItem={() => decrementItem(lis)} 
      removeItem={() => removeItemfromcart(lis)} 
      />)}
      <button className='btn btn-info'onClick={()=>navigate('/success')}>Place order</button>
      </>:<h3>No items in the checkout</h3>}
    </div>
  )
}
