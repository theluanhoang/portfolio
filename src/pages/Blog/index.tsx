import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import teamwon from '../../assets/image/teamwon.jpg'
import ModalBlock from '../../components/Popup/ModalBlock';
import { ref, child, get } from "firebase/database";
import { database } from '../../firebase';
import { notification } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectBlogs, setBlogs } from '../../store/blogs.slice';
export interface IBlog {
    content: string;
    title: string;
    thumbnail: string;
}
function Blog() {
    const dispatch = useAppDispatch();
    const blogs = useAppSelector(selectBlogs).blogs.listBlog;
    const [isShow, setIsShow] = useState(false);
    const [currentBlog, setCurrentBlog] = useState<IBlog>({
        content: '',
        title: '',
        thumbnail: ''
    });

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
                <Title title={'My'} titleActive={'blog'} subTitle={'posts'} />
                <div className='mt-[100px] flex items-center justify-center'>
                    <div className='grid mylg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]'>
                        {
                            blogs?.map((blog, index) => (
                                <div key={index} className='mylg:max-w-[390px] max-w-full rounded-lg overflow-hidden cursor-pointer group' onClick={() => {
                                    handleToggle();
                                    setCurrentBlog(blog);
                                }}>
                                    <figure className='overflow-hidden border-b-4 border-my-yellow h-[175px]'>
                                        <img className='group-hover:scale-125 duration-300 transition-all' src={blog.thumbnail} alt="BWD 2022" />
                                    </figure>
                                    <div className='py-[30px] h-[184px] px-[30px] bg-[#252525] flex flex-col gap-[20px]'>
                                        <h1 className='group-hover:text-my-yellow line-clamp-1 text-white font-bold text-2xl duration-200 cursor-pointer'>{blog.title}</h1>
                                        <p className='text-white line-clamp-3'>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {
                isShow && <ModalBlock onToggle={handleToggle} blog={currentBlog} />
            }
        </div>
    )
}

export default Blog