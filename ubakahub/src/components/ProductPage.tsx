// src/components/ProductPage.tsx
import { products } from '../data/product';

const ProductPage = () => {
  return(
    <div>
      {products.map((product) =>(
          <div key={product.number} className="product-card">
            <h2>{product.number}</h2>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button>{product.status}</button>
          </div>
        )
      )};
    </div>
)};

export default ProductPage;
