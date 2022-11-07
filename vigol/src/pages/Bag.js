import React from 'react'
import Subtotal from '../Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../CheckoutProduct'

function Bag() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout-left'>
<div className='checkout-title'>
<h2>Items in your bag</h2>

{basket.map(item => (
  <CheckoutProduct
  id={item.id}
  title={item.title}
  image={item.image}
  price={item.price}
  />
))}

</div>
      </div>
   <div className='checkout-right'>
    <Subtotal />

   </div>
    </div>
  )
}

export default Bag
