export type Product = {
  id: string
  name: string
  price: number
  category: "Succulents" | "Ferns" | "Flowering"
  image: string
}

export const products: Product[] = [
  {
    id: "succ-aloevera",
    name: "Aloe Vera",
    price: 12.99,
    category: "Succulents",
    image: "/aloe-vera-succulent-in-pot.jpg",
  },
  { id: "succ-echeveria", name: "Echeveria", price: 9.99, category: "Succulents", image: "/echeveria-rosette.png" },
  { id: "fern-boston", name: "Boston Fern", price: 14.5, category: "Ferns", image: "/boston-fern-houseplant.jpg" },
  {
    id: "fern-maidenhair",
    name: "Maidenhair Fern",
    price: 16.75,
    category: "Ferns",
    image: "/maidenhair-fern-delicate-leaves.jpg",
  },
  {
    id: "flow-peace-lily",
    name: "Peace Lily",
    price: 18.25,
    category: "Flowering",
    image: "/peace-lily-white-bloom.jpg",
  },
  {
    id: "flow-african-violet",
    name: "African Violet",
    price: 11.5,
    category: "Flowering",
    image: "/african-violet-purple-flowers.jpg",
  },
]

export const productsMap = Object.fromEntries(products.map((p) => [p.id, p])) as Record<string, Product>

const USD_TO_INR = 83

export const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(n * USD_TO_INR))

export function groupByCategory(list: Product[]) {
  const by: Record<string, Product[]> = {}
  for (const p of list) {
    by[p.category] = by[p.category] || []
    by[p.category].push(p)
  }
  return by
}
