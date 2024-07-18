"use client"
import React, { useState } from 'react'
import Map from '@/components/common/map/Map'
import Link from 'next/link'

const Direction = ({ styleNum }) => {
    const [el, seEl] = useState("")

    // styleNum 0 from about, venue and contact
    // styleNum 1 from home page 6


    // ----- Change classname define in home page
    let oder;
    let btnClass;
    let prentClass;
    let wrapperClass;
    
    switch (styleNum) {
        case 0:
            oder = "order-1";
            btnClass = "btn-gradient";
            prentClass = "pt-50 pt-lg-100 pt-xxl-130 pb-20 pb-lg-50"
            break;
        case 1:
            oder = "order-0";
            wrapperClass = 'direction-style-2';
            btnClass = "btn-primary"
            break;

        default:
            break;
    }

    // ----- Change classname define in home page


    return (
        <section id="direction" className={`direction-section direction-1 position-relative pt-4 pt-lg-60 ${prentClass}`}>
            <div className="container">
                <div className={`direction-wrapper ${wrapperClass}`}>
                    <div className="row justify-content-between align-items-lg-center gy-40 gy-lg-0">
                        <div className={`col-lg-6 ${oder}`}>
                            <div className="map-image map-image-2 parallax position-relative">
                                <div className="marker-content">
                                    <span className="map-marker">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </span>
                                    <div className="map-popup-content"><h3>Basement</h3><p>135W, 46nd Street, New York</p></div>
                                </div>
                            </div>
                            <Map el={el} />
                            {/* -- Modal-Map -- */}
                        </div>
                        <div className="col-lg-5">
                            <div className="direction-left-content wow fadeInRight">
                                <h2 className="display-5 fw-extra-bold custom-jakarta">
                                    Get Direction to Harmonia
                                </h2>
                                <div className="d-flex flex-column flex-lg-row gap-5 justify-content-lg-between align-items-lg-center mt-30 mt-lg-50">
                                    <div className="direction-details">
                                        <span className="fs-3 straight-line-wrapper fw-semibold position-relative"><span className="straight-line"></span>Venue</span>
                                        <div className="mt-10 mt-lg-30">
                                            <h4 className="custom-jakarta fw-extra-bold">BASEMENT</h4>
                                            <h4 className="custom-jakarta fw-normal">135 W, 46nd Street, New York, USA</h4>
                                        </div>
                                    </div>
                                    <div className="direction-details">
                                        <span className="fs-3 straight-line-wrapper fw-semibold position-relative"><span className="straight-line"></span>Time</span>
                                        <div className="mt-10 mt-lg-30">
                                            <h4 className="custom-jakarta fw-normal">25th - 28th December</h4>
                                            <h4 className="custom-jakarta fw-normal">Thursday - Saturday 22:30 - 07:00</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mt-lg-40">
                                    <Link onClick={(() => seEl(true))} id="mapDirectionBtn" href="#" className={`btn ${btnClass} btn-custom-dark d-flex align-items-center justify-content-center custom-roboto gap-10 btn-map-direction`} data-bs-toggle="modal" data-bs-target="#RoutingMapModal">Get Direction <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></Link>
                                </div>
                            </div>
                            {/* -- direction-left-content -- */}
                        </div>
                        {/* -- col-5 -- */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Direction


