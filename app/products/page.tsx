"use client"

import Header from "@/components/header"
import StoreProvider from "@/components/store-provider"
import ProductCard from "@/components/product-card"
import { groupByCategory, products } from "@/data/products"

export default function ProductsPage() {
  const grouped = groupByCategory(products)

  return (
    <StoreProvider>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="text-balance text-2xl font-semibold">Houseplants</h1>
        <p className="mt-1 text-muted-foreground">Browse our collection and add your favorites to the cart.</p>

        <div className="mt-6 space-y-8">
          {Object.entries(grouped).map(([category, list]) => (
            <section key={category}>
              <h2 className="text-lg font-semibold">{category}</h2>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {list.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </StoreProvider>
  )
}
