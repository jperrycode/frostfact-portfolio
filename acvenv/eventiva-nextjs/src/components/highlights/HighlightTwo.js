"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import HighlightCard2 from '@/components/common/cards/HighlightCardTwo'
import WordOpacity from '@/components/common/WordOpacity';
import { highlightsData } from '@/lib/highlightsData';

const HighlightTwo = ({styleNum}) => {
    return (
        <section id="events" className="highlight-section pt-50 pt-lg-100 pt-xxl-130">
            <div className="container position-relative">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title section-title-style-2 wow fadeInRight">
                            <span className="fs-3 straight-line-wrapper fw-semibold position-relative custom-roboto"> <span className="straight-line"></span>Benifits</span>
                            <h2 className="title display-3 fw-extra-bold mb-n2 text-opacity custom-roboto"><WordOpacity paragraph={"What"}/></h2>
                            <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">Will You Get</h3>
                        </div>
                        {/* -- section-title -- */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text wow fadeInLeft">
                            <p className="custom-jakarta text-lg-end">
                                Immerse in mesmerizing performances, vibrant soundscapes and interactive art at our music extravaganza. Experience a festival atmosphere like no other.
                            </p>
                        </div>
                    </div>
                </div>
                {/* -- row -- */}


                <Swiper
                    spaceBetween={20}
                    loop={true}
                    className='swiper highlight-swiper-overflow'
                    breakpoints={{
                        430: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                            spaceBetween: 20
                        },
                        1100: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                            spaceBetween: 20
                        }
                    }}
                >

                    {
                        highlightsData.map(({ id, desc, icon, title }) => {
                            return (
                                <SwiperSlide key={id} className="swiper-slide">
                                    <HighlightCard2 icon={icon} title={title} desc={desc} styleNum={styleNum} />
                                </SwiperSlide >
                            )
                        })
                    }
                </Swiper>
            </div>
            {/* -- swiper--*/}

        </section>
    )
}

export default HighlightTwo