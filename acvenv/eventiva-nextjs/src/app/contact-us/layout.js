import React from 'react'
import Navbar6 from '@/components/common/navbars/NavbarSix'
import Footer3 from '@/components/common/footers/FooterThree'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar6 />
            {children}
            <Footer3 styleNum={7}  />
        </>
    )
}

export default Layout