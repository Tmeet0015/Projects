import React, { useEffect, useState } from 'react'
import imgBanner from '../../Image/banner-img.jpg';
import food1 from '../../Image/Food_item-1.jpg'
import imgbanner2 from '../../Image/banner-2.jpg'
import imgAndroid from '../../Image/playstore_btn.png'
import imgApple from '../../Image/apple_btn.png'
import imgInfo1 from '../../Image/info-img-1.jpeg'
import imgInfo2 from '../../Image/info-img-2.jpeg'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Main = () => {

    const [data, setData] = useState([])
    const [details, setDetails] = useState([])
    const [country, setCountry] = useState([])
    // const navigate = useNavigate();

    const fetch = async () => {
        //Get FeatureRestro Api
        try{
            let respose = await axios.get('http://65.1.214.43:3042/api/v2/featuredrestaurants')
            let result = respose.data;
            console.log(result);
            setData(result);


            //Get Details Api
            let responseDetail = await axios.get('http://65.1.214.43:3042/api/v1/getdetails')
            let resultDetail = responseDetail.data;
            console.log(resultDetail);
            setDetails(resultDetail);

            //Get CountryDetails API
            let responseCountry =await axios.get('http://65.1.214.43:3042/api/v1/countries')
            let resultCountry = responseCountry.data;
            console.log('Country:',resultCountry);
            setCountry(resultCountry);

        }
        catch(error){
            console.error(error);
        }
    }


    useEffect(() => {
        fetch();
    }, [])

    return (
        <> 
            {/* Banner-Img */}
            <img src={imgBanner} alt="banner" className="main-banner w-100 h-75"></img>
            
            {/* Banner-text */}
            <div className="container text-light">
                <div className="col-1"></div>
                <div className="col-11 col-md-7 col-lg-6 col-xl-6 col-xxl-5 mt-5 px-4 ">
                    <h2 className="py-2 fw-bold fs-2">Find Fresh, Authentic and Homemade Food Near You</h2>
                    <h5 className="py-2 fs-5">We aim to connect local, home-based food businesses with customers.</h5>
                </div>
                <div className="col-1 col-md-4 col-lg-5 col-xl-6"></div>

                <div className="col-12 col-md-8 col-lg-6 px-4 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <input type="text" className="col-md-7 col-lg-7 col-xl-8 border border-0 " placeholder={`Enter Your Location`} />
                            <button className="col-4 btn btn  btn-sm-hide text-light rounded-0" style={{ background: 'linear-gradient(93.93deg, #d8ab37 0%, #f18345 100%)' }}>Update Location</button>
                        </div>
                    </div>
                    {/* <div className="card">
                        {country?.map((item, index) => (
                            <div key={index} className="card-body">
                                <input type="text" className="col-md-7 col-lg-7 col-xl-8 border border-0 " placeholder={`Enter Your Location - ${item.Name}`} />
                                <button className="col-4 btn btn  btn-sm-hide text-light rounded-0" style={{ background: 'linear-gradient(93.93deg, #d8ab37 0%, #f18345 100%)' }}>Update Location</button>
                            </div>
                        ))}
                    </div> */}
                    {/* <button className="btn btn form-control mt-2 btn-md-hide" style={{background: "linear-gradient(93.93deg, #d8ab37 0%, #f18345 100%)"}}>Update Location</button> */}
                </div>
            </div>

            {/* Region Card */ }
            <div div class="container" >
                <div class="row py-4 pad-15">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                        <div class="card text-white bg-dark mb-3 w-75 h-100">
                            <div class="card-header text-warning fs-5 fw-light"> <i class="fa-solid fa-location-dot text-warning"></i> &nbsp;
                                STEP 1 <span className='text-secondary fw-bold text-end'> 01.</span> </div>
                            <div class="card-body">
                                <h4 class="card-title">Explore Kitchen</h4> <br />
                                <p class="card-text"> Choose delicious, homemade meals, snacks, baked goods and more. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                        <div class="card text-white bg-dark mb-3 w-75 h-100">
                            <div class="card-header text-warning fs-5 fw-light"><i class="fa-regular fa-calendar-days text-warning"></i>
                                &nbsp; STEP 2</div>
                            <div class="card-body">
                                <h4 class="card-title">Choose Your Date And Dishes</h4>
                                <p class="card-text"> Kitchens require 48hrs of minimum time to ensure they can fulfill order.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                        <div class="card text-white bg-dark mb-3 w-75 h-100">
                            <div class="card-header text-warning fs-5 fw-light"><i class="fa-solid fa-drumstick-bite text-warning"></i> &nbsp;
                                STEP 3</div>
                            <div class="card-body">
                                <h4 class="card-title">Submite Your Order</h4> <br/>
                                <p class="card-text">Order for pickup/delivery and enjoy!</p><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                
                {/* Featured Kitchen Module */}
                <div className="row">
                    <h5 className="text-center text-warning fs-1 fw-bold" style={{fontFamily:"Great Vibes, cursive"}}>Features</h5>
                    <div className="row text-center">
                        <h5 className="text-dark fs-1 fw-bold my-2">Featured Kitchens</h5>
                        <p className="text-danger fs-5 fw-normal my-2">At this moment we are not providing service in your location</p>
                        <p className="text-secondary fs-6 my-2">Meanwhile, check out some of our featured Kitchens!</p>
                    </div>
                </div>


                {/* food-category */}
                <div className="row ">
                    {data?.map((item, index) => (
                        <div key={index} className="col-12 col-md-4 my-3">
                            <div className="card w-75 h-100">
                                <img src={item.ImageURL} alt="food-img" className='border-bottom border-2' style={{ width: '310px', height: '70%' }} />
                                <div className="card-body">
                                    <h5 className="card-title text-dark">{item.Name}</h5>
                                    <h6 className="card-text text-warning">
                                        <i class="fa-regular fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                        {item.Rating}
                                    </h6>
                                    <div className="row w-100 h-100">
                                        <div className="col-10">
                                            <h6 className="card-title text-secondary fs-6">{item.Address}</h6>
                                        </div>
                                        <div className="col-2">
                                            <i className="fa-solid fa-bag-shopping text-secondary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reason Module */}
                <div>
                    <div className="col-12 my-5 text-center">
                        <h5 className="text-warning fs-2" style={{fontFamily: "'Great Vibes', cursive"}}>The reason why</h5>
                        <h2 className="text-dark fs-1 fw-bold">Why People Choose Us</h2>
                    </div>
                    <div className="row text-center">
                        <div className='col-2'></div>
                        <div className="col-4 py-3">
                            <h1 className="fs-1"> <i className="fa-solid fa-book-open text-warning"></i> </h1>
                            <h5 className="fs-5 text-dark">Diverse Options</h5>
                            <h6 className="text-secondary fs-6 fw-normal">Choose from a diverse range of meals, snacks, and baked goods made with love.
                            </h6>
                        </div>

                        <div className="col-4 py-3">
                            <h1 className="fs-1"> <i class="fa-regular fa-calendar-check text-warning"></i> </h1>
                            <h5 className="fs-5 text-dark">Diverse Options</h5>
                            <h6 className="text-secondary fs-6 fw-normal">Choose from a diverse range of meals, snacks, and baked goods made with love.
                            </h6>
                        </div>
                        <div className='col-2'></div>

                        <div className='col-2'></div>
                        <div className="col-4 py-3">
                            <h1 className="fs-1"> <i class="fa-solid fa-arrow-up-right-dots text-warning"></i> </h1>
                            <h5 className="fs-5 text-dark">Diverse Options</h5>
                            <h6 className="text-secondary fs-6 fw-normal">Choose from a diverse range of meals, snacks, and baked goods made with love.
                            </h6>
                        </div>

                        <div className="col-4 py-3">
                            <h1 className="fs-1"> <i class="fa-solid fa-people-group text-warning"></i> </h1>
                            <h5 className="fs-5 text-dark">Diverse Options</h5>
                            <h6 className="text-secondary fs-6 fw-normal">Choose from a diverse range of meals, snacks, and baked goods made with love.
                            </h6>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
                

                {/* testimonial Module */}
                <div>
                    <div className="col-12 my-5 text-center">
                        <h5 className="text-warning text-capitalize fs-2" style={{fontFamily: "Great Vibes, cursive"}}>testimonial</h5>
                        <h2 className="text-dark fs-1 fw-bold text-capitalize">happy customers say</h2>
                    </div>
                    <section id="Reason" style={{ display: "flex", alignItems: "center", padding: "1%", marginTop: "2%" }}>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" >
                            <div className="carousel-inner">
                                {details?.map((item, index) => (
                                    // <div className="carousel-item active">
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <div className="row mt-3">
                                                <div className="col-sm-2 col-12"></div>
                                                <div className="col-md-10 col-12 text-center">
                                                    <div className="row">
                                                        <div className="col-sm-10 col-md-10">
                                                            <p className="text-secondary">
                                                                {item.desc}
                                                            </p>
                                                            <h4 className="text-dark"> {item.name} </h4>
                                                            <p className="text-secondary"> {item.date} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    // </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide="prev">
                                <span className=" text-danger">
                                    <i className="fa-solid fa-circle-arrow-left fs-1 text-secondary icon-hide" style={{ color: "#5f86c8" }}></i>
                                </span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide="next">
                                <span className=" text-danger">
                                    <i className="fa-solid fa-circle-arrow-right fs-1 text-secondary icon-hide" style={{ color: "#5f86c8" }}></i>
                                </span>
                            </button>
                        </div>
                    </section>
                    
                    {/* <section id="Reason" style={{display: "flex", alignItems: "center", padding: "1%", marginTop: "2%"}}>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row mt-3">
                                        <div className="col-sm-2 col-12"></div>
                                        <div className="col-md-10 col-12 text-center">
                                            <div className="row">
                                                <div className="col-sm-10 col-md-10">
                                                    <p className="text-secondary">
                                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster
                                                        veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                    </p>
                                                    <h4 className="text-dark">Asha(HomeCook)</h4>
                                                    <p className="text-secondary">Jul 15,2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row mt-3">
                                        <div className="col-2"></div>
                                        <div className="col-md-10 col-12 text-center">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-10">
                                                    <p className="text-secondary">
                                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa 
                                                        nulla illum cillum fugiat legam esse veniam
                                                        culpa fore nisi cillum quid.
                                                    </p>
                                                    <h4 className="text-dark">Marco Bitchuni</h4>
                                                    <p className="text-secondary">May 15,2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row mt-3">
                                        <div className="col-2"></div>
                                        <div className="col-md-10 col-12 text-center">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-10">
                                                    <p className="text-secondary">
                                                        Quis quorum aliqua sint quem legam fore
                                                        sunt eram
                                                        irure aliqua veniam tempor noster
                                                        veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam
                                                        esse veniam
                                                        culpa fore nisi cillum quid.
                                                    </p>
                                                    <h4 className="text-dark">Anushka(Customer)</h4>
                                                    <p className="text-secondary">Dec 15,2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide="prev">
                                <span className=" text-danger">
                                    <i className="fa-solid fa-circle-arrow-left fs-1 text-secondary icon-hide" style={{color:"#5f86c8"}}></i>
                                </span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                                data-bs-slide="next">
                                <span className=" text-danger">
                                    <i className="fa-solid fa-circle-arrow-right fs-1 text-secondary icon-hide" style={{color: "#5f86c8"}}></i>
                                </span>
                            </button>
                        </div>
                    </section> */}
                </div>
            </div>

            {/* banner-2 */}
            <div className=''>
                <div className="col-12 py-5">
                    <img src={imgbanner2} alt="banner-2" width="100%" height="70%" className="img-bg" />
                    <div className="container my-5" style={{ position: "relative" }}>
                        <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                            <h1 className="fs-1 fw-bold text-light" style={{ fontSize: "3.5vw" }}> Make orders With Our <span
                                className="text-warning">Application</span> </h1>
                        </div>
                        <div className="row my-4">
                            <div className="col-1 text-end">
                                <i className="fa-regular fa-circle-check text-warning"></i>
                            </div>
                            <div className="col-11 col-md-6 col-lg-6 col-xl-5">
                                <h4 className='text-light'>Order and pay in few minutes.</h4>
                                <h6 className="text-start text-secondary col-10">Сhoose food and pay for the order in a couple of clicks online also choose you current location using GPS.</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-1 text-end">
                                <i className="fa-regular fa-circle-check text-warning"></i>
                            </div>
                            <div className="col-11 col-md-6 col-lg-6 col-xl-5">
                                <h4 className='text-light'>Check Delivery Status.</h4>
                                <h6 className="text-start text-secondary col-10">Сhoose food and pay for the order in a couple of clicks online also choose you current location using GPS.</h6>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-12 col-md-4 col-lg-3">
                                <img src={imgAndroid} alt="playstore_btn" />
                            </div>
                            <div className="col-12 col-md-8 col-lg-3">
                                <img src={imgApple} alt="playstore_btn" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Information Banner */}
            <div className="container">
                <div className="row my-5 pad-10">
                    <div className="col-12 col-md-6 mt-4">
                        <div className="card bg-dark text-white">
                            <img src={imgInfo1} className="card-img" alt="info-img" />
                                <div className="card-img-overlay">
                                    <div className="row pad-top-10">
                                        <div className="col-10">
                                            <h2 className="fs-1 fw-bold">Join as a Patron</h2>
                                        </div>
                                        <div className="col-2 py-3">
                                            <i className="fa-regular fa-circle-right text-white fs-1 fw-bold"></i>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                        <div className="card bg-dark text-white">
                            <img src={imgInfo2} class="card-img" alt="info-img" />
                                <div className="card-img-overlay">
                                    <div className="row pad-top-10">
                                        <div className="col-10 col-md-10">
                                            <h2 className="fs-1 fw-bold">Partner with us as a Kitchen</h2>
                                        </div>
                                        <div className="col-2 py-4">
                                            <i className="fa-regular fa-circle-right text-white fs-1 fw-bold"></i>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
