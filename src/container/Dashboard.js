import React from 'react'
import { useContext } from 'react';

import Productcard from "../components/Productcard"
import { UserContext } from '../App';
export default function Dashboard() {
   const productlist = useContext(UserContext);

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {productlist.map((product)=> <Productcard {...product} key={product.id} /> )} 
        
    </div>
  )
}
