export function ProductsEdit(props) {
  console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdate(props.product, params);
    event.target.reset();
  };
  return (
    <div>
      <h1>Edit product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" defaultValue={props.product.name} />
        </div>
        <div>
          Description <textarea name="description" type="text" defaultValue={props.product.description} />
        </div>
        <div>
          Image url: <input name="image_url" type="text" defaultValue={props.product.image_url} />
        </div>
        <div>
          Price: <input name="price" type="text" defaultValue={props.product.price} />
        </div>
        <button type="submit">Update product</button>
      </form>
    </div>
  );
}
