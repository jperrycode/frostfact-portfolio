import Image from 'next/image'
import React from 'react'
import ButtonOutline from '@/components/common/buttons/ButtonOutline'
import ShopIcon from '@/components/common/icons/ShopIcon'
import ButtonFill from '@/components/common/buttons/ButtonFill'
import TicketIcon from '@/components/common/icons/TicketIcon'
import SectionName from '@/components/common/sectionTitle/SectionName'
import SectionDesc from '@/components/common/sectionTitle/SectionDesc'

import about_img_7 from "@/assets/images/home-7/about-7-image.jpg"
import SectionTitleTwo from '@/components/common/sectionTitle/SectionTitleTwo'

const AboutFour = () => {

    return (
        <section className="about-section about-3 py-50 py-lg-100 py-xxl-120">
            <div className="container">
                <div className="row gx-80 gy-lg-0 gy-40 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-3-image wow fadeInRight">
                            <Image src={about_img_7}   className="img-fluid rounded-5" alt="about-image" />
                        </div>
                    </div>
                    {/* -- col-5 -- */}
                    <div className="col-lg-6 wow fadeInLeft">
                        <div className="section-title mb-30 mb-xxl-40">
                            <SectionName
                                name={"About The Event"}
                                className={"fs-3"}
                            />
                            <SectionTitleTwo
                                title={"Soulful"}
                                subTitle={"Symphony"}
                                titleClass={""}
                                subTitleClass={"text-primary"}
                            />
                            <SectionDesc
                                desc={"Experience Harmonia: where melodies transcend boundaries. Immerse in captivating performances that ignite the stage. Unleash your musical senses and embrace rhythmic bliss."}
                                className={"custom-jakarta custom-font-style-2 mb-0 mt-30"}
                            />
                        </div>
                        {/* -- section-title -- */}
                        <div className="about-3-text d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-lg-center mb-40 mb-lg-60">
                            <div>
                                <h4 className="fw-extra-bold custom-jakarta">25-28 Dec, 2023</h4>
                                <p className="custom-jakarta custom-font-style-2 fw-semibold mb-0">4pm-12am</p>
                            </div>
                            <div>
                                <h4 className="text-uppercase custom-jakarta fw-extra-bold">Basement</h4>
                                <p className="custom-jakarta custom-font-style-2 fw-semibold mb-0">135 W, 46nd Street, New York</p>
                            </div>
                        </div>
                        {/* -- about-3-text -- */}

                        <div className="d-block d-md-flex gap-4">
                            <ButtonFill className={"btn-rounded"} link={"#"}>
                                <TicketIcon height={"25"} width={"25"} />
                                Buy Ticket
                            </ButtonFill>

                            <ButtonOutline className={"btn-outline-primary btn-outline-style-2 btn-rounded gap-2"} link={"#"}>
                                <ShopIcon height={'19'} width={'19'} />
                                Shop Merch
                            </ButtonOutline>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutFour