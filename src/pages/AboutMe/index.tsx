import React from 'react'
import Title from '../../components/Title'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { BsBookFill } from 'react-icons/bs'
import { Doughnut } from 'react-chartjs-2'
import { skills } from '../../store/skills'
import AOS from '../../utils/aos'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)


function AboutMe() {
    React.useEffect(() => {
        AOS.init()
    }, [])
    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart: any) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = 'bolder 24px sans-serif';
            ctx.fillStyle = 'white'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(`${data.datasets[0].data[0]}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }
    return (
        <div className='container'>
            <div className='py-[50px]'>
                <Title title={'About'} subTitle={'Resume'} titleActive={'me'} data-aos='fade-up' data-aos-duration='1000' />
                <div className='flex flex-col items-center mylg:flex-row mylg:justify-between py-[100px] mylg:gap-[20px] gap-[50px]'>
                    <div className=''>
                        <h1 className='text-2xl font-bold uppercase text-white mb-[20px] tracking-wider' data-aos='fade-up' data-aos-duration='1500'>PERSONAL INFOS</h1>
                        <div
                            data-aos='fade-up' data-aos-duration='2000'
                            className="
                            border-[4px]
                            shadow-inner
                            mx-auto
                            my-[30px]
                            sm-[580]:hidden
                            rounded-full
                            w-[200px]
                            h-[200px]
                            bg-cover 
                            bg-no-repeat
                            bg-center 
                            bg-[url('https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/299840624_368015352192884_990020078956581529_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R8IZPKeFgmYAX_RghXu&_nc_ht=scontent.fdad3-5.fna&oh=00_AfB_Sv-rBTR_o8mzslJ6ygXK4jYnkZ5zGrIoDiadnW20Bg&oe=64438DA6')]"></div>
                        <div className='grid grid-cols-2 gap-[10px] mb-[50px]' >
                            <ul className='flex flex-col gap-[20px]' data-aos='fade-right' data-aos-duration='2500'>
                                <div className='max-w-[280px]'>
                                    <p className='text-white font-bold md:text-base text-sm'><label className='text-[#CBCBCB]'>Name</label>: Hoang The Luan.</p>
                                </div>
                                <div className='max-w-[280px]'>
                                    <p className='text-white font-bold md:text-base text-sm'><label className='text-[#CBCBCB]'>Age</label>: 20</p>
                                </div>
                                <div className='max-w-[280px]'>
                                    <p className='text-white font-bold md:text-base text-sm'><label className='text-[#CBCBCB]'>Phone</label>: (+84) 379124695</p>
                                </div>
                                <div className='max-w-[280px]'>
                                    <p className='text-white font-bold md:text-base text-sm'><label className='text-[#CBCBCB]'>Nationality</label>: Vietnamese</p>
                                </div>
                                <div className='max-w-[280px]'>
                                    <p className='text-white font-bold md:text-base text-sm'><label className='text-[#CBCBCB]'>Facebook</label>: <a href='https://facebook.com/htl27062003'>Hoang The Luan</a></p>
                                </div>
                            </ul>
                            <ul className='flex flex-col gap-[20px]' data-aos='fade-left' data-aos-duration='2500'>
                                <div className='max-w-[280px]'>
                                    <p className='text-white font-bold md:text-base text-sm'><label className='text-[#CBCBCB]'>Address</label>: <p>Gio Linh district, Quang Tri province.</p></p>
                                </div>
                                <div className='max-w-[280px]'>
                                    <p className='text-white font-bold md:text-base text-sm'><label className='text-[#CBCBCB]'>Email</label>: <p>hoangtheluan2016 @gmail . com</p></p>
                                </div>
                                <div className='max-w-[280px]'>
                                    <p className='text-white font-bold md:text-base text-sm'><label className='text-[#CBCBCB]'>Language</label>: <p>Vietnamese, English.</p></p>
                                </div>

                            </ul>
                        </div>
                        <a data-aos='flip-left' data-aos-duration='2500' href={'/about-me'} className='max-w-[230px] text-center uppercase text-white px-[30px] py-[10px] border rounded-md border-my-yellow hover:bg-my-yellow duration-200'>Open CV</a>
                    </div>
                    <div className='max-w-[600px] grid sm-[580]:grid-cols-2 grid-cols-1 gap-[20px]' data-aos='flip-right' data-aos-duration='3000'>
                        <div className='xs-[320px]:w-[267px] py-[20px] px-[40px] flex flex-col gap-[10px] border border-[#cbcbcb] rounded-md border-opacity-50'>
                            <h1 className='text-6xl font-bold text-my-yellow'>2+</h1>
                            <div className='flex flex-row items-start gap-[10px]'>
                                <div className='w-[50px] h-[1px] bg-[#CBCBCB] mt-[20px]'></div>
                                <p className='text-[#CBCBCB] uppercase text-lg'>Years of experience</p>
                            </div>
                        </div>
                        <div className='xs-[320px]:w-[267px] py-[20px] px-[40px] flex flex-col gap-[10px] border border-[#cbcbcb] rounded-md border-opacity-50'>
                            <h1 className='text-6xl font-bold text-my-yellow'>10+</h1>
                            <div className='flex flex-row items-start gap-[10px]'>
                                <div className='w-[50px] h-[1px] bg-[#CBCBCB] mt-[20px]'></div>
                                <p className='text-[#CBCBCB] uppercase text-lg'>Completed project</p>
                            </div>
                        </div>
                        <div className='xs-[320px]:w-[267px] py-[20px] px-[40px] flex flex-col gap-[10px] border border-[#cbcbcb] rounded-md border-opacity-50'>
                            <h1 className='text-6xl font-bold text-my-yellow'>10+</h1>
                            <div className='flex flex-row items-start gap-[10px]'>
                                <div className='w-[50px] h-[1px] bg-[#CBCBCB] mt-[20px]'></div>
                                <p className='text-[#CBCBCB] uppercase text-lg'>Happy customers</p>
                            </div>
                        </div>
                        <div className='xs-[320px]:w-[267px] py-[20px] px-[40px] flex flex-col gap-[10px] border border-[#cbcbcb] rounded-md border-opacity-50'>
                            <h1 className='text-6xl font-bold text-my-yellow'>1</h1>
                            <div className='flex flex-row items-start gap-[10px]'>
                                <div className='w-[50px] h-[1px] bg-[#CBCBCB] mt-[20px]'></div>
                                <p className='text-[#CBCBCB] uppercase text-lg'>Awards <br />won</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold uppercase text-white text-center tracking-wider'>My Skills</h1>
                    <div className='mt-[50px] grid sm-[580]:grid-cols-4 grid-cols-2 justify-center items-center gap-y-[50px] gap-x-[20px]'>
                        {
                            skills.map((skill, index) => (
                                <div key={index} className='flex justify-center items-center '>
                                    <div className='w-[125px] chart-skill' data-aos='zoom-in' data-aos-duration='5000'>
                                        <Doughnut
                                            data={skill.data}
                                            options={{ cutout: 45 }}
                                            plugins={[textCenter]}
                                        >

                                        </Doughnut>
                                        <h3 className='chart-skill__name'>{skill.name}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-[100px] px-[40px]'>
                    <h1 className='text-2xl font-bold uppercase text-white text-center tracking-wider'>Experience & education</h1>
                    <div className='mt-[50px] grid mymd:grid-cols-2 grid-cols-1 gap-[50px]'>
                        <div data-aos='flip-right' data-aos-duration='4000' className='max-w-full mymd:max-w-[480px] relative border-l-[1px] border-[#303030]'>
                            <span className='edu-icon'><BsBookFill color='white' /></span>
                            <div className='px-[40px] flex flex-col text-[#EDEDED] gap-[15px]'>
                                <p className='edu-time'>2021 - Now</p>
                                <span className='edu-job'><h2>Student</h2></span>
                                <span className='edu-desc'>
                                    <p>
                                        I'm a sophomore studying at the computer science department of Vietnam Korea University of Information and Communication Technology.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration='4000' className='max-w-full mymd:max-w-[480px] relative border-l-[1px] border-[#303030]'>
                            <span className='edu-icon'><BsBookFill color='white' /></span>
                            <div className='px-[40px] flex flex-col text-[#EDEDED] gap-[15px]'>
                                <p className='edu-time'>2021 - Now</p>
                                <span className='edu-job'><h2>Student</h2></span>
                                <span className='edu-desc'>
                                    <p>
                                        I'm a sophomore studying at the computer science department of Vietnam Korea University of Information and Communication Technology.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration='4000' className='max-w-full mymd:max-w-[480px] relative border-l-[1px] border-[#303030]'>
                            <span className='edu-icon'><BsBookFill color='white' /></span>
                            <div className='px-[40px] flex flex-col text-[#EDEDED] gap-[15px]'>
                                <p className='edu-time'>2021 - Now</p>
                                <span className='edu-job'><h2>Student</h2></span>
                                <span className='edu-desc'>
                                    <p>
                                        I'm a sophomore studying at the computer science department of Vietnam Korea University of Information and Communication Technology.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div data-aos='flip-right' data-aos-duration='4000' className='max-w-full mymd:max-w-[480px] relative border-l-[1px] border-[#303030]'>
                            <span className='edu-icon'><BsBookFill color='white' /></span>
                            <div className='px-[40px] flex flex-col text-[#EDEDED] gap-[15px]'>
                                <p className='edu-time'>2021 - Now</p>
                                <span className='edu-job'><h2>Student</h2></span>
                                <span className='edu-desc'>
                                    <p>
                                        I'm a sophomore studying at the computer science department of Vietnam Korea University of Information and Communication Technology.
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutMe