export function ProductsIndex(props) {
  const handleClick = (product) => {
    props.onShow(product);
  };

  return (
    <div id="products-index">
      <h1>All products (Total: {props.products.length})</h1>
      <div className="products">
        {props.products.map((product) => (
          <div key={product.id} className="post">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <img src={product.images.length > 0 ? product.images[0].url : ""} alt="" />
            <p>{product.description}</p>
            <button onClick={() => handleClick(product)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
