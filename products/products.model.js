let products = [
  {
    id: 'milk1',
    description: 'Milk',
    price: 1.55,
    reviews: [],
  },
  {
    id: 'jeans1',
    description: 'Jeans',
    price: 31.33,
    reviews: [],
  },
]
function getAllProducts() {
  return products
}
function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max
  })
}
function getProductById(id) {
  return products.find((product) => product.id === id)
}
function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  }
  products.push(newProduct)
  return newProduct
}

function addNewReview(id, comment, rating) {
  products = products.map((product) => {
    if (product.id === id) {
      product.reviews.push({ rating, comment })
    }
    return product
  })
  return products.find((product) => product.id === id)
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewReview,
}
