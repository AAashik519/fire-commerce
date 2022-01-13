import React, { useState } from 'react'
import '../stylesheets/authentication.css'
const RegisterPage = () => {
    const [email ,setEmail] = useState()
    const [ password ,setPasword] = useState()
    const [ confirmPassword ,setConfirmPassword] = useState()
    return (
        <div className='register-parent '>
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
                        <input type="text" placeholder='Enter Your email' className='form-control  '  value= {email} onChange={(e=>setEmail(e.target.value) )}  />

                        <input type="password" className='form-control' value={password}  placeholder="Password" onChange={(e=> setPasword(e.target.value))} />

                        <input type="password" className='form-control' value={confirmPassword}  placeholder="Confirm Password" onChange={(e=> setConfirmPassword(e.target.value))} />

                        <button className='btn btn-primary mt-3'> REGISTER</button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default RegisterPage

