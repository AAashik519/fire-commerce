import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import {getDoc ,doc} from "firebase/firestore";
import fireDB from "../fireconfig";
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [loading ,setLoading] = useState(false)
    const [product, setProduct] = useState();
    const params= useParams()

    useEffect(() => {
      getData();
    },[]);


    const getData = async () => {
        try {
          setLoading(true)
          const  productTemp = await getDoc(doc(fireDB ,"products", params.productId));
          setProduct(productTemp.data());
          console.log( productTemp.data())
          setLoading(false)
        } catch (error) {
          console.log(error);
          setLoading(false)
        }
      };

    return (
        <Layout loading={loading}>
            {product && ( <div className='container p-5'> 
            <div className="row justify-content-center ">
              <div className="col-md-8">
              <p><b>{product.name} </b></p>
                <img src={product.imageURL} alt={product.name} className='product-info-image' />
                <hr />
                <p>{product.description}</p>
                <h3 style={{"color":'tomato'}}>{product.price} BDT</h3>
                <div className='d-flex justify-content-end mt-4'> 
                  <button  >Add to cart </button>
                </div>
              </div>
            </div>
               
            </div>)}
            
        </Layout>
    )
}

export default ProductPage
