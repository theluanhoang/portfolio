import React, { useState } from 'react'
import Title from '../../components/Title'
import teamwon from '../../assets/image/teamwon.jpg'
import ModalBlock from '../../components/Popup/ModalBlock';

function Blog() {
    const [isShow, setIsShow] = useState(false);
    const handleToggle = () => {
        setIsShow(!isShow);
    }
    return (
        <div className='container'>
            <div className='py-[50px]'>
                <Title title={'My'} titleActive={'blog'} subTitle={'posts'} />
                <div className='mt-[100px] flex items-center justify-center'>
                    <div className='grid mylg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]'>
                        <div className='mylg:max-w-[390px] max-w-full rounded-lg overflow-hidden cursor-pointer group' onClick={handleToggle}>
                            <figure className='overflow-hidden border-b-4 border-my-yellow'>
                                <img className='group-hover:scale-125 duration-300 transition-all' src={teamwon} alt="BWD 2022" />
                            </figure>
                            <div className='py-[30px] px-[30px] bg-[#252525] flex flex-col gap-[20px]'>
                                <h1 className='group-hover:text-my-yellow text-white font-bold text-2xl duration-200 cursor-pointer'>How to Own Your Audience by Creating an Email List</h1>
                                <p className='text-white'>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                isShow && <ModalBlock onToggle={handleToggle} />
            }
        </div>
    )
}

export default Blog