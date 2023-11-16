import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';
export default function Product() {
    const productlist = useContext(UserContext);
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const item = productlist.find(
        (el) => el.id === parseInt(params.id)
    );
    const list = useSelector((state) => state.cart.list)
    const element = list.find((it) => it.id === item.id)

    const addtocart = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000)
        dispatch(addItem(item))
    }

    return (
        <div className='bg-info pt-2 pb-2 ps-2 pe-2' >

            <div className='mt-2'>
                {alert && <span className="alert alert-success ">Item added to cart</span>}
                <div className='mb-4'>
                    <img src={item.thumbnail} height={300} width={300} alt={item.title} className='m-auto' />
                </div>
                <div className='card-body'>
                    <h4 className='card-title text-center mb-4'>{item.title}</h4>
                    <h6 className=' text-center'>{item.description}</h6>
                    <p className=' text-center'>Price: <strong> ${item.price} </strong></p>
                    <p className=' text-center'>Discount:<strong> {item.discountPercentage}% </strong></p>
                    <p className='text-center '>Rating: <strong>{item.rating} </strong></p>
                    {item.stock < 1 ? <button className='btn btn-outline-danger'>Out of stock</button> :
                        <>
                            <button className='btn btn-success me-3' onClick={()=>navigate(`/checkout/${item.id}`)}>Buy Now </button>
                            {element?.count > 0 ? <button className='btn btn-warning' onClick={() => navigate('/cart')} > Go to cart </button> : <button className='btn btn-success' onClick={addtocart}> Add to cart</button>
                            } 
                        </>
                    }
                </div>

            </div>
        </div>

    )
}
