import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden " >
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
                <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] leading-none text-center xl:text-left mb-6">
  Where <span className="font-extrabold">Joyful</span> Cycling Begins
</h1>
<div className="flex items-center gap-4 mx-auto xl:mx-0">
 {/* Black Button - Extra Large */}
 <Link href="/our-bikes" className="mx-auto md:mx-0">
    <button className="
      text-lg md:text-xl 
      px-6 py-3 md:px-8 md:py-4
      bg-black hover:bg-gray-800 
      text-white 
      rounded-md
      transition-colors 
      duration-200
      font-medium
    ">
      Shop Now
    </button>
  </Link>

  {/* Blue Button */}
  <Link href="/our-bikes" className="mx-auto md:mx-0">
    <button className="
      text-lg md:text-xl 
      px-6 py-3 md:px-8 md:py-4
      bg-blue-600 hover:bg-blue-700 
      text-white 
      rounded-md
      transition-colors 
      duration-200
      font-medium
    ">
      Our Bikes
    </button>
  </Link>

</div>
                </div>
                <div className="hidden xl:flex">
                    <Image src='/bike.jpg' width={765} height={480} alt="" quality={100}/>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Hero
