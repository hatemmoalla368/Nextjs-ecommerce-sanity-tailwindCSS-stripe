import { client } from '@/lib/sanity'
import Link from 'next/link';
import React from 'react'
import Roadbikescarousel from './Popularbikescarousel';
const getData = async()=>{
const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)] {
  _id,
  name,
  description,
  images,
  price,
  price_id,
  "slug": slug.current,
  "categories": categories[]-> {
    name
  }
}`;
const data = await client.fetch(query)
return data
}
const Roadbikes = async () => {
    const bikes = await getData()
    console.log("road bikes", bikes)
  return (
    <div>
      <section className='py-24'>
        <div className='container mx-auto'>
          <h2 className='text-center'>Popular Bikes</h2>
          <p className='text-center mb-[30px]'>
            the world's premium brands in one destination
          </p>
          <Roadbikescarousel bikes={bikes}/>
          <Link href="/our-bikes">
          <button className='mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'> See All Bikes</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Roadbikes
