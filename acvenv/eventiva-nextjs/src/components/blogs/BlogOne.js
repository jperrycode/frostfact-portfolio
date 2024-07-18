"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionTitle from '@/components/common/sectionTitle/SectionTitle'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'
import BlogCard from '@/components/common/cards/BlogCard'
import ellipse_img_1 from "@/assets/images/home-1/ellipse-1.png"
import { blogData } from '@/lib/blogData';

const BlogOne = () => {

    return (
        <section className="blog-section blog-vertical pb-50 pb-lg-80">
            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-end justify-content-lg-between mb-30 mb-lg-70">
                    <div className="col-lg-4">
                        <div className="section-title section-title-style-2" >
                            <SectionName
                                name={"The Power Behind Us"}
                                className={""}
                            />
                            <SectionTitle
                                title={"Harmonia"}
                                subTitle={"Headlines"}
                                titleClass={""}
                                subTitleClass={""}
                            />
                        </div>
                        {/* <!-- section-title --> */}
                    </div>
                    <div className="col-lg-5">
                        <div className="highlights-text" >
                            <SectionDesc
                                desc={"Elevating the Music. Our valued partners and sponsors play a pivotal role in bringing our vision to life. We orchestrate an unforgettable music celebration that resonates."}
                                className={"text-lg-end"}
                            />

                        </div>
                    </div>
                </div>
                {/* <!-- row --> */}
                <div className="blog-content-wrapper position-relative">
                    <div className="ellipse-image-1">
                        <Image src={ellipse_img_1}   alt="ellipse-1" />
                    </div>

                    <Swiper
                        spaceBetween={30}
                        // slidesPerView={3}
                        className='swiper blog-2-swiper p-10'
                        breakpoints={{
                            769: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 30
                            },
                            770: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                spaceBetween: 30
                            },
                            1100: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetween: 30
                            }
                        }}
                    >
                        {
                            blogData.map(({ id, date, desc, img, link, title }) => {
                                return (
                                    <SwiperSlide key={id} className='swiper-slide'>
                                        <BlogCard date={date} desc={desc} img={img} link={link} title={title} parentClass={'blog-content-2 custom-inner-bg'} />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>

                    {/* <!-- swiper-wrapper --> */}
                </div>
                {/* <!-- swiper --> */}
            </div>
            {/* <!-- blog-content-wrapper --> */}
        </section >
    )
}

export default BlogOne