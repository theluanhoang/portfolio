import React, { useEffect, useState } from 'react'
import { FaHome, FaUserAlt, FaShoppingBag } from 'react-icons/fa'
import { HiMailOpen } from 'react-icons/hi'
import { GiAchievement } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import ESidebar from '../../interfaces/ESidebar'

function Sidebar() {
    const [currentPage, setCurrentUrl] = useState('');


    useEffect(() => {
        let pathName = window.location.href;
        let arr = pathName.split('/')
        setCurrentUrl('/' + arr[arr.length - 1]);
    }, [window.location.href]);


    return (
        <>
            <div className='fixed z-50 mymd:top-[50%] mymd:-translate-y-[50%] mymd:right-[30px] mymd:translate-x-[0] bottom-[20px] right-[50%] translate-x-[50%]'>
                <div className='flex flex-row mymd:flex-col gap-[20px] '>
                    <Link to={ESidebar.HOME} className={`sidebar-item ${currentPage === ESidebar.HOME ? 'sidebar-item--active' : ''} `} >
                        <FaHome size={20} color='#fff' />
                    </Link>
                    <Link to={ESidebar.ABOUTME} className={`sidebar-item ${currentPage === ESidebar.ABOUTME ? 'sidebar-item--active' : ''} `} >
                        <FaUserAlt size={20} color='#fff' />
                    </Link>
                    <Link to={ESidebar.PROJECT} className={`sidebar-item ${currentPage === ESidebar.PROJECT ? 'sidebar-item--active' : ''}`} >
                        <FaShoppingBag size={20} color='#fff' />
                    </Link>
                    <Link to={ESidebar.CONTACT} className={`sidebar-item ${currentPage === ESidebar.CONTACT ? 'sidebar-item--active' : ''}`} >
                        <HiMailOpen size={20} color='#fff' />
                    </Link>
                    <Link to={ESidebar.BLOG} className={`sidebar-item ${currentPage === ESidebar.BLOG ? 'sidebar-item--active' : ''}`} >
                        <GiAchievement size={20} color='#fff' />
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Sidebar