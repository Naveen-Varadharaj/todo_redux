import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Productcard(props) {
  const navigate=useNavigate();
  
  return (
    <div className='card m-2 cursor-pointer' style={{width:300}} role='button' onClick={()=>navigate(`/product/${props.id}`)}>
         <div>
            <img src={props.thumbnail} height={200} width={200} alt={props.title} className='m-auto' />
            </div>
            <div className='card-body'>
              <h5 className='card-title text-center'>{props.title}</h5>
              <p className=' text-center'>Price: ${props.price}</p>
              <p className=' text-center'>Discount:{props.discountPercentage}</p>
              <p className='text-center'>Rating: {props.rating}</p>
              {props.stock > 0 ?<button className='btn btn-success'>Available</button>:<button className='btn btn-outline-danger'>Out of stock</button>}
            </div>
    </div>
 
  )
}
