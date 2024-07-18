import React from 'react'
import NavbarTwo from '@/components/common/navbars/NavbarTwo'
import FooterTwo from '@/components/common/footers/FooterTwo'

const Layout = ({ children }) => {
    return (
        <>
            <NavbarTwo />
            {children}
            <FooterTwo styleNum={3} />
        </>
    )
}

export default Layout