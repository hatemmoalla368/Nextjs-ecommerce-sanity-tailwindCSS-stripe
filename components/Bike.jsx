import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye } from "react-icons/cg";
import Addtocartbtn from "./Addtocartbtn";



const Bike = ({bike}) => {
    const roadbikecat = bike.categories.find(
        (bike) => bike.name === 'Road'
    );
    console.log("road bikes cat",roadbikecat)
  return (
    
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-360 flex justify-center items-center">
        {roadbikecat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
                Road
            </div>
        )}
        <Image
        src={urlFor(bike.images[0]).url()}
        fill
    
        alt=""
         />

        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Addtocartbtn
            price_id={bike.price_id}
            name={bike.name}
            currency='USD'
            description={bike.description}
            images={bike.images}
            price={bike.price}
            

             btnstyles='btn-icon btn-primary' 
             />
            <Link href={`/product/${bike.slug}`}>
            <button className={`flex items-center justify-center p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors`}>
                <CgEye className="text-xl"/>
            </button>
            </Link>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">{bike.categories[0].name} bike</h5>
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-lg font-bold mb-10 ">{bike.price} USD</div>
    </div>
  )
}

export default Bike
