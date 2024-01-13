import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';


function Product() {
    const{id} = useParams();
    const[product, setProduct] = useState([])
    const [loding, setLoding] = useState(false);
    const dispatch=useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product))
    }
    // Fetch the product data when component mounts.
    useEffect(()=>{
        const getProduct = async()=>{
            setLoding(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoding(false)
        }
        getProduct();
    },[])
    const ShowProuct= ()=>{
        return(
            <>
       
                <div className="col-md-6" key={product.id}>
                    <img  src={product.image} alt={product.title} style={{width: "50%"}}/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-black-50 py-4">
                            {product.category}
                        </h4>
                        <h1 className='display-5 fw-bolder'>{product.title}</h1>
                        <p>Rating {product.rating && product.rating.rate}<i className='fa fa-star'></i></p>
                        <h3 className='display-6 fw-Bold my-4'>
                            ${product.price}
                        </h3>
                        <button className="btn btn-outline-dark px-4 p-2" onClick={()=>addProduct(product)}>
                            Add to Cart
                        </button>
                        <Link to="/cart" className="btn btn-outline-dark px-3 ms-2 py-2">
                            Go to Cart
                        </Link>
                    </div>
               
            </>
        )
    }
  return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {loding ? "Loading..." : <ShowProuct/>}
            </div>
        </div>
    </div>
  )
}

export default Product