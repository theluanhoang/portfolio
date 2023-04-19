import React from 'react'
import { FaHome, FaUserAlt, FaShoppingBag } from 'react-icons/fa'
import { HiMailOpen } from 'react-icons/hi'
import { BsSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Sidebar() {
    const [currentPage, setCurrentPage] = React.useState('/');

    return (
        <>
            <li className={`fixed top-[30px] right-[30px] sidebar-item ${currentPage === 'light' ? 'sidebar-item--active' : ''} `} onClick={() => setCurrentPage('light')}>
                <BsSunFill size={20} color='#fff' />
            </li>
            <div className='fixed mymd:top-[200px] mymd:right-[30px] mymd:translate-x-[0] bottom-[20px] right-[50%] translate-x-[50%]'>
                <div className='flex flex-row mymd:flex-col gap-[20px] '>
                    <Link to='/' className={`sidebar-item ${currentPage === '/' ? 'sidebar-item--active' : ''} `} onClick={() => setCurrentPage('/')}>
                        <FaHome size={20} color='#fff' />
                    </Link>
                    <Link to='/about-me' className={`sidebar-item ${currentPage === '/about-me' ? 'sidebar-item--active' : ''} `} onClick={() => setCurrentPage('/about-me')}>
                        <FaUserAlt size={20} color='#fff' />
                    </Link>
                    <Link to='/my-project' className={`sidebar-item ${currentPage === '/my-project' ? 'sidebar-item--active' : ''}`} onClick={() => setCurrentPage('/my-project')}>
                        <FaShoppingBag size={20} color='#fff' />
                    </Link>
                    <Link to='/contact' className={`sidebar-item ${currentPage === '/contact' ? 'sidebar-item--active' : ''}`} onClick={() => setCurrentPage('/contact')}>
                        <HiMailOpen size={20} color='#fff' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar