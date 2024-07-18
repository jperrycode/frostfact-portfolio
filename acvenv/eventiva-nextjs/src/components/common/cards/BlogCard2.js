import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TopUpArrow from '../icons/TopUpArrow'
import Calendar from '../icons/Calendar'

const BlogCard2 = ({img, date, desc, link}) => {
    return (
        <div className="blog-content">
            <div className="blog-content-4 custom-inner-bg">
                <div className="row gx-20 gy-50 gy-lg-0 align-items-center justify-content-between">
                    <div className="col-lg-6 order-lg-2">
                        <div className="blog-image">
                            <Image src={img}   className="img-fluid" alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="blog-left-content">
                            <p><span className="calendar me-10"> <Calendar/> </span>{date}</p>
                            <h2 className="blog-link fs-4 fw-bold"><Link className="text-decoration-none" href={`/${link}`} aria-label="blog-links">Epic Comeback: Star-Studded Lineup!</Link></h2>
                            <p>{desc}</p>
                            <div>
                                <Link href={`/${link}`} className="download-link d-flex align-items-center gap-30" aria-label="buttons">Read more <TopUpArrow className={"ticket-arrow"} height={"32"} width={"32"}/> </Link>
                            </div>
                        </div>
                        {/* -- left-content -- */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard2