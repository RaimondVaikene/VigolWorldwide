import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
dispatch({
  type: 'REMOVE_FROM_BASKET',
  id: id,
})
  }
  return (
    <div className='checkout-product'>
      <img className='checkout-image' src={image} alt="" />

      <div className='checkout-info'>
        <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'>
            <strong>{price}</strong>
            <small>$</small>
        </p>
        <button onClick={removeFromBasket}>Remove from Bag</button>
      </div>
  
    </div>


  )
}

export default CheckoutProduct
