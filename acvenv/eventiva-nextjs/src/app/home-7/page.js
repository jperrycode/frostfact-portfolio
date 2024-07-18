import React from 'react'
import BannerSeven from '@/components/heroes/BannerSeven'
import CountDown from '@/components/common/CountDown'
import TicketOne from '@/components/tickets/TcketOne'
import AboutSeven from '@/components/about/AboutSeven'
import LineupSeven from '@/components/lineups/LineupSeven'
import ScrollSection from '@/components/common/ScrollSection'
import HighlightOne from '@/components/highlights/HighlightOne'
import ScheduleSeven from '@/components/schedules/ScheduleSeven'
import SponsorSlider from '@/components/sponsores/SponsorSlider'
import Gallery from '@/components/gallery/Gallery'
import Faq from '@/components/faq/Faq'
import BlogSeven from '@/components/blogs/BlogSeven'
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne'
import Cta from '@/components/cta/Cta'


export const metadata = {
  title: 'Eventiva next.js - Home7',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}
const Home7 = () => {
  return (
    <>
      <BannerSeven />
      <CountDown styleNum={6} />
      <TicketOne styleNum={7} />
      <AboutSeven styleNum={1} />
      <LineupSeven />
      <ScrollSection />
      <HighlightOne styleNum={2} />
      <ScheduleSeven styleNum={1} />
      <SponsorSlider styleNum={2} />
      <Gallery styleNum={4} />
      <Faq styleNum={2} />
      <ScrollSection />
      <BlogSeven />
      <Cta styleNum={3}/>
      <SubscriptionOne styleNum={4} />
    </>
  )
}

export default Home7