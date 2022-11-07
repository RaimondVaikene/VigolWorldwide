import React from 'react'
import Product from '../Product'

function Shop() {
  return (
    <div className='shop'>
   <div className='shop-row'>
    <Product
    id='1'
    title='Shirt'
    price={20}
    image="https://i0.wp.com/streetgarm.com/wp-content/uploads/2022/09/Sf338bac69cf34622b347cd1775d5981cL.jpg?fit=800%2C800&ssl=1" 
    />

    
    
  </div>

<div className='shop-row'>

<Product
    id='2'
        title='Hoodie'
        price={50}
        image="https://images.stockx.com/images/Yeezy-x-GAP-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1632921114&q=60"
    />
    <Product
    id='3'
        title='Trucker Hat'
        price={24.99}
        image="https://img.joomcdn.net/cb4401fcb23fee3d7dd4a846d1598434abd51aa2_original.jpeg"
    />
</div>

<div className='shop-row'></div>
<Product
    id='4'
        title='Jacket'
        price={150}
        image="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/069/533/361/original/782288_01.jpg.jpeg?action=crop&width=2000"
    />
</div>
  )
}

export default Shop
