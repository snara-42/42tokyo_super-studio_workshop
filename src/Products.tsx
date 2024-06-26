import Swal from 'sweetalert2';
import products from '../products.json';
import './Products.css';
import ProductsDetail from './ProductsDetail';
import PhotoSlider from "./components/PhotoSlider";

function Products() {
  const alert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "カートに追加しました",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <>
      <PhotoSlider />
      <h1>商品一覧</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <a href="#mayo">
              <img src={product.image_urls[0]} alt={product.name} className="product-image"/>
            </a>
            <a href="#mayo">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">¥{product.price}</p>
              <p className="product-title">{product.title}</p>
              <p>
                <button className="button-cart" onClick={alert}>
                  カートに入れる
                </button>
              </p>
            </a>
          </div>
        ))}
      </div>
      <h1>レシピ一覧</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-recipe">{product.recommendation}</p>
              <p className="product-recipe">{...product.recipe.split("\n").map((line) => (<>{line}<br/></>))}</p>
              <p className="product-recipe">{...product.ingredients.split("\n").map((line) => (<>{line}<br/></>))}</p>
          </div>
        ))}
      </div>
      <ProductsDetail/>
    </>
  );
}

export default Products;
