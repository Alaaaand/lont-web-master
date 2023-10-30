import React from 'react'
import {NavLink} from 'react-router-dom'

const NavItem = ({link}) => {
  return (
    <li key={link.path} className={`${!link.alwaysShow ? 'hidden sm:block' : 'block'} font-medium text-md xl:text-lg hover:border-b-2 border-spacing-1 border-amber-500`}>
    <NavLink  className={({ isActive}) =>
      isActive ? "text-amber-500" : "text-gray-500"
        }
  to={link.path}>{link.title}</NavLink>
</li>
  )
}

export default NavItem