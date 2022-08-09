import React, { useContext } from 'react'
import { CartContext } from '../CartContext';
import Button from './Button';
import './Product.css'

function Product({ prod }) {

  const { cart, setCart } = useContext(CartContext);

  const addtocart = (event,product) =>{
    console.log(product);
    let _cart = {...cart};

    if(!_cart.items){
      _cart.items = {};
    }

    if(_cart.items[product.id]){
      _cart.items[product.id] += 1;
    }else{
      _cart.items[product.id] = 1;
    }
    if(!_cart.totalItems){
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
  }

  console.log(cart);
  return (
    <>
    <div className="products"  >
    {prod.map((product) => ( 
      
        <div className='product-container' key = { product.id }>
          <div className='image-container'>
            <img src={product.image} alt="product" />
          </div>
          <div className='description'>
            <h3>Price:{product.price}</h3>
            <h5>{product.title}</h5>
          </div>
          <div className='btn'>
              <Button val = "Add to cart" add = {(e) =>{addtocart(e,product)}}/>
          </div>  
          
        </div>

))}
    </div>  
 </>
  )
}

export default Product;