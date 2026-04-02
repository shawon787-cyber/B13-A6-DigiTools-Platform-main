
import { ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';

const CartContent = ({ cart, setCart }) => {

  const handleRemove = (indexToRemove) => {
    const removedItem = cart[indexToRemove];
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    toast.error(`${removedItem.name} removed from cart`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty!");
      return;
    }
    toast.success("Order placed successfully!");
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-100 p-10 rounded-2xl mb-16">

      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      
      <div className="space-y-4">
        {cart.length === 0 ? (
          <div className='flex flex-col justify-center items-center text-4xl text-gray-800 font-semibold py-10 border-gray-500/20 border-2 rounded-2xl'>
            <ShoppingCart className='  h-14 w-14'></ShoppingCart>
            <h3 className='mt-2'>Your Cart Is Currently Empty</h3>
          </div>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-200 p-4 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-300 p-3 rounded-full">
                  {item.icon}
                </div>

                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(index)}
                className="text-pink-500 font-medium hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <>
          
          <div className="flex justify-between items-center mt-6">
            <span className="text-gray-600">Total:</span>
            <span className="text-xl font-bold">${total}</span>
          </div>

          
          <button
            onClick={handleCheckout}
            className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:opacity-90 transition"
          >
            Proceed To Checkout
          </button>
        </>
      )}

    </div>
  );
};

export default CartContent;