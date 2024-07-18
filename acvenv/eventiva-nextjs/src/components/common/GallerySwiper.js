"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import EvModal from './EvModal';
import VideoModal from './VideoModal';

const GallerySwiper = ({ data, galleryData, galleryClass }) => {
    const [videoOpen, setVideoOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(null);

    return (
        <>
            <Swiper
                autoplay={{
                    delay: 0,
                }}
                slidesPerView={"auto"}
                speed={6000}
                spaceBetween={30}
                loop={true}
                modules={[Autoplay]}
                className={`swiper  ${galleryClass}`}

            >
                {
                    data.map(({ id, link, src, type }) => {
                        return (
                            <SwiperSlide key={id} className="swiper-slide">
                                <div className="gallery-image"  >
                                    <div onClick={() => type === "video" ? setVideoOpen(true) : "" || type === "image" ? setModalOpen(id) : ""} className="video-popup-link hover-area" data-cursor-text={type}>
                                        <Image src={src} alt="img" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            {/* Image and video popup modal */}
            <VideoModal isOpen={videoOpen} videoId={"0O2aH4XLbto"} setOpen={setVideoOpen} />
            {modalOpen && <EvModal images={galleryData} setModalOpen={setModalOpen} currentId={modalOpen} />}
        </>
    )
}

export default GallerySwiper