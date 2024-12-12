import { useState } from "react";

export function ProductsIndex({ onShow, products }) {
  const [searchFilter, setSearchFilter] = useState("");

  const handleClick = (product) => {
    onShow(product);
  };

  return (
    <div id="products-index" className="container my-4">
      {/* Title */}
      <h1 className="text-center mb-4">All Products (Total: {products.length})</h1>

      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-12 col-md-6 offset-md-3">
          <label htmlFor="search-filter" className="form-label">
            Search Filter:
          </label>
          <input
            id="search-filter"
            value={searchFilter}
            onChange={(event) => setSearchFilter(event.target.value)}
            type="text"
            list="names"
            className="form-control"
            placeholder="Type to search products..."
          />
          <datalist id="names">
            {products.map((product) => (
              <option key={product.id}>{product.name}</option>
            ))}
          </datalist>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={
                    product.images.length > 0
                      ? product.images[0].url
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">
                    <strong>Price:</strong> ${product.price ? Number(product.price).toFixed(2) : "N/A"}
                  </p>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary w-100" onClick={() => handleClick(product)}>
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
