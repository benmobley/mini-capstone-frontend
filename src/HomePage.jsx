export function HomePage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Online E commerce store</h1>
        <p className="lead text-muted">Discover, create, and list your products.</p>
        <a href="/products" className="btn btn-primary btn-lg">
          Explore Products
        </a>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Discover Recipes" />
            <div className="card-body">
              <h5 className="card-title">Discover Products</h5>
              <p className="card-text">Explore a wide variety of products from around the world.</p>
              <a href="/products" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Share Your Creations" />
            <div className="card-body">
              <h5 className="card-title">Post your items</h5>
              <p className="card-text">Got a products you are trying to get rid of?</p>
              <a href="/share" className="btn btn-outline-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Join the Community" />
            <div className="card-body">
              <h5 className="card-title">Join the Community</h5>
              <p className="card-text">
                Become a part of our vibrant food-loving community. Create an account to upload and buy products.
              </p>
              <a href="/signup" className="btn btn-outline-primary">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
