import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import ProductDetails from "./Components/ProductDetails";
import SignUp from "./pages/SignUp";
import Cart from "./Components/Cart";
import Payment from "./pages/Payment";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: < Layout />,
      children:[
        {
          path: '',
          element: < Home />,
        },
        {
          path: 'About',
          element: < About />,
        },
        {
          path: 'Login',
          element: < Login />,
        },
        {
          path: 'Product/:ProductId',
          element: < ProductDetails />,
        },
        {
          path: 'SignUp',
          element: < SignUp />,
        },
        {
          path: 'Cart',
          element: < Cart />,
        },
        {
          path: 'Payment',
          element: < Payment />,
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
);
}

export default App;
