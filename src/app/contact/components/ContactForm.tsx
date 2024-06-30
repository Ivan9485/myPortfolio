'use client'
import React, { useState } from 'react';

export default function BasicForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/TZLdC7EzH7Q", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("Thank you for the message, I will reply as soon as i can :)");
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });
  }


  return (
    
    <form onSubmit={(e) => onSubmit(e)} className='p-4 min-w-[300px] md:w-[500px] h-[400px]  gap-3 shadow-md bg-white rounded-md flex flex-col'>
    
      <div className="flex flex-col gap-2">
        <label className='font-montse' htmlFor="name">Full Name</label>
        <input className='border-2 border-black-100  p-3 rounded-md' type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your first and last name" />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className='font-montse' htmlFor="email">Your Email Address</label>
        <input className='border-2 border-black-100 p-3 rounded-md' type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="john@doe.com" />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className='font-montse' htmlFor="message">Your message</label>
        <textarea className='border-2 border-black-100 p-3 rounded-md'  value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Enter your message..."></textarea>
      </div>
      
      <div className="w-full flex justify-center">  
        <button className='p-3 bg-emerald-500 rounded-md w-30 text-center font-montse text-white' type="submit">Send Message</button>
      </div>
    </form>
    
  )
}