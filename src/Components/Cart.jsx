import { useState } from 'react';
import ProductContent from './ProductContent';
import CartContent from './CartContent';

const tabs = [
  { id: 1, name: "Product" },
  { id: 2, name: "Cart" },
];

const Cart = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='max-w-7xl mx-auto px-4 mt-10'>
      <h1 className='text-center font-bold text-5xl'>Premium Digital Tools</h1>
      <p className='text-gray-500 text-center mt-3'>
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>

      <ul className="flex justify-center gap-3 mt-6 pb-2">
  {tabs.map(tab => (
    <li key={tab.id}>
      <button
        onClick={() => setActiveTab(tab.id)}
        className={`px-4 py-2 font-semibold flex items-center gap-2 transition
          ${
            activeTab === tab.id
              ? "text-white bg-gradient-to-r from-violet-700 to-fuchsia-500 rounded-full"
              : "text-gray-600"
          }`}
      >
        {tab.name}
        
        {tab.name === "Cart" && (
          <span>({cart.length})</span>
        )}
      </button>
    </li>
  ))}
</ul>

      
      <div className='mt-6'>
        {activeTab === 1 && <ProductContent cart={cart} setCart={setCart} />}
        {activeTab === 2 && <CartContent cart={cart} setCart={setCart} />}
      </div>
    </div>
  );
};

export default Cart;