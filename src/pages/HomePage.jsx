import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireconfig";
import { fireProducts } from "../fireData";
import {useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
 
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
 
const HomePage = ({ }) => {
const [loading ,setLoading] = useState(false)
  const dispatch = useDispatch( )
   const {cartItems} = useSelector(state=>state.cartReducer)
  const [products, setProducts] = useState([]);
  const  navigate =  useNavigate()

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    
    try {
      setLoading(true)
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
        setLoading(false)
      });
      setProducts(productsArray);
    } catch (error) {
      console.log(error );
      setLoading(false)
    }
  };
 

  useEffect(()=>{
   localStorage.setItem('cartItems', JSON.stringify(cartItems))
  },[cartItems])


  const addToCart=(product)=>{
    dispatch({type:"ADD_TO_CART" ,payload:product})
  }


  return (
    <Layout loading={loading}>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            
            <div className="col-md-4">
              <div className="m-2 p-2 product position-relative">
                <div className="product-content">
                  <p> {product.name} {product.description}  </p>
                  <div className="text-center">

                    <img src={product.imageURL} alt={product.name} className="product-img"
                    />
                  </div>
                </div>
                <div className="product-actions">
                    <h2>{product.price} BDT</h2>
                    <div className="d-flex">
                      <button className="mx-2" onClick={()=>addToCart(product)}> Add To Cart </button>
                      <button className="" onClick={(e)=>{
                        navigate(`/productInfo/${product.id}`)
                      }} >View</button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
