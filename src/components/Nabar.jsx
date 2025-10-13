import React from 'react'

const Nabar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand hover:bg-purple-700 text-white rounded-full flex items-center justify-center font-bold cursor-pointer">
            S
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Salsabeel Ibrahim</h3>
        </div>

        {/* Right Section: Nav Links */}
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <a href='#home' className="hover:text-purple-600 cursor-pointer">Home</a>
          <a href='#about' className="hover:text-purple-600 cursor-pointer">About</a>
          <a href='#process' className="hover:text-purple-600 cursor-pointer">Process</a>
          <a href='#project' className="hover:text-purple-600 cursor-pointer">Porjects</a>
          <a href='#blog' className="hover:text-purple-600 cursor-pointer">Blog</a>
          <a href='#services'  className="hover:text-purple-600 cursor-pointer">Services</a>
          <li>
            <a href='#contact' className="bg-brand hover:bg-purple-700 text-white px-4 py-1.5 rounded-md transition cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nabar