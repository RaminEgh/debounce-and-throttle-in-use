import AddToCart from "@/components/buttons/add-to-cart"
import { ProductType } from "@/types"
import Image from "next/image"

interface ProductPageProps {
  params: { id: string }
}
const page = async ({ params }: ProductPageProps) => {
  const productId = params.id
  const product = await fetchProductById(productId)

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="relative h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <Image fill className="w-full h-full object-cover" src={product.images[0]} alt={product.title} />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="px-2 w-full">
                <AddToCart />
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">${product.discountPercentage}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Fetch product details by ID
async function fetchProductById(id: string): Promise<ProductType> {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }
  return res.json()
}

export default page
