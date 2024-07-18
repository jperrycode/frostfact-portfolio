import React from 'react'
import BannerThree from '@/components/heroes/BannerThree'
import CountDown from '@/components/common/CountDown'
import AboutThree from '@/components/about/AboutThree'

import subTitle from "@/assets/images/home-3/musicfest.png"
import HighlightThree from '@/components/highlights/HighlightThree'
import LineUpThree from '@/components/lineups/LineUpThree'
import ScheduleThree from '@/components/schedules/ScheduleThree'
import ScrollSection from '@/components/common/ScrollSection'
import SponsorDark from '@/components/sponsores/SponsorDark'
import Gallery from '@/components/gallery/Gallery'
import Shop from '@/components/shop/Shop'
import Cta from '@/components/cta/Cta'
import Direction from '@/components/direction/Direction'
import SubscriptionTwo from '@/components/subscriptions/SubscriptionTwo'
import Pricing from '@/components/pricing/Pricing'

import dotImg from "@/assets/images/ellipse-7.png"
import shopdotImg from "@/assets/images/ellipse-6.png"

export const metadata = {
    title: 'Eventiva next.js - Home6',
    description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}
const page = () => {
    return (
        <>
            <BannerThree subTitle={subTitle} />
            <CountDown styleNum={5} />
            <AboutThree styleNum={1} />
            <HighlightThree styleNum={0} prantClass={"py-50"} />
            <LineUpThree />
            <ScheduleThree dotsImage={dotImg} />
            <ScrollSection />
            <Pricing styleNum={3} styleNum2={2} />
            <SponsorDark />
            <Gallery styleNum={2} />
            <Shop dotsImage={shopdotImg} />
            <Cta styleNum={4}/>
            <Direction styleNum={1} />
            <SubscriptionTwo />
        </>
    )
}

export default page