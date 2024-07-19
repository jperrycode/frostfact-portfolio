import React from 'react'
import BannerFour from '@/components/heroes/BannerFour'
import AboutFour from '@/components/about/AboutFour'
import HighlightThree from '@/components/highlights/HighlightThree'
import LineUpThree from '@/components/lineups/LineUpThree'
import CountDown from '@/components/common/CountDown'
import ScheduleThree from '@/components/schedules/ScheduleThree'
import ScrollSection from '@/components/common/ScrollSection'
import Sponsor from '@/components/sponsores/Sponsor'
import Gallery from '@/components/gallery/Gallery'
import Shop from '@/components/shop/Shop'
import Cta from '@/components/cta/Cta'
import Separator from '@/components/common/Separator'
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne'

import ellipse_4 from "@/assets/images/ellipse-4.png"
import ellipse_3 from "@/assets/images/ellipse-3.png"

import Pricing from '@/components/pricing/Pricing'

export const metadata = {
    title: 'Eventiva next.js - Home4',
    description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}
const Home4 = () => {
    return (
        <>
            <BannerFour />
            <AboutFour />
            <HighlightThree prantClass={"pb-50"} />
            <LineUpThree />
            <CountDown styleNum={3} />
            <ScheduleThree dotsImage={ellipse_3} />
            <ScrollSection prentClass={"py-30 py-lg-50"} />
            <Pricing styleNum={2} styleNum2={1} />
            <Separator />
            <Sponsor />
            <Gallery styleNum={2} />
            <Shop dotsImage={ellipse_4} />
            <Cta styleNum={2}/>
            <SubscriptionOne styleNum={2} />
        </>
    )
}

export default Home4