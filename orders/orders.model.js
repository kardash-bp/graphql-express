const orders = [
  {
    date: '2011-06-15',
    subtotal: 84.44,
    items: [
      {
        product: { id: 'jeans1', description: 'Jeans', price: 42.22 },
        quantity: 2,
      },
    ],
  },
]
function getAllOrders() {
  return orders
}

module.exports = { getAllOrders }
