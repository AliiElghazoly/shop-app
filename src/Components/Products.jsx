import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";


function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loding, setLoding] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoding(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoding(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loding = () => {
    return (
      <>
        <div className="col-md-3">Loding...</div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  const ShowProducts = () => {
    return (
      <>
             
        <div className="buttons d-flex justify-content-center w-100 flex-wrap  mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2 my-2 "
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2 my-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2  my-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 my-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2 my-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4" >
                  <img
                    src={product.image}
                    className="card-img-top"
                    height="250px"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">New Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center" >
          {loding ? <Loding /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
export default Products;
