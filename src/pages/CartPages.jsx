import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import {addDoc ,collection} from'firebase/firestore'
import fireDB from '../fireconfig'
import { toast } from "react-toastify";
const CartPages = () => {
    const [loading, setLoading]=useState(false)
    const [name ,setName] = useState()
    const [ address ,setAddress] = useState()
    const [ phoneNumber ,setPhoneNumber] = useState()
    const [ pinCode ,setPinCode] = useState()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };
  const { cartItems } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + cartItem.price;
    });
    setTotalAmount(temp);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const placeOrder =async ()=>{
    const addressInfo={
        name,address,pinCode,phoneNumber
    }
    console.log(addressInfo);
    const orderInfo={
        cartItems,
        addressInfo,
        email:JSON.parse(localStorage.getItem('currentUser')).user.email,
        userId: JSON.parse(localStorage.getItem('currentUser')).user.uid,
    }
    try {
        setLoading(true)
        const result = await addDoc(collection(fireDB , 'orders'),orderInfo)
        toast.success('order placed successfully')
        setLoading( false)
        handleClose()
    }catch(error){
        setLoading(false)
        toast.error('order placed failed')
    }
  }
  return (
    <Layout loading={loading}>
      <div className="container">
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr>
                <td>
                  <img
                    src={item.imageURL}
                    height="80"
                    width="80"
                    alt={item.name}
                  />
                </td>
                <td>{item.name} </td>
                <td>{item.price} </td>
                <td onClick={() => deleteFromCart(item)}>
                  <FaTrash />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-end">
          <h1 className="total-amount"> Total Amount = {totalAmount} BDT </h1>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary mt-3" onClick={handleShow}>
            Place Order
          </button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add your address </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="register-form ">
            
              <hr />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control  "
                value={name}
                onChange={(e) =>  setName(e.target.value)}
              />

              <input
                type="text"
                className="form-control"
                value={address}
                placeholder="Enter your address"
                onChange={(e) => setAddress(e.target.value)}
              />

              <input
                type="text"
                className="form-control"
                value={phoneNumber}
                placeholder="Enter your phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={pinCode}
                placeholder="Enter your pin code  "
                onChange={(e) => setPinCode(e.target.value)}
              />
                
 
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={placeOrder}>
              Order
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Layout>
  );
};

export default CartPages;
