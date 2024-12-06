export function ProductsShow({ product, onDestroy, onEdit }) {
  return (
    <div key={product.id} className="post">
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <img src={product.images.length > 0 ? product.images[0].url : ""} alt="" />
      <p>{product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => onEdit(product)}>Edit Product</button>
      <button onClick={() => onDestroy(product)}>Destroy</button>
    </div>
  );
}
