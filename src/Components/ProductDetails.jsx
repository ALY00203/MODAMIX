import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { addToCart } from '../Slices/CartSlice'
import { useDispatch } from 'react-redux'


function ProductDetails() {
    const params = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`https://murmuring-meadow-67184.herokuapp.com/Products/${params.ProductId}`).then((res) => {
          setProduct(res.data)
        })
      }, [params.ProductId])
      const dispatch = useDispatch();
  return (
    <>
    <div className='bg w-100 h-100'>
   <div className="container bald w-50 p-5 m-5 bg-light">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={product.image}
            alt="Product"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price : only {product.price} euro</p>
          <button onClick={()=> dispatch(addToCart(product))}  className="btn btn-primary" >Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
</>
  )
}

export default ProductDetails