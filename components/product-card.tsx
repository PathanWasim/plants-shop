"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { addItem, selectIsInCart } from "@/lib/features/cart-slice"
import type { AppDispatch } from "@/lib/store"
import type { Product } from "@/data/products"
import { formatCurrency } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch<AppDispatch>()
  const inCart = useSelector(selectIsInCart(product.id))

  const handleAdd = () => {
    if (!inCart) dispatch(addItem({ productId: product.id }))
  }

  return (
    <div className="flex flex-col rounded-lg border bg-card p-4">
      <div className="flex items-center justify-center">
        <Image
          src={product.image || "/placeholder.svg?height=200&width=200&query=plant%20thumbnail"}
          alt={`${product.name} thumbnail`}
          width={200}
          height={200}
          className="h-40 w-40 rounded object-cover"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-pretty font-medium text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{formatCurrency(product.price)}</p>
      </div>
      <Button className="mt-4 w-full" onClick={handleAdd} disabled={inCart} aria-disabled={inCart}>
        {inCart ? "Added" : "Add to Cart"}
      </Button>
    </div>
  )
}
