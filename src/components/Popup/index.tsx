import { useAppDispatch } from '../../store/hooks';
import { togglePopup } from '../../store/popup.slice';
import { AiOutlineFileText, AiOutlineCloseCircle } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { BsFillPhoneFill } from 'react-icons/bs'
import { IoEarth } from 'react-icons/io5'
import { TbSourceCode } from 'react-icons/tb'
import { Project } from '../../store/projects';
function Popup({ author, category, image, name, responsive, source, technology, website }: Project) {
    const dispatch = useAppDispatch();

    const handleToggle = () => {
        dispatch(togglePopup());
    }
    return (
        <>
            <div className='fixed top-0 right-0 left-0 bottom-0 z-50 bg-black bg-opacity-50 cursor-pointer' onClick={handleToggle}></div>
            <div className='bg-[#252525] overflow-scroll z-50 rounded-none sm:rounded-3xl  sm:max-w-[680px] w-full sm:max-h-[600px] h-full fixed py-8 px-5 left-[50%] -translate-x-[50%] sm:top-[50%] sm:-translate-y-[50%] top-0 -translate-y-0'>
                <div className='flex flex-col gap-7'>
                    <h1 className='text-my-yellow text-4xl font-bold text-center uppercase tracking-wider'>{name}</h1>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                        <div className='flex flex-row items-center gap-2'>
                            <AiOutlineFileText color='white' size={20} />
                            <span className='text-white max-w-full'>Project: <span className='font-bold'>{name}</span></span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <FaUserAlt color='white' size={20} />
                            <span className='text-white max-w-full'>Author: <span className='font-bold'>{author}</span></span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <BsFillPhoneFill color='white' size={20} />
                            <span className='text-white max-w-full'>Responsive: <span className={`font-bold ${responsive ? 'text-[#5BE85B]' : 'text-[#FF6347]'}`}>{responsive + ''}</span></span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <BiCodeAlt color='white' size={20} />
                            <span className='text-white max-w-full'>Technology: <span className='font-bold'>{technology}</span></span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IoEarth color='white' size={20} />
                            <span className='text-white max-w-full'>Website: <a target='_blank' href={website} className='font-bold text-my-yellow underline line-clamp-1'>{website}</a></span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <TbSourceCode color='white' size={20} />
                            <span className='text-white max-w-full'>Source code: <a target='_blank' href={source} className='font-bold text-my-yellow underline line-clamp-1'>{source}</a></span>
                        </div>
                    </div>
                    <a target='_blank' href={website} className='relative group'>
                        <img src={image} alt={name} className='rounded-lg' />
                        <div className='absolute top-0 left-0 rounded-lg bottom-0 right-0 bg-black bg-opacity-50 flex group-hover:hidden'></div>
                    </a>
                    <AiOutlineCloseCircle size={36} color='white' className='cursor-pointer top-[10px] right-[20px] sm:top-5 fixed sm:right-[20px] hover:scale-100 scale-95 duration-100' onClick={handleToggle} />
                </div>
            </div>
        </>
    )
}

export default Popup