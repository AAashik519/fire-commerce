import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import '../stylesheets/authentication.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
const RegisterPage = () => {
    const [loading, setLoading]=useState(false)
    const [email ,setEmail] = useState()
    const [ password ,setPasword] = useState()
    const [ confirmPassword ,setConfirmPassword] = useState()
    const auth = getAuth();
    const register= async()=>{
        try {
            setLoading(true)
          const result=  await createUserWithEmailAndPassword(auth, email, password)
          console.log(result);
            setLoading(false)
          toast.success('Registration Success')
        } catch (error) {
            toast.error('Registration Failed')
            setLoading(false)
        }
    }
  
    return (
        <div className='register-parent '>
            {loading && (<Loader />)}
            <div className="register-top">

            </div>

            <div className="row">
                    
                <div className="col-md-6">
                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_IcvJ1B.json"  background="transparent"  speed="0.5" loop   autoplay></lottie-player>
                </div>

                <div className="col-md-4 r-form">
               
                    <div className="register-form ">
                        <h3>Register</h3>
                        <hr />
                        <input type="email" placeholder='Enter Your email' className='form-control  '  value= {email} onChange={(e=>setEmail(e.target.value) )}  />

                        <input type="password" className='form-control' value={password}  placeholder="Password" onChange={(e=> setPasword(e.target.value))} />

                        <input type="password" className='form-control' value={confirmPassword}  placeholder="Confirm Password" onChange={(e=> setConfirmPassword(e.target.value))} />

                        <button className='btn btn-primary mt-3' onClick={register}> REGISTER</button>
                        <p>Already have an account ? <Link to='/login'   > Login</Link> </p>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default RegisterPage

