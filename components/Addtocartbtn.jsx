"use client"
import { CgShoppingBag } from 'react-icons/cg'
import { useShoppingCart } from 'use-shopping-cart'
import { toast } from "sonner"

const Addtocartbtn = ({ text, id, currency, name, description, images,price, price_id }) => {
    const {addItem}= useShoppingCart()
    
    const bike = {
        id: id,
        currency: currency,
        name: name,
        description: description,
        images: images,
        price: price,
        price_id: price_id
        
    }
  return (
    <button onClick={()=>{ addItem(bike); toast(`${name} has been added to the cart.`)
    } } className="flex items-center justify-center  px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
      <div>{text}</div>
      <div><CgShoppingBag className="btn-icon"  /> </div>

    </button>
  )
}

export default Addtocartbtn
