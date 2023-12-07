import React, { useEffect, useState } from 'react'

import imgLogo from '../../Image/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    
    const[isLoggin, setLoggin] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    //Check user is logged in
    useEffect(() => {
        //Check localStorage
        const userIsLoggedin = JSON.parse(localStorage.getItem('userData'));
        console.log('Log',userIsLoggedin);
        setLoggin(userIsLoggedin)
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        navigate('signin');
        window.location.reload();
    }

    //check if the current location is login page
    const isLoginPage = location.pathname === 'signin'


    return(
        <>
            {isLoggin ? (
                // Loged in == true
                <nav className="navbar navbar-expand-xl navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <Link to='/'> <a className="navbar-brand" href="#">
                            <img src={imgLogo} alt="logo" style={{ width: '80px' }} />
                            {/* <img src="./Image/logo.png" alt="logo" style="width: 80px !important;" /> */}
                        </a>
                        </Link>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    <Link className="nav-link" aria-current="page" to='/'  >Home</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link " aria-current="page" href="#">Find Kitchens</a> */}
                                    <Link className="nav-link " aria-current="page" to='findkitchen' >Find Kitchens</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link " aria-current="page" href="#">About Us</a> */}
                                    <Link className="nav-link " aria-current="page" to='about'>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link " aria-current="page" href="#">Contact Us</a> */}
                                    <Link className="nav-link " aria-current="page" to='contact' >Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link " aria-current="page" href="#">Register Your Kitchen</a> */}
                                    <Link className="nav-link " aria-current="page" to='registerkitchen'>Register Your Kitchen</Link>
                                </li>
                            </ul>
                            <form className="d-flex nav-item">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li>
                                        <Link className="nav-link badge-hide" aria-current="page" > <i className="fa-solid fa-basket-shopping"></i>
                                            <span className="position-absolute top-1 translate-middle p-2 bg-warning border border-light rounded-circle"></span>
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={isLoggin.Profile.ImageURL} className='rounded-circle' width={50} alt='profile' />{isLoggin?.FullName}
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><Link className="dropdown-item" to='updateprofile' >Manage Profile</Link></li>
                                            <li><Link className="dropdown-item" to='signin' onClick={handleLogout} >Logout</Link></li>
                                            {/* onClick={()=>(localStorage.clear())} */}
                                        </ul>
                                    </li>
                                    {/* <li>
                                        <Link className="nav-link" aria-current="page" to='signin' >Profile <i class="fa-solid fa-right-to-bracket"></i></Link>
                                    </li> */}
                                </ul>
                            </form>
                        </div>
                    </div>
                </nav>

            ) : !isLoginPage ? (
                // Loggin False
                <div className='header'>

                    {/* Navbar & Header*/}
                    <nav className="navbar navbar-expand-xl navbar-dark bg-dark" >
                        <div className="container-fluid">
                            <Link to='/'> <a className="navbar-brand" href="#">
                                <img src={imgLogo} alt="logo" style={{ width: '80px' }} />
                                {/* <img src="./Image/logo.png" alt="logo" style="width: 80px !important;" /> */}
                            </a>
                            </Link>
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                        <Link className="nav-link" aria-current="page" to='/'  >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link " aria-current="page" href="#">Find Kitchens</a> */}
                                        <Link className="nav-link " aria-current="page" to='findkitchen' >Find Kitchens</Link>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link " aria-current="page" href="#">About Us</a> */}
                                        <Link className="nav-link " aria-current="page" to='about'>About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link " aria-current="page" href="#">Contact Us</a> */}
                                        <Link className="nav-link " aria-current="page" to='contact' >Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link " aria-current="page" href="#">Register Your Kitchen</a> */}
                                        <Link className="nav-link " aria-current="page" to='registerkitchen'>Register Your Kitchen</Link>
                                    </li>
                                </ul>
                                <form className="d-flex nav-item">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li>
                                            <Link to='signin' className="nav-link badge-hide" aria-current="page" > <i className="fa-solid fa-basket-shopping"></i>
                                                <span className="position-absolute top-1 translate-middle p-2 bg-warning border border-light rounded-circle"></span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" aria-current="page" to='signin' >Sign In <i className="fa-solid fa-right-to-bracket"></i></Link>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div >
            ): null}

        </>
    )
}