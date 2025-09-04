export const products = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 1245, // ₹1,245
    category: "Indoor",
    image: "/snake-plant.jpg",
    description: "Low maintenance, air purifying",
  },
  {
    id: 2,
    name: "Pothos",
    price: 830, // ₹830
    category: "Indoor",
    image: "/pothos.jpg",
    description: "Easy care, trailing vine",
  },
  // Outdoor Plants
  {
    id: 3,
    name: "Marigold",
    price: 415, // ₹415
    category: "Outdoor",
    image: "/marigold.jpg",
    description: "Bright flowers, pest deterrent",
  },
  {
    id: 4,
    name: "Basil",
    price: 580, // ₹580
    category: "Outdoor",
    image: "/basil.jpg",
    description: "Aromatic herb, culinary use",
  },
  // Succulents
  {
    id: 5,
    name: "Aloe Vera",
    price: 995, // ₹995
    category: "Succulent",
    image: "/aloe-vera.jpg",
    description: "Medicinal properties, drought tolerant",
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 1160, // ₹1,160
    category: "Succulent",
    image: "/jade-plant.jpg",
    description: "Lucky plant, easy propagation",
  },
]

export const categories = ["Indoor", "Outdoor", "Succulent"]

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

export const groupByCategory = (products) => {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {})
}

export const productsMap = products.reduce((map, product) => {
  map[product.id] = product
  return map
}, {})
