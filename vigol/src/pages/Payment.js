import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import axios from '../axios'


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
   

    useEffect(() => {
const getClientSecret = async () => {
const response = await axios({
    method: 'post',
    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
});

setClientSecret(response.data.clientSecret)
}

getClientSecret();
    }, [basket])

    console.log('The secret is >>>>', clientSecret)

    const handleSubmit = async (event) => {
event.preventDefault();
setProcessing(true);

const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: elements.getElement(CardElement)
    }
}).then(({ paymentIntent }) => {

    setSucceeded(true)
    setError(null)
    setProcessing(false)

    navigate('/orders', { replace: true });
})  
    }

    const handleChange = event => {
setDisabled(event.empty);
setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
   <div className='payment-container'>
    <h1>
        Checkout (
            <Link to='/bag'>{basket?.length} items</Link>)
    </h1>
    <div className='payment-section'>
        <div className='payment-title'>
            <h3>Delivery Address</h3>
        </div>
        <div className='payment-address'>
            <p>{user?.email}</p>
            <p>123 Fake Address</p>
            <p>Tartu, Estonia</p>
        </div>
    </div>


    <div className='payment-section'>
    <div className='payment-title'>
        <h3>Review items and delivery</h3>
    </div>
    <div className='payment-items'>
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


    <div className='payment-section'>
        <div className='payment-title'>
        <h3>Payment Method</h3>
        </div>
    <div className='payment-details'>
<form onSubmit={handleSubmit}>
    <CardElement onChange={handleChange} />
    <div className='payment-pricecontainer'>
    <CurrencyFormat
        renderText={(value) => (
          
    <h3>Order Total: {value}</h3>
         
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <button disabled={processing || disabled || succeeded }>
<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
      </button>
    </div>

    {error && <div>{error}</div>}
</form>
    </div>
    </div>
   </div>
    </div>
  )
}

export default Payment
