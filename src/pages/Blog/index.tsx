import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import teamwon from '../../assets/image/teamwon.jpg'
import ModalBlock from '../../components/Popup/ModalBlock';
import { ref, child, get } from "firebase/database";
import { database } from '../../firebase';
import { notification } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectBlogs, setBlogs } from '../../store/blogs.slice';
import AOS from '../../utils/aos';
import PaginatedItems from '../../components/PaginatedItems';

export interface IBlog {
    content: string;
    title: string;
    thumbnail: string;
    description: string;
}
function Blog() {
    const dispatch = useAppDispatch();
    const blogs = useAppSelector(selectBlogs).blogs.listBlog;
    const [isShow, setIsShow] = useState(false);
    const [currentBlog, setCurrentBlog] = useState<IBlog>({
        content: '',
        title: '',
        thumbnail: '',
        description: ''
    });
    useEffect(() => {
        AOS.init();
    }, [])
    const handleToggle = () => {
        setIsShow(!isShow);
    }
    const dbRef = ref(database)
    useEffect(() => {
        get(child(dbRef, `blogs/`)).then((snapshot) => {
            if (snapshot.exists()) {
                let array: IBlog[] = [];
                snapshot.forEach((child) => {
                    array.push(child.val());
                })
                dispatch(setBlogs(array));
            } else {
                notification.error({
                    message: 'Failed',
                    description: 'No data available',
                    duration: 1.5,
                    key: '1',
                });
            }
        }).catch((error) => {
            notification.error({
                message: 'Error',
                description: 'Error',
                duration: 1.5,
                key: '1',
            });
        });
    }, [])


    return (
        <div className='container'>
            <div className='py-[50px]'>
                <Title title={'My'} titleActive={'blog'} subTitle={'posts'} data-aos='fade-up' data-aos-duration='1500' />
                <div className='mt-[100px] flex items-center justify-center'>
                    <PaginatedItems type='blog' data={blogs} itemPerPage={3} handleToggle={handleToggle} setCurrentData={setCurrentBlog} />
                </div>
            </div>
            {
                isShow && <ModalBlock onToggle={handleToggle} blog={currentBlog} />
            }
        </div>
    )
}

export default Blog