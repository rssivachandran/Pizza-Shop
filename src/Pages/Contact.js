import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
        <h1>Contact Us</h1>
        <form action="" method="post" id='contact-form'>
            <label htmlFor="name">Full Name</label>
            <input type="text" name='name' placeholder='Enter Full Name..' />
            <label htmlFor="email">Email</label>
            <input type="text" name='email' placeholder='Enter Email...' />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter message' required> </textarea>
            <button type='submit'>Send  Message</button>

        </form>
         </div>
    </div>
  )
}

export default Contact