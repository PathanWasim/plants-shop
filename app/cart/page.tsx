"use client"

import Header from "@/components/header"
import StoreProvider from "@/components/store-provider"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import {
  deleteItem,
  decreaseItem,
  increaseItem,
  selectCartLines,
  selectTotalCost,
  selectTotalItems,
} from "@/lib/features/cart-slice"
import type { AppDispatch } from "@/lib/store"
import { formatCurrency } from "@/data/products"

export default function CartPage() {
  return (
    <StoreProvider>
      <Header />
      <CartContent />
    </StoreProvider>
  )
}

function CartContent() {
  const dispatch = useDispatch<AppDispatch>()
  const lines = useSelector(selectCartLines)
  const totalItems = useSelector(selectTotalItems)
  const totalCost = useSelector(selectTotalCost)

  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="text-balance text-2xl font-semibold">Shopping Cart</h1>

      <div className="mt-2 text-sm text-muted-foreground">
        <span>Total items: </span>
        <span className="font-medium text-foreground">{totalItems}</span>
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        <span>Total cost: </span>
        <span className="font-medium text-foreground">{formatCurrency(totalCost)}</span>
      </div>

      <div className="mt-6 space-y-4">
        {lines.length === 0 && (
          <div className="rounded-md border p-6">
            <p className="text-muted-foreground">Your cart is empty.</p>
            <Link href="/products">
              <Button className="mt-4">Continue Shopping</Button>
            </Link>
          </div>
        )}

        {lines.map((line) => (
          <div key={line.id} className="flex items-center justify-between gap-4 rounded-md border p-4">
            <div className="flex items-center gap-4">
              <Image
                src={line.image || "/placeholder.svg?height=64&width=64&query=plant%20thumbnail"}
                alt={`${line.name} thumbnail`}
                width={64}
                height={64}
                className="h-16 w-16 rounded object-cover"
              />
              <div>
                <div className="font-medium">{line.name}</div>
                <div className="text-sm text-muted-foreground">Unit price: {formatCurrency(line.price)}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                aria-label={`Decrease ${line.name}`}
                onClick={() => dispatch(decreaseItem({ productId: line.id }))}
              >
                −
              </Button>
              <span className="w-8 text-center tabular-nums">{line.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                aria-label={`Increase ${line.name}`}
                onClick={() => dispatch(increaseItem({ productId: line.id }))}
              >
                +
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                aria-label={`Remove ${line.name}`}
                onClick={() => dispatch(deleteItem({ productId: line.id }))}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button
          onClick={() => alert("Coming soon!") /* simple message as required */}
          className="bg-green-600 hover:bg-green-700"
        >
          Checkout
        </Button>

        <Link href="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    </main>
  )
}
