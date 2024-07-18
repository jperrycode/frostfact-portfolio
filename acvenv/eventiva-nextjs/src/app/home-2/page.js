import React from 'react'
import BannerTwo from '@/components/heroes/BannerTwo'
import CountDown from '@/components/common/CountDown'
import HighlightOne from '@/components/highlights/HighlightOne'
import Award from '@/components/awards/Award'
import ScrollSection from '@/components/common/ScrollSection'
import LineupOne from '@/components/lineups/LineupOne'
import ScheduleOne from '@/components/schedules/ScheduleOne'
import Separator from '@/components/common/Separator'
import Pricing from '@/components/pricing/Pricing'
import Faq from '@/components/faq/Faq'
import SponsorSlider from '@/components/sponsores/SponsorSlider'
import Gallery from '@/components/gallery/Gallery'
import BlogOne from '@/components/blogs/BlogOne'
import Cta from '@/components/cta/Cta'
import SubscriptionOne from '@/components/subscriptions/SubscriptionOne'

export const metadata = {
  title: 'Eventiva next.js - Home2',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}
const Home2 = () => {
  return (
    <>
      <BannerTwo />
      <CountDown styleNum={1} />
      <HighlightOne styleNum={0} />
      <Award />
      <ScrollSection />
      <LineupOne />
      <Separator className={"separator mt-100 mt-lg-150 mt-xxl-180"} />
      <ScheduleOne />
      <Separator className={"separator mb-50 mb-lg-100"} />
      <Pricing styleNum={0} styleNum2={0}/>
      <Faq styleNum={0}/>
      <SponsorSlider styleNum={0} />
      <Gallery styleNum={1} />
      <ScrollSection />
      <BlogOne />
      <Cta styleNum={0}/>
      <SubscriptionOne styleNum={0}/>
    </>
  )
}

export default Home2