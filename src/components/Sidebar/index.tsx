import React from 'react'
import { FaHome, FaUserAlt, FaShoppingBag } from 'react-icons/fa'
import { HiMailOpen } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'


function Sidebar() {
    const [currentPage, setCurrentPage] = React.useState('/');
    const dispatch = useAppDispatch();

    return (
        <>
            {/* <li className={`fixed top-[30px] right-[30px] z-50 sidebar-item ${isDark ? 'bg-[#2B2A2A]' : 'sidebar-item--active'} `} onClick={() => {
                toggleDarkLight();
            }}>
                <BsSunFill size={20} color='#fff' />
            </li> */}
            <div className='fixed z-50 mymd:top-[200px] mymd:right-[30px] mymd:translate-x-[0] bottom-[20px] right-[50%] translate-x-[50%]'>
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