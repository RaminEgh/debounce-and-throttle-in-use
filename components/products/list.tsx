import Product from "@/components/cards/product"
import { ProductType } from "@/types"

async function ProductList({ query }: { query: string }) {
  const data: { products: ProductType[] } = await getData(query)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {data.products.map((item) => {
        return <Product key={item.id} title={item.title} description={item.description} id={item.id} thumbnail={item.thumbnail} price={item.price} discountPercentage={item.discountPercentage} />
      })}
    </div>
  )
}

export default ProductList

async function getData(query: string) {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=100`, { next: { revalidate: 240 } })
  const data = await res.json()

  return data
}
