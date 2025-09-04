"use client"

import Header from "@/components/header"
import StoreProvider from "@/components/StoreProvider"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function ProductsPage() {
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {})

  return (
    <StoreProvider>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="text-balance text-2xl font-semibold">Houseplants</h1>
        <p className="mt-1 text-muted-foreground">Browse our collection and add your favorites to the cart.</p>

        <div className="mt-6 space-y-8">
          {Object.entries(groupedProducts).map(([category, list]) => (
            <section key={category}>
              <h2 className="text-lg font-semibold">{category}</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {list.map((plant) => (
                  <ProductCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </StoreProvider>
  )
}
