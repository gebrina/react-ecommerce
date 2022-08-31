import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Cart = (props:any) => {
  const navigate = useNavigate();
  const cheackoutdata =useSelector((state:any)=>state.cart.cheekoutData)
  useEffect(()=>{
    console.log(cheackoutdata)
  },[])
  return (
    <div id="search-container" className='search-container'>
    <input 
    onChange={async(e)=>{
      if(e.target.value.length>0){
        props.setSearch(e.target.value)
      }else{
       await  props.getProductsData()
      }
    }}
    placeholder='Search products..'
    type={'text'}/>
    <span className='shop-cart' onClick={()=>{
      navigate('/cheackout');
    }}>
    <img src={props.shoppingcart} />
    <span className='cart-number'>
      {props.cartNumber}
    </span>
    </span>
  </div>
  )
}

export default Cart