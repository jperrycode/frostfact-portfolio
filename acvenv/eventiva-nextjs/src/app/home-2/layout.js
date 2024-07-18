import React from 'react'
import NavbarOne from '@/components/common/navbars/NavbarOne'
import FooterOne from '@/components/common/footers/FooterOne'

const Layout = ({ children }) => {
    return (
        <>
            <NavbarOne />
            {children}
            <FooterOne />
        </>
    )
}

export default Layout