import React, { useEffect, useState } from 'react'
import imgBanner2 from '.././Image/pager-bg.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const FindKitchen = () => {

    const[data,setData] = useState([]);
    const[dataRestro, setDataRestro] = useState([])

    const fetch = async () => {
        try {
            // Cuisine API
            let response = await axios.get('http://65.1.214.43:3042/api/v1/cuisine')
            let result = response.data.data;
            console.log(result);
            setData(result);

            //Get FeatureRestro Api
            let respose2 = await axios.get('http://65.1.214.43:3042/api/v2/featuredrestaurants')
            let result2 = respose2.data;
            console.log(result2);
            setDataRestro(result2);
        }
        catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetch();
    }, [])

    return (
        <>
            <div style={{position:'relative', zIndex:'1'}}>
                <img src={imgBanner2} alt="banner" className="w-100" style={{ objectFit: 'cover', height: '50vh' }}></img>
                <div  style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                    <div className='col-12 text-center'>
                        <h1 style={{fontSize:'7vh'}} className='text-light fw-bold' >Kitchen</h1>
                        <Link to='/' style={{textDecoration:'none'}} className='fs-5 text-secondary fw-bold mx-3'> Home  </Link>
                        <a className='fs-5 text-secondary fw-bold mx-3' style={{textDecoration:'none'}} >Kitchen</a>
                    </div>
                </div>
            </div>

            {/* Search Module */}
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-9'>
                        <div className="card border border-0">
                            <div>
                                <input type="text" className="col-md-7 col-lg-7 col-xl-10 py-2 card-body border border-1" placeholder="Search" style={{ border: "none" }} />
                                <button className="col-2 btn btn  btn-sm-hide text-light py-2" style={{ background: 'linear-gradient(93.93deg, #d8ab37 0%, #f18345 100%)',borderRadius:'0px' }}>Search Kitchen</button>
                            </div>
                        </div>

                        <div className="card mb-3 w-100 h-50 my-3 border border-0">
                            {dataRestro?.map((item, index) => (
                                <div className="row g-0 mb-4 border border-1 rounded-3" key={index}>

                                    <div className="col-4">
                                        <img src={item.ImageURL} class="img-fluid rounded-start w-100 h-100" alt="img-food" />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body my-4">
                                            <h4 className="card-title fw-light">{item.Name}</h4>
                                            <h6 className="card-text text-warning">
                                                <i className="fa-regular fa-star text-warning"></i>
                                                <i className="fa-regular fa-star text-warning"></i>
                                                <i className="fa-regular fa-star text-warning"></i>
                                                <i className="fa-regular fa-star text-warning"></i>
                                                <i className="fa-regular fa-star text-warning"></i>
                                                {/* {item.Rating} */}{item.Rating}
                                            </h6>
                                            <div className='row mt-4'>
                                                <div className='col-10'>
                                                    <p> <i className="fa-solid fa-location-dot text-secondary"></i> 1 mile - {item.CityName} </p>
                                                </div>

                                                <div className="col-1 fs-5 fw-bold">
                                                    {item.DeliveryType.includes('Delivery') && (
                                                        <i className="fa-solid fa-truck text-end text-secondary"></i>
                                                    )}
                                                </div>
                                                <div className="col-1 fs-5 fw-bold">
                                                    {item.DeliveryType.includes('Pickup') && (
                                                        <i className="fa-solid fa-bag-shopping text-end text-secondary"></i>
                                                    )}
                                                </div>

                                                {/* <div className='col-1'>
                                                    <i class="fa-solid fa-truck text-end text-secondary">{item.DeliveryType}</i>
                                                </div>
                                                <div className='col-1'>
                                                <i class="fa-solid fa-bag-shopping text-secondary"></i>
                                                </div> */}
                                            </div>
                                            <p className="card-text text-warning">View Menu <small><i class="fa-solid fa-right-long"></i></small></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* <div className="card mb-3 w-100 my-3">
                            <div className="row g-0">
                                <div className="col-4">
                                    <img src={"..."} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Surat Kitchen</h5>
                                        <h6 className="card-text text-warning">
                                        <i className="fa-regular fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                        <i className="fa-regular fa-star text-warning"></i>
                                        {item.Rating} }0.00(0)
                                        </h6>
                                        <p> <i className="fa-solid fa-location-dot text-secondary"></i> 1 mile - Surat</p>
                                        <p className="card-text text-warning">View Menu <small><i class="fa-solid fa-right-long"></i></small></p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>

                    
                    {/* Delivery module */}
                    <div className='col-3'>
                        <div>
                            <h5>Delivery Type <span> <button className='btn btn-light border border-danger text-danger bg-light' >Clear Filter</button> </span> </h5><hr />
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label text-secondary" for="flexCheckDefault"> Delivery </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label text-secondary" for="flexCheckDefault"> Pickup </label>
                            </div>
                        </div>

                        {/* Filter Module */}
                        <div className='my-4'>
                            <h5>Filter <span> <button className='btn btn-light border border-danger text-danger bg-light' >Clear Filter</button> </span> </h5><hr />
                            
                            {Array.isArray(data) && data.map((item, index) => (
                                <div key={index} className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id={`flexCheckDefault_${index}`} />
                                    <label className="form-check-label text-secondary" htmlFor={`flexCheckDefault_${index}`}>{item.CuisineName}</label>
                                </div>
                            ))}


                            {/* {data?.map((item, index) => (
                                <div key={index} class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label text-secondary" for="flexCheckDefault"> {item.CuisineName} </label>
                                </div>
                            ))} */}
                            {/* <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label text-secondary" for="flexCheckDefault"> Indian </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label text-secondary" for="flexCheckDefault"> Mexican </label>
                            </div> */}

                            <button className='btn col-6 text-light fs-5 p-2 my-3' style={{ background: 'linear-gradient(93.93deg, #d8ab37 0%, #f18345 100%)', borderRadius: '35px' }}> Search </button>
                        </div>


                    </div>
                </div>

            </div>

        </>
    )
}