import React from 'react'
import NavbarThree from '@/components/common/navbars/NavbarThree'
import FooterTwo from '@/components/common/footers/FooterTwo'

const Layout = ({ children }) => {
    return (
        <>
            <NavbarThree />
            {children}
            <FooterTwo styleNum={4} />
        </>
    )
}

export default Layout