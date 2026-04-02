import { Check } from 'lucide-react';
import { useState } from 'react';

const Product = ({ category, cart, setCart }) => {
  const [addToCart, setAddToCArt] = useState(false);
  const { name, price, description, period, features, icon, tagType } = category;

  let tagBg = "";
  if (tagType === "Popular") tagBg = "bg-violet-200 text-violet-800";
  else if (tagType === "New") tagBg = "bg-green-200 text-green-800";
  else if (tagType === "Best-seller") tagBg = "bg-yellow-200 text-yellow-800";
  
  const handleSubscription =()=>{
    setAddToCArt(true)
    setCart([...cart, category])
  }

  return (
    <div className="bg-gray-100 rounded-md shadow-sm p-6">
      <div className="flex justify-between items-center">
        <p className="text-3xl">{icon}</p>
        
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tagBg}`}>
          {tagType}
        </span>
      </div>

      <h3 className="text-xl font-semibold mt-3">{name}</h3>
      <p className="mt-2 text-gray-500 text-sm">{description}</p>

      <p className="mt-4">
        <span className="font-semibold text-2xl">${price}</span> / <span className="mt-2 text-gray-500 text-sm">{period}</span>
      </p>

      <p className='mt-3 text-gray-500 flex items-center gap-1'><span className='text-green-700'><Check></Check></span> {features[0]}</p>
      <p className='mt-3 text-gray-500 flex items-center gap-1'><span className='text-green-700'><Check></Check></span> {features[1]}</p>
      <p className='mt-3 text-gray-500 flex items-center gap-1'><span className='text-green-700'><Check></Check></span> {features[2]}</p>

      <button onClick={handleSubscription} className="w-full rounded-full mt-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition py-2 cursor-pointer">{addToCart ? "Added to Cart" : "Buy Now"}</button>
    </div>
  );
};

export default Product;