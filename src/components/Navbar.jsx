import React, { useState } from 'react'
import pic from "../../public/pic3.jpg"
import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-scroll"
import Home from './Home';


function Navbar() {
  const [menu, setMenu] = useState(true)
  const navItems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Experience"
    },
    {
      id:4,
      text: "Skills"
    },
    {
      id: 5,
      text: "Projects"
    },
    {
      id: 6,
      text: "Contact"
    }
  ]
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md bg-page-bg text-white fixed top-0 left-0 right-0 z-50">
        <div className='flex justify-between items-center h-20'>
          <div className='flex space-x-2'>
            <img src={pic} className="rounded-full" style={{ height: "75px", width: "75px" }} alt="Profile" />
            <h1 className='font-black text-2xl cursor-pointer px-2 py-5'>
              <Link to="Home"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'>

                <span className='bg-gradient-to-r from-white to-stone-500 bg-clip-text text-transparent'> SHIVA</span>
              </Link></h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className='hidden md:flex space-x-10 mx-60 py-2'>
              {
                navItems.map(({ id, text }) => (
                  <li className="hover:scale-125 duration-200 font-medium cursor-pointer" key={id} >
                    <Link to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'>
                      {text}
                    </Link></li>
                )
                )}
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <CiMenuFries /> : <IoIosCloseCircle />}
            </div>

          </div>
        </div>
        {!menu && (
          <div className='bg-black text-white fixed top-20 left-40 w-3/4 h-auto z-50 rounded-br-lg'>
            <ul className='flex flex-col items-start p-4 space-y-4 text-xl'>
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-110 duration-200 font-semibold cursor-pointer" key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                    onClick={() => setMenu(true)} // Close the menu on click
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
