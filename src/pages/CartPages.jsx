import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import { useDispatch } from "react-redux";

const CartPages = () => {
    const [totalAmount ,setTotalAmount]=useState(0)
    const dispatch = useDispatch( )
    const deleteFromCart=(product)=>{
        dispatch({type:"DELETE_FROM_CART" ,payload:product})
    }
    const {cartItems} = useSelector(state=>state.cartReducer)

    useEffect(() => {
         let temp= 0;
         cartItems.forEach((cartItem)=>{
             temp= temp+cartItem.price
         })
         setTotalAmount(temp)
    }, [cartItems])
    
    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
       },[cartItems])
     
    return (
        <Layout>
            <div className="container">

            
            <table className='table mt-3' >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item)=>(
                        
                        <tr>
                            <td><img src={item.imageURL} height='80' width='80' alt={item.name} /></td>
                            <td>{item.name} </td>
                            <td>{item.price} </td>
                            <td onClick={()=>deleteFromCart(item)}><FaTrash /> </td>
                        </tr>
                    ))}
                </tbody>

            </table>

            <div className='d-flex justify-content-end'>
                 <h1 className='total-amount'> Total Amount = {totalAmount} BDT </h1>
            </div>
            <div className='d-flex justify-content-end'>
                 < button className='btn btn-primary mt-3'>Place Order</button>
            </div>

             

            

            </div>
        </Layout>
    )
}

export default CartPages
