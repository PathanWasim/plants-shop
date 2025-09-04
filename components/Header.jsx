"use client"
import Link from "next/link"
import { useSelector } from "react-redux"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems)

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-green-600">
            GreenNest Plants
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/products" className="text-gray-700 hover:text-green-600">
              Products
            </Link>
            <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-green-600">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                    {totalItems}
                  </span>
                )}
              </div>
              Cart
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
