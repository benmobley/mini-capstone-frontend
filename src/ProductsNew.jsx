export function ProductsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea type="text" name="description" id="description"></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="integer" id="price" name="price" />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image_url" />
        </div>
        <div>
          <label htmlFor="supplier_id">Supplier ID:</label>
          <input type="text" id="supplier_id" name="supplier_id" />
        </div>
        <div>
          <label htmlFor="quanitity">Quantity</label>
          <input type="text" id="quantity" name="quantity" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
