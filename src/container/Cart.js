import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Productlistitems from '../components/Productlistitems';
import { modifyItem, removeItem } from '../redux/reducer/cart';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const list = useSelector((state) => state.cart.list);
  console.log(list);
  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }))
  }
  const decrementItem = (item) => {
    if(item.count===1){
      dispatch(removeItem(item))
    }
    else{
    dispatch(modifyItem({ ...item, count: item.count - 1 }))
    }
  }
  const removeItemfromcart = (item) => {
    dispatch(removeItem(item ))
  }
  return (
    <div>
      {list.length>0 ? 
      <div>
      {list.map((lis) => <Productlistitems {...lis} key={lis.id} incrementItem={() => incrementItem(lis)} 
      decrementItem={() => decrementItem(lis)} 
      removeItem={() => removeItemfromcart(lis)} 
      />)}
      <button className='btn btn-warning'onClick={()=>navigate('/checkout')}>Go to checkout</button>
      </div>:<h3>No items in the cart</h3>}
    </div>
  )
}
