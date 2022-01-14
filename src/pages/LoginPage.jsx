import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
 
const LoginPage = () => {
    const [loading, setLoading]=useState(false)
    const [email ,setEmail] = useState()
    const [ password ,setPasword] = useState()
    const auth = getAuth();
    const login= async()=>{
   
        try {
            setLoading(true)

           const result= await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem("currentUser" ,JSON.stringify(result))
            console.log(result);
           setLoading( false)
           toast.success("Login Successfull")
           window.location.href='/'
        } catch (error) {
            console.log();
            setLoading(false)
            toast.error("Login Failed")
        }
    }
    return (
       
        <div>
        <div className='register-parent '>
        {loading && (<Loader />)}
            <div className="register-top">

            </div>

            <div className="row">
                    
                <div className="col-md-6">
                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_hu9cd9.json"  background="transparent"  speed=".5"     loop  autoplay></lottie-player>
                </div>

                <div className="col-md-4 r-form">
               
                    <div className="register-form ">
                        <h3>Login</h3>
                        <hr />
                        <input type="text" placeholder='Enter Your email' className='form-control  '  value= {email} onChange={(e=>setEmail(e.target.value) )}  />

                        <input type="password" className='form-control' value={password}  placeholder="Password" onChange={(e=> setPasword(e.target.value))} />
 
                      

                        <button className='btn btn-primary mt-3' onClick={login}>  LOGIN</button>
                        <hr />
                        <Link to='/register'>Cick here to register</Link>
                    </div>
                 
                </div>
            </div>
        </div>
    
        </div>
    )
}

export default LoginPage
