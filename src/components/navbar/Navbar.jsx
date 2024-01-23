import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'
import Initial from '../../assets/Initial.png'

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>

    <p>
      <a href='#wgpt3'>About me</a>
    </p>
    <p>
      <a href='#possibility'>Projects</a>
    </p>
    <p>
      <a href='#features'>Case Studies</a>
    </p>
    <p>
      <a href='#blog'>Library</a>
    </p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={Initial} alt='logo' />
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
              <div className='navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
