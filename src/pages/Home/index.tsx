import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from '../../utils/aos'
import ESidebar from '../../interfaces/ESidebar';
function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container'>
            <div className='color-block hidden mymd:flex'></div>
            <div className='lg:h-[100vh] h-full flex flex-col mymd:flex-row items-center pt-[20px] mymd:pb-[20px] pb-[100px] justify-between gap-[50px]'>
                <div
                    data-aos='zoom-in-up' data-aos-duration='1000'
                    className="
                border-[4px]
                mymd:border-0
                shadow-inner
                mymd:rounded-3xl
                rounded-full
                mymd:w-[480px]
                mymd:h-[640px]
                sm:w-[270px]
                sm:h-[270px]
                w-[200px]
                h-[200px]
                bg-cover 
                bg-no-repeat
                bg-center bg-[url('https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/299840624_368015352192884_990020078956581529_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R8IZPKeFgmYAX_RghXu&_nc_ht=scontent.fdad3-5.fna&oh=00_AfB_Sv-rBTR_o8mzslJ6ygXK4jYnkZ5zGrIoDiadnW20Bg&oe=64438DA6')]">
                </div>
                <div className='max-w-[550px] flex flex-col gap-[20px] mymd:items-start items-center'>
                    <article className='mymd:text-5xl md:text-4xl text-3xl font-bold uppercase mymd:text-left text-center flex flex-col gap-3'>
                        <h1 className='text-my-yellow' data-aos='fade-up' data-aos-duration='1000'>I'm Hoang The Luan.</h1>
                        <h1 className='text-white' data-aos='fade-up' data-aos-duration='1500'>Fullstack developer</h1>
                    </article>
                    <p className='text-white mymd:text-left text-center leading-8 tracking-wider' data-aos='fade-up' data-aos-duration='2000'>I'm a Vietnamese based fullstack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    <Link data-aos='fade-up' data-aos-duration='2500' to={ESidebar.ABOUTME} className='max-w-[230px] text-center uppercase text-white px-[30px] py-[10px] border rounded-md border-my-yellow hover:bg-my-yellow duration-200'>More about me</Link>
                </div>
            </div>
        </div >
    )
}

export default Home