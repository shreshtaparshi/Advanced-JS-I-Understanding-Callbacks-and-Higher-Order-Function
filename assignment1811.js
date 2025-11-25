function processProducts(items) {
  const namesList = items.map(product => product.name)
  items.forEach(product => {
    const message = product.price > 50
      ? `${product.name} costs more than $50`
      : `${product.name} costs less than $50`
    console.log(message)
  })
  return namesList
}
const productsArray = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
]
processProducts(productsArray)
