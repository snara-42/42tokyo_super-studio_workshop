import products from '../products.json';
import './Products.css';
import ProductsDetail from './ProductsDetail';

function Products() {
  return (
    <>
      <h1>商品一覧</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <a href="#mayo">
              <img src={product.image_urls[0]} alt={product.name} className="product-image"/>
            </a>
            <div className="product-info">
              <a href="#mayo">
                <h2 className="product-name">{product.name}</h2>
              </a>
                <p className="product-price">¥{product.price}</p>
                <p className="product-title">{product.title}</p>
            </div>
          </div>
          ))}
      </div>
      <ProductsDetail/>
    </>
  );
}

export default Products;
