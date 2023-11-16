import React from 'react'

export default function Productlistitems(props) {
  return (
    <div className='d-flex m-2 align-items-center justify-content-center flex-wrap'>
            <img src={props.thumbnail} height={200} width={200} alt={props.title} className='me-4 align-items-center' />
            <h5 className='card-title text-center me-4 ms-4' style={{"width": "200px"}}>{props.title}</h5>
            <div><button className='btn btn-success me-4 ms-4' onClick={props.incrementItem}>+</button>
            <span className=' me-4 ms-4'><strong>Quantity {props.count} </strong></span>
            <button className='btn btn-success me-4  ms-4' onClick={props.decrementItem}> - </button>
            <button className='btn btn-danger me-4 ms-4'onClick={props.removeItem} >Remove from cart</button>
            </div>
    </div>
  )
}
