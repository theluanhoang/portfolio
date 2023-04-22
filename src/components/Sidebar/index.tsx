import React from 'react'
import { FaHome, FaUserAlt, FaShoppingBag } from 'react-icons/fa'
import { HiMailOpen } from 'react-icons/hi'
import { GiAchievement } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { HiPencilAlt } from 'react-icons/hi'
import ESidebar from '../../interfaces/ESidebar'

function Sidebar() {
    const [currentPage, setCurrentPage] = React.useState('/');
    React.useEffect(() => {
        let current = window.location.href.split('/')
        setCurrentPage(current[current.length - 1])
    }, [window.location.href]);

    return (
        <>
            <li className={`fixed z-50 top-[30px] right-[30px] sidebar-item ${currentPage === ESidebar.CREATEBLOG ? 'sidebar-item--active' : ''} `}>
                <Link to='/create-blog' className={`sidebar-item ${currentPage === ESidebar.CREATEBLOG ? 'sidebar-item--active' : ''}`}>
                    <HiPencilAlt size={20} color='#fff' />
                </Link>
            </li>
            <div className='fixed z-50 mymd:top-[200px] mymd:right-[30px] mymd:translate-x-[0] bottom-[20px] right-[50%] translate-x-[50%]'>
                <div className='flex flex-row mymd:flex-col gap-[20px] '>
                    <Link to={ESidebar.HOME} className={`sidebar-item ${currentPage === ESidebar.HOME ? 'sidebar-item--active' : ''} `}>
                        <FaHome size={20} color='#fff' />
                    </Link>
                    <Link to={ESidebar.ABOUTME} className={`sidebar-item ${currentPage === ESidebar.ABOUTME ? 'sidebar-item--active' : ''} `}>
                        <FaUserAlt size={20} color='#fff' />
                    </Link>
                    <Link to={ESidebar.PROJECT} className={`sidebar-item ${currentPage === ESidebar.PROJECT ? 'sidebar-item--active' : ''}`}>
                        <FaShoppingBag size={20} color='#fff' />
                    </Link>
                    <Link to={ESidebar.CONTACT} className={`sidebar-item ${currentPage === ESidebar.CONTACT ? 'sidebar-item--active' : ''}`}>
                        <HiMailOpen size={20} color='#fff' />
                    </Link>
                    <Link to={ESidebar.BLOG} className={`sidebar-item ${currentPage === ESidebar.BLOG ? 'sidebar-item--active' : ''}`}>
                        <GiAchievement size={20} color='#fff' />
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Sidebar