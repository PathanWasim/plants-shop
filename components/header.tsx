"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"
import { selectTotalItems } from "@/lib/features/CartSlice"
import { cn } from "@/lib/utils"

export default function Header({ className }) {
  const total = useSelector(selectTotalItems)

  return (
    <header className={cn("w-full border-b bg-background", className)}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/products" className="font-sans text-lg font-semibold text-foreground">
          GreenNest Plants
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
            Products
          </Link>
          <Link href="/cart" className="relative inline-flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Shopping cart</span>
            <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-foreground px-1.5 py-0.5 text-xs font-medium text-background">
              {total}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
