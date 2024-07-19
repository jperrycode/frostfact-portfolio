"use client"
import { useEffect } from 'react'
import React from 'react'
import BannerOne from '@/components/heroes/BannerOne'
import CountDown from '@/components/common/CountDown'
import HighlightOne from '@/components/highlights/HighlightOne';
import Award from '@/components/awards/Award';
import ScrollSection from '@/components/common/ScrollSection'
import LineupOne from '@/components/lineups/LineupOne'
import ScheduleOne from '@/components/schedules/ScheduleOne'
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
        <BannerOne />
        <TicketOne styleNum={1} />
        <CountDown styleNum={0} />
        <HighlightOne styleNum={0} />
        <Award />
        <ScrollSection />
        <LineupOne />
        <Separator className={"mt-100 mt-lg-150 mt-xxl-180"} />
        <ScheduleOne />
        <Pricing styleNum={0} styleNum2={0} />
        <Faq styleNum={0} />
        <SponsorSlider styleNum={0} />
        <Gallery styleNum={0} />
        <BlogOne />
        <Cta styleNum={0} />
        <SubscriptionOne styleNum={0} />
      </main>
      <FooterOne />
    </>
  )
}
