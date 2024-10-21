import Search from "@/components/inputs/search"
import Pulse from "@/components/loadings/pulse"
import ProductList from "@/components/products/list"
import { Suspense } from "react"

export default async function Home({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || ""
  return (
    <>
      <nav className="sticky top-0 z-10 bg-white drop-shadow">
        <div className="mx-auto px-4 py-2">
          <Search />
        </div>
      </nav>
      <main className="container mx-auto px-2 md:px-4 py-8">
        <div className="w-full flex justify-center items-center">
          <Suspense fallback={<Pulse />}>
            <ProductList query={query} />
          </Suspense>
        </div>
      </main>
    </>
  )
}
