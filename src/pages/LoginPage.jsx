import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [email ,setEmail] = useState()
    const [ password ,setPasword] = useState()
    
 
    return (
        <div>
        <div className='register-parent '>
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
 
                      

                        <button className='btn btn-primary mt-3'>  LOGIN</button>
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
