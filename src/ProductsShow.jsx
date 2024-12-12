export function ProductsShow({ product, onDestroy, onEdit, onAddToCart }) {
  const handleShoppingCartSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onAddToCart(params);
  };

  return (
    <div key={product.id} className="post">
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <img src={product.images.length > 0 ? product.images[0].url : ""} alt="" />
      <p>{product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => onEdit(product)}>Edit Product</button>
      <button onClick={() => onDestroy(product)}>Destroy</button>
      <form onSubmit={handleShoppingCartSubmit}>
        <div>
          Quantity: <input name="quantity" type="number" />
        </div>
        <input name="product_id" type="hidden" value={product.id} />
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
}
