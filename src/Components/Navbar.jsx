import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cart }) => {
  return (
    <div className='bg-base-100 shadow-sm'>
      <div className="navbar max-w-7xl mx-auto p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a href="">Products</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Testimonials</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>
          <a className="text-3xl hidden lg:block bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent font-bold">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><a href="">Products</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-3 flex items-center">
          <div className="relative">
            <ShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <a className="text-xl">Login</a>
          <a className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 text-xl">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;