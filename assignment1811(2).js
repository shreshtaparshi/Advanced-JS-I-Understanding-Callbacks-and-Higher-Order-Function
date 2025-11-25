function countCategories(categories) {
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})
  return categoryCounts
}
const products = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
const counts = countCategories(products)
console.log(counts)
