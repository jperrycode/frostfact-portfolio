import React from 'react'
import BannerFive from '@/components/heroes/BannerFive'
import CountDown from '@/components/common/CountDown'
import AboutSeven from '@/components/about/AboutSeven'
import LineupSeven from '@/components/lineups/LineupSeven'
import ScrollSection from '@/components/common/ScrollSection'
import HighlightOne from '@/components/highlights/HighlightOne'
import SponsorSlider from '@/components/sponsores/SponsorSlider'
import Gallery from '@/components/gallery/Gallery'
import Faq from '@/components/faq/Faq'
import BlogSeven from '@/components/blogs/BlogSeven'
import Ticket from '@/components/tickets/TcketOne'
import Cta from '@/components/cta/Cta'
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne'
import ScheduleSeven from '@/components/schedules/ScheduleSeven'

export const metadata = {
  title: 'Eventiva next.js - Home5',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}
const Home5 = () => {
  return (
    <>
      <BannerFive />
      <CountDown styleNum={4} />
      <Ticket styleNum={5} />
      <AboutSeven styleNum={0} />
      <LineupSeven />
      <ScrollSection />
      <HighlightOne styleNum={1} />
      <ScheduleSeven styleNum={0} />
      <SponsorSlider styleNum={1} />
      <Gallery styleNum={3} />
      <Faq styleNum={1} />
      <ScrollSection />
      <BlogSeven />
      <Cta styleNum={3}/>
      <SubscriptionOne styleNum={3} />
    </>
  )
}

export default Home5