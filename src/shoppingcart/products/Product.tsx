import './product.css';
import { useDispatch, useSelector } from 'react-redux';
import Api from '../api/Api';
import { useNavigate } from 'react-router-dom';
import { increment,decrement, setCheackoutData } from '../store/cartSlice';
import shoppingcart from '../../assets/images/shopping-cart.png';
import { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
const Product =() =>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState('');
    let [handleCounter,setHandleCounter] = useState([{
         index:0,
         price:0,
        count:0, 
    }]);
    const cartNumber = useSelector((state:any)=>state.cart.cartNumber)
    const dispatch   = useDispatch();
    const navigate = useNavigate();
 
    const getProductsData =async () =>{
     try {
      const response = await Api.get(`/products`);
       setProducts(response.data);
       setLoading(false);
     } catch (error) {
      setLoading(true)
     }
    }

    useEffect(()=>{
     const getData = async ()=>{
       await getProductsData();
     }
     getData();
    },[])
  return <div className='product-container'>
      <Cart setSearch={setSearch}
        shoppingcart={shoppingcart}
       getProductsData={getProductsData} 
      cartNumber={cartNumber}/>
    {products.length==0&&!loading?<h1>No matches found...</h1>:''}
      <div className='products'>
       {!loading?<>{products.filter((product:any)=>product.title.toLowerCase().
       includes(search.toLowerCase())).map((product:any,index:number)=>{
          handleCounter.push({
            index:index,
            price:0,
            count:0,
           })
         
        return  <div  key={product.id} className='card'>
        <div>
        <img className='product-image'
         src={product.image}/>
        </div>
        <div className='product-title'>
           {product.title.slice(0,30)}
        </div>
        <div className='product-body'>
          <p className='product-description'>
            {product.description.slice(0,150)}...
            <button onClick={()=>{
              navigate(`product/${product.id}`,{
                  state:product
               })
               }}  className='read-more-btn'>
              Read More
            </button>
          </p>
        </div>
        
        <div className='btm-section'>
        <div className='price'>
          ${product.price}
        </div>
        <div className='rating'>
          {handleCounter[index].price}*
        </div>
        <div className='add-to-cart'>
          <button onClick={()=>{
            dispatch(decrement())
            if(handleCounter[index].index+1==index){
              if(handleCounter[index].count>=1){
                handleCounter[index].count-=1;
                handleCounter[index].price -=product.price;
              }
            }
          }} className='btn'>
           -
          </button>
           <span className='counter'> {handleCounter[index].count}</span> 
          <button
           onClick={()=>{
            dispatch(increment(product))
             if(handleCounter[index].index==0){
               handleCounter[index].count+=1;
               handleCounter[index].price += product.price;
             }else{
              if(handleCounter[index].index+1==index){                              
                handleCounter[index].count+=1;
                handleCounter[index].price +=product.price;
              }else{
             }
             }
             dispatch(setCheackoutData(handleCounter))
           }}
          className='btn' >+</button>
          </div>
     
        </div>
      </div>
       })}</>:<h1>Loading....</h1>}
      </div>
  </div>
}

export default Product;