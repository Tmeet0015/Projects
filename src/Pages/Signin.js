import React, { useEffect, useState } from 'react'
import imgBanner2 from '../Image/pager-bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Signin = () => {
    
    const [data, setData] = useState([]);
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const [error,setError] = useState({});


    const navigate = useNavigate();

    const fetch = async () => {
        try{

            const login = {
                // Email: name,
                // Password: mail
                "Email": mail,
                "Password": pass,
                "AppType": "Browser",
                "Serial": "string",
                "OS": "string",
                "Model": "string",
                "Brand": "string",
                "Device": "string"
            }

            let response = await axios.post('http://65.1.214.43:3042/api/auth/v1/login',login)
            let result = response.data;
            console.log(result);
            setData(result);

            //Store response in localStorage
            localStorage.setItem('userData',JSON.stringify(response.data));

            // Navigate to home
            navigate('/');
        }
        catch(error){
            console.error(error);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const error = {};
        if(!mail){
            error.mail = 'Email is Required!';
        }
        if(!pass){
            error.pass = 'Password is Required!'
        }
        if(Object.keys(error).length === 0 ){
            fetch();
        }
        else{
            setError(error);
        }
    }

    // useEffect(() => {
    //     fetch();
    // }, [])
    
    return (
        <>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <img src={imgBanner2} alt="banner" className="w-100" style={{ objectFit: 'cover', height: '500px' }}></img>
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                    <div className='col-12 text-center'>
                        <h1 style={{ fontSize: '7vh', marginLeft: '10%', marginRight: '10%' }} className='text-light fw-bold text-center' >Sign In</h1>
                        <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 text-secondary fw-bold mx-3'> Home </Link>
                        <a className='fs-5 text-secondary fw-bold mx-3' style={{ textDecoration: 'none' }} >Sign In</a>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row py-5'>

                    <div className='col-12 text-center'>
                        <h3 className='fw-bold'>Log In With</h3>
                    </div>
                    <div className='col-12 my-2 fs-2 text-center'>
                        <i class="fa-brands fa-facebook text-primary"></i> &nbsp;
                        <i class="fa-brands fa-google rounded-circle text-danger"></i>
                    </div>

                    <div className='col-5'><hr /></div>
                    <div className='col-2 text-center'>
                        <p className='fs-5'> or </p>
                    </div>
                    <div className='col-5'><hr /></div>

                    <div className='col-12 d-flex justify-content-center'>
                        <form className='w-50'>
                            <div className='row py-2'>
                                <div className='col-12 py-2'>
                                    <input type='email' value={mail} onChange={(e) => setMail(e.target.value)} className='form-control rounded-pill py-3 px-3' placeholder='Email*' required/>
                                    {error.mail && <div className='text-danger px-4'>{error.mail}</div>}
                                </div>
                                <div className='col-12 py-2'>
                                    <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} className='form-control rounded-pill py-3 px-3' placeholder='Password*' required />
                                    {error.pass && <div className='text-danger px-4'>{error.pass}</div>}
                                </div>
                                <div className='col-12 py-2'>
                                    <button type='submit' onClick={(e) => handleLogin(e)} className='form-control text-light fs-5 rounded-pill py-3 px-3' style={{ background: 'linear-gradient(93.93deg, #d8ab37 0%, #f18345 100%)' }} > Log In </button>
                                </div>
                                <div className='col-6 py-2 text-secondary'>No Account? <span className='text-warning'> Register Now </span></div>
                                <div className='col-6 py-2 text-warning text-end'>Forget Password?</div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}