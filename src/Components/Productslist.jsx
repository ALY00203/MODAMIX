import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; 

  // =======getProducts=====
  const getProducts = () => {
    axios.get('http://localhost:3004/products').then((res) => {
      setProducts(res.data);
    });
  };
  // =======getCat==========
  const getCategories = () => {
    axios.get('http://localhost:3004/Categories').then((res) => {
      setCategories(res.data);
    });
  };
  // =======getProInCat=====
  const getProductsInCat = (catName) => {
    axios
      .get(`http://localhost:3004/products?category=${catName}`)
      .then((res) => {
        setProducts(res.data);
      });
  };



  
  // theSideEffect==========
  useEffect(() => {
    getProducts();
    getCategories();
    window.scrollTo(0, 0);
  }, []);

  // ==================Calculate the total number of pages
  const pageCount = Math.ceil(products.length / itemsPerPage);

  //===================Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Function to get the products for the current page
  const getCurrentProducts = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  };

  return (
    <>
      <h3 className='text-center p-3 d-flex justify-content-center w-100 border align-items-end fw-bold custom-link-font'>
        Shop Our products Collection for Women, Men, Accessories, Electronics and Kids ONLINE
      </h3>
      <div className='container custom-link-font'>
        <h5 className='fw-bold custom-link-font'>Categories</h5>
      </div>
      <div className='container'>
        {categories.map((cat) => {
          return (
            <button key={cat} onClick={() => getProductsInCat(cat)} className='catBtn fw-bold fs-5 custom-link-font' data-text='Hover Text'>
              <span>{cat}</span>
            </button>
          );
        })}
        <button onClick={getProducts} className='catBtn fw-bold custom-link-font fs-5' data-text='Hover Text'>
          <span>shop ALL</span>
        </button>
        <div className='row'>
          {getCurrentProducts().map((productUni) => {
            return (
              <div className='col-3'>
                <Product productUni={productUni} key={productUni.id} />
              </div>
            );
          })}
        </div>
      </div>
      {/* Pagination */}
      <div className='d-flex justify-content-center'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active PagiMain'}
        />
      </div>
      
    </>
  );
}

export default ProductsList;
