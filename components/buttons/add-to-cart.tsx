"use client"
import { throttle } from "@/helpers"

const AddToCart = () => {
  return (
    <div className="w-full">
      <button
        onClick={throttle(() => alert("The product has been added to the cart, you cannot add this product to the cart again for 10 seconds."), 10_000)}
        className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
      >
        Add to Cart
      </button>
      <small className="text-[10px]">Add to Cart does not work for 10 seconds after each click.</small>
    </div>
  )
}

export default AddToCart
