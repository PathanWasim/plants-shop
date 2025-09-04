"use client"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "@/lib/features/CartSlice"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

export default function ProductCard({ plant }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const isInCart = cartItems.some((item) => item.id === plant.id)

  const handleAddToCart = () => {
    dispatch(addItem(plant))
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={plant.image || "/placeholder.svg"}
          alt={plant.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{plant.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{plant.description}</p>
        <p className="font-bold text-green-600 mt-2">{formatCurrency(plant.price)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isInCart}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
