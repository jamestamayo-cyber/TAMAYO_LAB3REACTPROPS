function ProductCard({
  title,
  price,
  category = 'General',
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(price)

  return (
    <article className={`product-card${inStock ? '' : ' product-card--out-of-stock'}`}>
      {children && <div className="product-card__badge">{children}</div>}
      <p className="product-card__category">{category}</p>
      <h2 className="product-card__title">{title}</h2>
      <p className="product-card__price">{formattedPrice}</p>
      <p className={`product-card__stock${inStock ? ' product-card__stock--available' : ''}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button
        className="product-card__button"
        type="button"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        Add to Cart
      </button>
    </article>
  )
}

export default ProductCard
