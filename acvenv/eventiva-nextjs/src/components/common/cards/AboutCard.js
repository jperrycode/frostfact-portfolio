"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import RoundText from '@/components/common/RoundText'
import VideoIcon from '@/components/common/icons/VideoIcon'
import about_img from "@/assets/images/home-1/about-image-1.jpg"
import ellipse_1 from "@/assets/images/home-1/ellipse-1.png"
import VideoModal from '../VideoModal'

const AboutCard = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="about-content-wrapper position-relative wow fadeInLeft">
                <div className="about-image-1 position-relative">
                    <div className="about-image-wrapper">
                        <Image src={about_img} className="img-fluid" alt="img" />
                    </div>
                    <div onClick={() => setOpen(true)} className="video-popup video-popup-center position-absolute video-popup-link">
                        <div className="circle-wrapper">
                            <div className="circle-bg"></div>
                            <span className="inner-circle video-icon">
                                <span className=""><VideoIcon height={"30"} width={"30"} /></span>
                            </span>
                            <div className="rotate-text2 text-uppercase">
                                <RoundText style={""} text={"Where Melodies Unite Hearts Harmonia-"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-image-2">
                </div>
                <div className="ellipse-image-1">
                    <Image src={ellipse_1} className="img-fluid" alt="img" />
                </div>
            </div>
            <VideoModal isOpen={isOpen} videoId={"0O2aH4XLbto"} setOpen={setOpen} />
        </>
    )
}

export default AboutCard