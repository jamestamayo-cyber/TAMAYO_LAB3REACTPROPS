import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'
import { products } from './data/products.js'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [lastAdded, setLastAdded] = useState('')

  function handleAddToCart(title) {
    setCartCount((count) => count + 1)
    setLastAdded(title)
  }

  return (
    <main className="store">
      <header className="store__header">
        <p className="store__eyebrow">Campus essentials, all in one place</p>
        <h1>CvSU Mini Store</h1>
      </header>

      <div className="cart-banner" role="status" aria-live="polite">
        {cartCount === 0
          ? 'Your cart is empty.'
          : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}
      </div>

      <section className="product-grid" aria-label="Products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.id === 1 && <span>New</span>}
            {product.id === 5 && <span>Sale</span>}
          </ProductCard>
        ))}
      </section>
    </main>
  )
}

export default App
