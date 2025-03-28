'use client'
import { useState, useEffect } from "react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Slider } from "./ui/slider"
import Bike from "./Bike"
const Bikecategories = ({bikes}) => {
    const [category, setCategory]= useState('all');
    const [filteredbikes, setFilteredbikes]= useState([]);
    const [price, setPrice]= useState(900);
    useEffect(()=>{
        const filtered = bikes.filter((bike)=>{
            const categorymatch = category === 'all' ? bikes : bike.categories.some((categ)=> categ.name === category)
            const pricematch = bike.price <= price;
            return categorymatch && pricematch
        })
        setFilteredbikes(filtered)
    }, [category, price, bikes])
console.log(filteredbikes)
  return (
    <section className="min-h-[1200px] py-10">
        <div className="container mx-auto">
            <div className="flex flex-col">
                <aside className=" w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
                    <RadioGroup defaultValue='all' className='flex flex-col gap-6 mb-12' >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem onClick={()=> setCategory('all')} value="all" id='all'/>
                            <label htmlFor="all">All</label>

                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem onClick={()=> setCategory('Mountain')} value="Mountain" id='Mountain'/>
                            <label htmlFor="Mountain">Mountain</label>

                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem onClick={()=> setCategory('Road')} value="Road" id='Road'/>
                            <label htmlFor="Road">Road</label>

                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem onClick={()=> setCategory('Electric')} value="Electric" id='Electric'/>
                            <label htmlFor="Electric">Electric</label>

                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem onClick={()=> setCategory('Hybrid')} value="Hybrid" id='Hybrid'/>
                            <label htmlFor="Hybrid">Hybrid</label>

                        </div>
                        

                    </RadioGroup>
                    <div className="max-w-56">
                        <div className="text-lg mb-4 font-medium">
                            Max Price:{' '}
                            <span className="text-blue-700 font-semibold ml-2">${price}</span>
                            <span className="ml-2">
                            {filteredbikes.length>1
                            ? `${filteredbikes.length} items`
                            : filteredbikes === 0
                            ? `${filteredbikes.length} items`
                            : `${filteredbikes.length} item`
                            }
                            </span>

                        </div>
                        <Slider
  defaultValue={[900]}
  max={1000}
  step={1}
  onValueChange={(val) => setPrice(val[0])} // Use val[0] directly
/>


                    </div>

                </aside>
                <div className=" w-full xl:w-[1050px] ml-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                        {filteredbikes.map((bike)=>{
                            return <Bike bike={bike} key={bike.price_id}/>
                        })}

                    </div>
                    </div>

            </div>

        </div>

    </section>
  )
}

export default Bikecategories
