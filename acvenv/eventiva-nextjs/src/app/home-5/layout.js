import React from 'react'
import FooterOne from '@/components/common/footers/FooterOne'
import NavbarFive from '@/components/common/navbars/NavbarFive'

const Layout = ({ children }) => {
    return (
        <>
            <NavbarFive />
            {children}
            <FooterOne />
        </>
    )
}

export default Layout