'use client'
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider as CProvider } from "use-shopping-cart"

const Cartprovider = ({children}) => {
  

  

  return (
    <CProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY} 
    successUrl="http://localhost:3000/stripe/success"
    cancelUrl="http://localhost:3000/stripe/error"
    language="en-US"
    currency="USD"
    billingAddressCollection={true}
    shouldPersist={true}
    loading={<div className="fixed top-0 left-0 w-full h-full bg-white/80 flex items-center justify-center">Loading checkout...</div>}
    >
        {children}
    </CProvider>
  )
}

export default Cartprovider
