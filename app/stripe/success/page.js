import Link from "next/link"
const page = () => {
  return (
    <section className="py-72">
  <div className="container mx-auto flex flex-col items-center">
    <h3 className="text-[1vw] sm:text-[2vw] lg:text-[2vw] leading-none text-center xl:text-left mb-6">
      Your payment was successful! Thank you
    </h3>
    <Link href='/'>
      <button className="btn w-full xl:max-w-[150px] h-[60px] bg-blue-600 text-white">
        Back to the homepage
      </button>
    </Link>
  </div>
</section>
  )
}

export default page
