import React from 'react'
import Title from '../../components/Title'
import { FaMapMarkerAlt, FaPhoneSquareAlt, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa'
import { HiMailOpen } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import AOS from '../../utils/aos'

function Contact() {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container'>
            <div className='overflow-hidden py-[50px] sm:px-[40px] px-[10px]'>
                <Title title={'Get in'} titleActive={'touch'} subTitle={'contact'} data-aos='fade-up' data-aos-duration='1000' />
                <div className='flex flex-col mymd:items-start mymd:flex-row gap-[100px] mt-[100px]'>
                    <div className='mymd:basis-1/3 basis-full flex flex-col gap-[30px]' data-aos='fade-right' data-aos-duration='2500'>
                        <h1 className='text-2xl font-bold uppercase text-white tracking-wider'>don't be shy</h1>
                        <p className='text-white'>
                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <ul className='flex flex-col gap-[30px]'>
                            <li className='flex flex-row gap-2 items-center'>
                                <FaMapMarkerAlt className='text-my-yellow' size={36} />
                                <div>
                                    <p className='text-[#CDCDCD] uppercase font-bold'>Address point</p>
                                    <p className='text-white'>123 Nguyen Minh Chau, Hoa Hai, Ngu Hanh Son, Da Nang</p>
                                </div>
                            </li>
                            <li className='flex flex-row gap-2 items-center'>
                                <HiMailOpen className='text-my-yellow' size={36} />
                                <div>
                                    <p className='text-[#CDCDCD] uppercase font-bold'>Email</p>
                                    <p className='text-white'>hoangtheluan2016@gmail.com</p>
                                </div>
                            </li>
                            <li className='flex flex-row gap-2 items-center'>
                                <FaPhoneSquareAlt className='text-my-yellow' size={36} />
                                <div>
                                    <p className='text-[#CDCDCD] uppercase font-bold'>Call me</p>
                                    <p className='text-white'>(+84) 379124695</p>
                                </div>
                            </li>
                        </ul>
                        <ul className='flex flex-row gap-[15px]'>
                            <li className='w-[40px] h-[40px] hover:bg-my-yellow duration-150 cursor-pointer rounded-full bg-[#222222] flex items-center justify-center'>
                                <a href=""><FaFacebookF className='text-white' /></a>
                            </li>
                            <li className='w-[40px] h-[40px] hover:bg-my-yellow duration-150 cursor-pointer rounded-full bg-[#222222] flex items-center justify-center'>
                                <a href=""><AiFillInstagram className='text-white' /></a>
                            </li>
                            <li className='w-[40px] h-[40px] hover:bg-my-yellow duration-150 cursor-pointer rounded-full bg-[#222222] flex items-center justify-center'>
                                <a href=""><FaTiktok className='text-white' /></a>
                            </li>
                            <li className='w-[40px] h-[40px] hover:bg-my-yellow duration-150 cursor-pointer rounded-full bg-[#222222] flex items-center justify-center'>
                                <a href=""><FaYoutube className='text-white' /></a>
                            </li>
                        </ul>
                    </div>
                    <div className='mymd:basis-2/3 basis-full flex flex-col gap-[30px]' data-aos='fade-left' data-aos-duration='2500'>
                        <div className='flex flex-col md:flex-row gap-[30px]'>
                            <input type="text" placeholder='Your name' className='input-form' />
                            <input type="email" placeholder='Your email' className='input-form' />
                        </div>
                        <div className='flex gap-[30px]'>
                            <input type="text" placeholder='Your subject' className='input-form' />
                        </div>
                        <div className='flex gap-[30px]'>
                            <textarea rows={8} placeholder='Your message' className='input-form' />
                        </div>
                        <button className='max-w-[230px] text-center uppercase text-white px-[30px] py-[10px] border rounded-md border-my-yellow hover:bg-my-yellow duration-200'>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact