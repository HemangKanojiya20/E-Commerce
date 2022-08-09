import { useContext, useEffect, useState} from 'react';
import { CartContext } from '../CartContext';
import './Cart.css'


function Cart({ items }) {


  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {

    if(!cart.items){
      return;
    }

    console.log('cart',Object.keys(cart.items)); 
    fetch("https://fakestoreapi.com/products/",{
      method : 'POST',
      headers : {
        'Content-Type' :'application/json'
      },
      body : JSON.stringify({
        id: Object.keys(cart.items)
      })
    }).then(res =>res.json())
    .then(product =>{
      setProducts(product);
    }) 
     
  }, [cart])

  console.log(products);
  return (
    <>
     <div className='cart'>
        <h3>Your Wish List</h3>
        <div className='cart-products'>
            <ul>
                <li>Product</li>
                <li>Description</li>
                <li>Amount</li>
            </ul>
        </div>
       
    </div> 
    
    </>
  )
}

export default Cart;
