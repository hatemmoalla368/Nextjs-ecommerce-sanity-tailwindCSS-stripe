'use client'
import { useShoppingCart } from "use-shopping-cart"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { ScrollArea } from "./ui/scroll-area"
import Cartitem from "./Cartitem"
import Chekoutbtn from "./Chekoutbtn"

const Cartsidebar = () => {
    const {cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice} = useShoppingCart()
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-left mb-12"> My shopping cart ({cartCount})</SheetTitle>
            </SheetHeader>
            <>
            {cartCount ===0 ? <div className="flex flex-col items-center justify-center w-full h-[760px]"><h5 className="tet-black/50">Your cart is empty</h5></div> : <ScrollArea className='h-[70vh] xl:h-[74vh] pr-4 mb-4'>
              {cartDetails && Object.entries(cartDetails).map(([key, item])=>{
               return <Cartitem item={item} key={key}/>
              })}
              </ScrollArea>}
            </>
            {cartCount > 0 && (
              <div>
                <div className="flex justify-between font-semibold">
                  <div className="uppercase mb-5 ml-3">Total</div>
                  <div>{totalPrice} USD</div>

                </div>
                <Chekoutbtn/>
              </div>
            )}
        </SheetContent>
    </Sheet>
  )
}

export default Cartsidebar
