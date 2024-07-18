"use client"
import { useEffect } from 'react'
import React from 'react'
import BannerOne from '@/components/heroes/BannerOne'
import BannerCustom from '@/components/heroes/BannerCustom'
import CountDown from '@/components/common/CountDown'
import HighlightOne from '@/components/highlights/HighlightOne';
import Award from '@/components/awards/Award';
import ScrollSection from '@/components/common/ScrollSection'
import LineupOne from '@/components/lineups/LineupOne'
import LineupThree from '@/components/lineups/LineUpThree'
import LineupSeven from '@/components/lineups/LineupSeven'
import LineupCustom from '@/components/lineups/LineupCustom'
import ScheduleOne from '@/components/schedules/ScheduleOne'
import ScheduleThree from '@/components/schedules/ScheduleThree'
import ScheduleFive from '@/components/schedules/ScheduleFive'
import ScheduleSeven from '@/components/schedules/ScheduleSeven'
import Separator from '@/components/common/Separator'
import Pricing from '@/components/pricing/Pricing';
import Faq from '@/components/faq/Faq'
import SponsorSlider from '@/components/sponsores/SponsorSlider'
import BlogOne from '@/components/blogs/BlogOne'
import Cta from '@/components/cta/Cta'
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne'
import Gallery from '@/components/gallery/Gallery';
import TicketOne from '@/components/tickets/TcketOne';
import NavbarOne from '@/components/common/navbars/NavbarOne'
import FooterOne from '@/components/common/footers/FooterOne'

import Aos from 'aos'
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    Aos.init()
  }, [])


  return (
    <>
      <NavbarOne />
      <main>
        <BannerCustom />
        <Gallery styleNum={0} />
        {/* <LineupOne />
        <LineupThree />
        <LineupSeven /> */}
        {/* <Separator className={"mt-100 mt-lg-150 mt-xxl-180"} /> */}
        <LineupCustom />
        <ScrollSection />
        {/* <ScheduleOne /> */}
        {/* <ScheduleThree /> */}
        {/* <ScheduleFive /> */}
        <ScheduleSeven />
        <HighlightOne styleNum={0} />
        <Faq styleNum={0} />
        <Cta styleNum={0} />
        <SubscriptionOne styleNum={0} />
      </main>
      <FooterOne />
    </>
  )
}
