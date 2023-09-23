import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { addToCart } from '../Slices/CartSlice';
import { useDispatch } from 'react-redux';

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null); // Initialize as null to avoid rendering errors

  useEffect(() => {
    axios
      .get('https://aly00203.github.io/modamixjsonAPI/db.json')
      .then((res) => {
        // Assuming your data structure has an array of products named 'Products'
        const allProducts = res.data.Products;

        // Find the product with the matching ProductId
        const selectedProduct = allProducts.find(
          (prod) => prod.id === Number(params.ProductId)
        );

        // Set the selected product to the state
        setProduct(selectedProduct);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [params.ProductId]);

  const dispatch = useDispatch();

  if (!product) {
    // Display loading or error message when product is still null
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='bg w-100 h-100'>
        <div className='container bald w-50 p-5 m-5 bg-light'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                className='img-fluid'
                src={product.image}
                alt='Product'
              />
            </div>
            <div className='col-md-6'>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: only {product.price} euro</p>
              <button onClick={() => dispatch(addToCart(product))} className='btn btn-primary'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
