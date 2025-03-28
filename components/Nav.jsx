"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const links = [
  { name: "Home", path:'/'},
  {name: 'our Bikes', path:'/our-bikes'}
]
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-[36px]">
      {links.map((link,index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && 'text-blue-700'}`}>
            {link.name}
          </Link>

        );
      })}
      
    </nav>
  )
}

export default Nav
