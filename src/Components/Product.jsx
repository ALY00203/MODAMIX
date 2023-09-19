
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import {ShoppingCart} from'phosphor-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Slices/CartSlice'


function Product(props) {
    const {productUni} = props;
    const dispatch = useDispatch();

  return (
<div className="parent h-50 clearfix lh-sm pb-3">

  <Card className="cardBody h-100 lh-sm ">
    <Card.Img variant="top" src={productUni.image} alt={productUni.title} className="cardImg" />
    <Card.Body className='d-flex flex-column justify-content-between lh-3'>
      <div>
      <Card.Title className="text-center custom-link-font fs-4">{productUni.title}</Card.Title>
      <Card.Text className="fw-bold custom-link-font fs-6 ">{productUni.category}</Card.Text>
      <div className='d-flex flex-column justify-content-between h-50'>
      <Card.Text className="text-muted text-justify w-100  custom-link-font fs-6 h-50 lh-sm ">{productUni.description}</Card.Text>
      </div>
      </div>
    <div> 
    <Card.Text className="fw-bold custom-link-font d-flex ">Price: {productUni.price} €</Card.Text>
      <div className='d-flex justify-content-between lh-1'>
      <Button as={Link} to={`/Product/${productUni.id}`} className=" custom-link-font cardBtn btn-sm bg-transparent text-black">
        <span >LEARN MORE!</span>
        <span >MORE DETAILS</span>
      </Button>
     {/* <Link className='CART' to={'Cart'}><ShoppingCart size={25} /></Link> */}
     <button onClick={()=> dispatch(addToCart(productUni))}  className="button-24 btn-sm" >BUY NOW</button>
      </div>
    </div>
    </Card.Body>
  </Card>
</div>
  );
}

export default Product;