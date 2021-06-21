import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBed } from 'react-icons/bi'
import { BiSwim } from 'react-icons/bi'
import { FaMapSigns } from 'react-icons/fa'

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
    className: "nav-text"
  },
  {
    title: "Book",
    path: "/accomodation",
    icon: <BiBed />,
    className: "nav-text"
  },
  {
    title: "Activities",
    path: "/activities",
    icon: <BiSwim />,
    className: "nav-text"
  },
  {
    title: "About",
    path: "/about",
    icon: <FaMapSigns />,
    className: "nav-text"
  }
]
