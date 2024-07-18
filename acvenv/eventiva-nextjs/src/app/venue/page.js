import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import AboutTwo from '@/components/about/AboutTwo'
import ConferenceHall from '@/components/conferenceHall/ConferenceHall'
import HighlightTwo from '@/components/highlights/HighlightTwo'
import EventCounterTwo from '@/components/common/eventCounter/EventCounterTwo'
import TicketTwo from '@/components/tickets/TicketTwo'
import Direction from '@/components/direction/Direction'
import SubscriptionTwo from '@/components/subscriptions/SubscriptionTwo'

export const metadata = {
    title: 'Eventiva next.js - Venue',
    description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
}

const Venue = () => {
    return (
        <>
            <PageHeader currentPage={"Venue"} banner={"banner-1 banner-3"} />
            <AboutTwo />
            <ConferenceHall />
            <HighlightTwo />
            <EventCounterTwo />
            <TicketTwo />
            <Direction styleNum={0} />
            <SubscriptionTwo styleNum={0} />
        </>
    )
}

export default Venue