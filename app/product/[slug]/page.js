import { client, urlFor } from "@/lib/sanity"
import Image from "next/image"
import Addtocartbtn from "@/components/Addtocartbtn"
import Link from "next/link"
import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from "lucide-react"


const getdata = async(slug) => {
const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
  _id,
  name,
  description,
  images,
  price,
  price_id,
  "slug": slug.current,
  "categories": categories-> {
    name
  }
}`
const data = await client.fetch(query)
return data;
}

const Productdetails = async ({params}) => {
    const bike = await getdata(params.slug)
    console.log('bike data', bike)
  return (
    <section className="pt-24 pb-32">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-14">
                <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
                    <Image src={urlFor(bike.images[0]).url()} width={473} height={290} priority alt=""/>
                </div>
                <div className=" flex-1 flex flex-col justify-center items-start gap-10" >
                    <Link href='/' className="flex items-center gap-2 font-semibold">
                    <ChevronLeft size={20}/>
                    Back to home
                    </Link>
                    <div className="flex flex-col gap-6 items-start">
                        <div>
                            <h3>{bike.name}</h3>
                            <p className="text-lg font-semibold">{bike.price} USD</p>
                            

                        </div>
                        <p>{bike.description}</p>
                        <Addtocartbtn 
                        price_id={bike.price_id}
                        name={bike.name}
                        currency='USD'
                        description={bike.description}
                        images={bike.images}
                        price={bike.price}
                         text='Add to cart'/>

                    </div>
                    <div className=" flex flex-col gap-3">
                        <div className="flex gap-2">
                            <PackageCheck size={20} />
                            <p>Free shipping on orders over 130 USD</p>
                        </div>
                        <div className="flex gap-2">
                            <RefreshCw size={20} />
                            <p>Free return for 30 days</p>
                        </div>
                        <div className="flex gap-2">
                            <Bike size={20} />
                            <p>The bicycles are partially assembled and benefit from transport insurance</p>
                        </div>
                        <div className="flex gap-2">
                            <Clock size={20} />
                            <p>Fast delivery</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </section>
  )
}

export default Productdetails
