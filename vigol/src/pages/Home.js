import React, { useState} from 'react'
import img1 from '../images/main-image.png'


function Home() {
  
const [email, setEmail] = useState("")

const handleOnChange = (e) => {
  setEmail(e.target.value)
}

  return (
    <> 
<div className='container-main'>
<img className='main-image' src={img1} alt='' />
</div>

<p className='newsletter'>Be the first to know about new collections</p>

<div className='email'>
  <label htmlFor=""></label>
  <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={handleOnChange}
>
  </input>
  <button>Submit</button>
</div>

</>
  )
}

export default Home
