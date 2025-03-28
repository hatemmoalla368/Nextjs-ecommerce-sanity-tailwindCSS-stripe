"use client"
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const Chekoutbtn = () => {
    const {redirectToCheckout}= useShoppingCart()
    const handlecheckout = async ()=>{
        try {
            const res = await redirectToCheckout()
            if (res?.error){
                console.log(res.error)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <button onClick={handlecheckout} className=' bg-black w-full text-white py-3 mb-3'>Proceed to checkout</button>
  )
}

export default Chekoutbtn
