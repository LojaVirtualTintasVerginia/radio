import React from 'react'


const Header = () => {
  return (
<nav className="flex flex-wrap  justify-between  p-8 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
      <div className=" flex items-center">
          <a className="flex-shrink-0" href="https://intranet.tintasverginia.com.br/">
            <img src="https://ebookpintor.tintasverginia.com.br/wp-content/themes/tintasverginia-lp/img/tintasverginia-logo.png" alt="" width="150" height="150"/>
          </a>
      </div>
      <div className="navbar-menu hidden md:block ">
            <a href="https://intranet.tintasverginia.com.br/"  className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-yellow-50 hover:text-indigo-600" rel="noreferrer" target="_blank">
              INTRANET
            </a>

            <a href="https://clube.tintasverginia.com.br/" className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-yellow-50 hover:text-indigo-600" target="_blank" rel="noreferrer">
              CLUBE
            </a>

      </div>

    </nav>
  )
}

export default Header
