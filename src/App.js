import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">Amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="Signin.html">Sign In</a>
        </div>

      </header>
      <main>
        <div className="row center">
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./images/p1.jpeg" alt="Product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Nike Slim Shirts</h2>

              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i> </span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price">$120</div>
            </div>
          </div>
        </div>
          </div>
    </div>
      </main >
    <footer className="row center">All rights reserved.</footer>
    </div >
  );
}

export default App;
