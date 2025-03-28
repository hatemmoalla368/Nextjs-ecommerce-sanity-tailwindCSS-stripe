import Link from "next/link"
import { Input } from "./ui/input"
import {RiYoutubeFill, RiFacebookFill, RiPinterestFill, RiTwitterFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8"> 
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-white-60">
              Be the first to get the latest news about trends, promotions, and much more
            </p>
          </div>
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
  <input 
    placeholder="Your email address" 
    className="
      flex-1
      h-[60px]              /* Match button height */
      px-5                  /* Horizontal padding */
      text-lg               /* Larger text */
      border-2              /* Add border */
      border-gray-300       /* Border color */
      rounded-lg           /* Rounded corners */
      focus:outline-none    /* Remove default focus */
      focus:ring-2          /* Add focus ring */
      focus:ring-blue-500   /* Blue focus ring */
      focus:border-blue-500 /* Blue border on focus */
    "
  />
  <button className="btn w-full xl:max-w-[150px] h-[60px] bg-blue-600 text-white">
    Join
  </button>
</form>
<div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-20">
<Link href=''>
<RiYoutubeFill/>
</Link>
<Link href=''>
<RiFacebookFill/>
</Link>
<Link href=''>
<RiPinterestFill/>
</Link>
<Link href=''>
<RiTwitterFill/>
</Link>

</div>
          </div>

      </div>
      <div className="py-6 border-t border-white/5 text-white/60">
      Copyright 2025 Bikezz. All rights reserved.

      </div>

    </footer>
  )
}

export default Footer
