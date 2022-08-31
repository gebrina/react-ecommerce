import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Cart from '../../cart/Cart';
import { useSelector } from 'react-redux';
import shoppingcart from '../../../assets/images/shopping-cart.png'
import './product-detail.css';
import   Api from '../../api/Api';
const ProductDetail = () => {
    const cartNumber = useSelector((state:any)=>state.cart.cartNumber)
    const state:any = null;
    const navigate = useNavigate();
  useEffect(()=>{
    console.log('state',state)
    if(!state){
      navigate('/');
    }
  },[])
  return (
   <>
    {!state?<>
      <div className='cart'>
      <img 
      height={164}
      className="cart-img"
      src={shoppingcart} 
      alt="Cart"/>
      <span className='cart-number'>{cartNumber}</span>
    </div>
    <div className='detail-container'>
      
      <div className='product-detail-title'><button
        onClick={()=>{
          navigate('/');
        }}
      className='back-btn'>back</button>{state.title}</div>
      <div className='product-detail-body'>
      <div className='p-image'>
       <img className='pro-img' alt={state.title} src={state.image}/>
      </div>
         <div className='p-description'>
             <p>{state.description}</p>
         </div>
      </div>
      <div className='rating-price'>
         <h1>Price : ${state.price}</h1>
         <h1>Rating : {state.rating.rate}</h1>
      </div>
     </div></>
      :<h1>Redirecting to home page...</h1>}</>
  )
}

export default ProductDetail;