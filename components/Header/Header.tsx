import React from 'react'
import Image from 'next/image';
import logo from '../../public/logo.png';

export const Header = () => {
    return (
        <div className='header'>
            <Image src={logo} width={155} height={62} alt=''/>
        </div>
    )
}

export default Header;