import React from 'react'
import NavbarSix from '@/components/common/navbars/NavbarSix'
import FooterThree from '@/components/common/footers/FooterThree'

const Layout = ({ children }) => {
    return (
        <>
            <NavbarSix />
            {children}
            <FooterThree styleNum={7}  />
        </>
    )
}

export default Layout