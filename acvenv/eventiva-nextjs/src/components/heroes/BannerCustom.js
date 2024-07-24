import Image from 'next/image'
import React from 'react'

import EventDate from '@/components/common/EventDate'

const BannerCustom = () => {
    return (
        <section className="hero-section hero-2 position-relative">
            <div className="hero-wrapper mx-auto position-relative parallax">
                <div className="container">
                    <div className="hero-inner-text position-relative">
                        <h1 className="soundscapes fs-120 fw-extra-bold mb-0">Castle in the Sky<br/>Brooklyn NYC</h1>
                    </div>
                </div>
                {/* <EventDate styleNum={1} /> */}
            </div>
        </section>
    )
}

export default BannerCustom