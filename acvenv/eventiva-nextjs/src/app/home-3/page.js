import React from 'react'
import BannerThree from '@/components/heroes/BannerThree'
import CountDown from '@/components/common/CountDown'
import AboutThree from '@/components/about/AboutThree'
import HighlightThree from '@/components/highlights/HighlightThree'
import LineUpThree from '@/components/lineups/LineUpThree'
import ScheduleThree from '@/components/schedules/ScheduleThree'
import ScrollSection from '@/components/common/ScrollSection'
import Separator from '@/components/common/Separator'
import Sponsor from '@/components/sponsores/Sponsor'
import Shop from '@/components/shop/Shop'
import Cta from '@/components/cta/Cta'
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne'
import Gallery from '@/components/gallery/Gallery'
import Pricing from '@/components/pricing/Pricing'

import subTitle from "@/assets/images/home-3/musicfest-2.png"
import dotImg from "@/assets/images/ellipse-3.png"
import shopDotImg from "@/assets/images/ellipse-4.png"

export const metadata = {
  title: 'Eventiva next.js - Home3',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}
const Home3 = async () => {

  return (
    <>
      <BannerThree subTitle={subTitle} />
      <CountDown styleNum={2} />
      <AboutThree styleNum={0} />
      <HighlightThree styleNum={0} prantClass={"py-50"} />
      <LineUpThree />
      <ScheduleThree dotsImage={dotImg} />
      <ScrollSection prentClass={"py-30 py-lg-50"} />
      <Pricing styleNum={1} styleNum2={1} />
      <Separator className={"mt-0 mt-lg-0 mt-xxl-0"} />
      <Sponsor />
      <Gallery styleNum={2} />
      <Shop dotsImage={shopDotImg} />
      <Cta styleNum={1}/>
      <SubscriptionOne styleNum={1} />
    </>
  )
}

export default Home3