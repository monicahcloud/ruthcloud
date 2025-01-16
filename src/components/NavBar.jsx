import { useState } from 'react'
import { links } from '../data'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0 z-[20] bg-white flex gap-10 justify-center items-center">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
        <div className="hidden md:flex gap-x-6 text-cyan-500 uppercase font-semibold px-5 py-1">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-cyan-800 duration-300"
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
      <div>
        <button className="md:hidden" onClick={toggleNavbar}>
         
      
        </button>
      </div>
    </nav>
  )
}

export default NavBar
