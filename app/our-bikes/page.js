import Bikecategories from "@/components/Bikecategories";
import { client } from "@/lib/sanity"
const getdata = async ()=>{
    const query = `*[_type == 'product'] {
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

const page = async () => {
    const bikes = await getdata();
  return (
    <div>
      <Bikecategories bikes={bikes}/>
    </div>
  )
}

export default page
