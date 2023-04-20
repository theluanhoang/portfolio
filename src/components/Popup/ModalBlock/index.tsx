import { AiOutlineCloseCircle } from 'react-icons/ai'
import Title from '../../Title';
import teamwon from '../../../assets/image/teamwon.jpg'

interface Modal {
    onToggle: () => void;
}

function ModalBlock({ onToggle }: Modal) {

    return (
        <>
            <div className='fixed top-0 right-0 left-0 bottom-0 z-50 bg-black bg-opacity-50 cursor-pointer'></div>
            <div className='bg-[#252525] overflow-scroll z-50 rounded-none sm:rounded-3xl  sm:max-w-[680px] w-full sm:max-h-[600px] h-full fixed py-8 px-5 left-[50%] -translate-x-[50%] sm:top-[50%] sm:-translate-y-[50%] top-0 -translate-y-0'>
                <Title title={'post'} titleActive={'details'} subTitle={''} />
                <div>
                    <h1 className='text-my-yellow font-bold text-2xl duration-200 cursor-pointer'>Winner of the school's best website design contest in 2022 🌟</h1>
                    <div>
                        <figure className='overflow-hidden'>
                            <img className='rounded-lg' src={teamwon} alt="BWD 2022" />
                        </figure>
                        <ul>
                            <p className='text-white'>Vietnam Korea University of Information and Communication Technology organizes the best website design contest to create an information technology playground for students. Through this playground, students have the opportunity to study and work with top IT coaches and employers.</p>
                            <p className='text-white'>BWD is a place to spark creativity and passion for those who love beauty in the field of web design.</p>
                            <p className='text-white'>With youthful enthusiasm, me and my team members signed up to participate in this competition.</p>
                        </ul>

                    </div>
                </div>
                <AiOutlineCloseCircle size={36} color='white' className='cursor-pointer top-[10px] right-[20px] sm:top-5 fixed sm:right-[20px] hover:scale-100 scale-95 duration-100' onClick={onToggle} />
            </div>
        </>
    )
}

export default ModalBlock