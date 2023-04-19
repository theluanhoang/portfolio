import Title from '../../components/Title'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectPopup, togglePopup } from '../../store/popup.slice';
import Popup from '../../components/Popup';
import { useEffect, useState } from 'react';
import { Project, projects } from '../../store/projects';
import { AiFillStar } from 'react-icons/ai'

function MyProject() {
    const dispatch = useAppDispatch();
    const [typeProject, setTypeProject] = useState('all')
    const isPopup = useAppSelector(selectPopup);
    const handleSetType = (type: string) => {
        setTypeProject(type)
    }
    const [listProject, setListProject] = useState<Project[]>([]);
    const [currentProject, setCurrentProject] = useState<Project>();
    const handleToggle = (project: Project) => {
        setCurrentProject(project);
        dispatch(togglePopup());
    }
    useEffect(() => {
        if (typeProject === 'all') return setListProject(projects);
        if (typeProject === 'remarkable') return setListProject(projects.filter(project => project.remarkable === true));
        let arr = projects.filter(project => project.category === typeProject);
        setListProject(arr);
    }, [typeProject]);

    return (
        <div className='container'>
            <div className='py-[50px]'>
                <Title title={'My'} titleActive={'Portfolio'} subTitle={'Works'} />
                <ul className='flex flex-row flex-wrap justify-center gap-[30px] mt-[100px]'>
                    <li onClick={() => handleSetType('all')} className={`text-white uppercase font-bold hover:text-my-yellow duration-200 cursor-pointer`}>
                        <p className={`${typeProject === 'all' ? 'text-my-yellow' : ''}`}>All</p>
                    </li>
                    <li onClick={() => handleSetType('remarkable')} className={`text-white uppercase font-bold hover:text-my-yellow duration-200 cursor-pointer`}>
                        <p className={`${typeProject === 'remarkable' ? 'text-my-yellow' : ''}`}>remarkable</p>
                    </li>
                    <li onClick={() => handleSetType('reactjs')} className={`text-white uppercase font-bold hover:text-my-yellow duration-200 cursor-pointer`}>
                        <p className={`${typeProject === 'reactjs' ? 'text-my-yellow' : ''}`}>Reactjs</p>
                    </li>
                    <li onClick={() => handleSetType('nextjs')} className={`text-white uppercase font-bold hover:text-my-yellow duration-200 cursor-pointer`}>
                        <p className={`${typeProject === 'nextjs' ? 'text-my-yellow' : ''}`}>Nextjs</p>
                    </li>
                    <li onClick={() => handleSetType('htmlcss')} className={`text-white uppercase font-bold hover:text-my-yellow duration-200 cursor-pointer`}>
                        <p className={`${typeProject === 'htmlcss' ? 'text-my-yellow' : ''}`}>Html & css</p>
                    </li>
                </ul>
                <div className='flex items-center justify-center'>
                    <div className='mt-[50px] grid mymd:grid-cols-3 sm-[580]:grid-cols-2 grid-cols-1 justify-center gap-y-[40px] gap-x-[20px]'>
                        {
                            listProject.map((project, index) => (
                                <div key={index} className='portifolio-content-item' data-aos='fade-right' data-aos-duration='1000'>
                                    <img src={project.image} alt={project.name} />
                                    <span className='portfolio-coating' onClick={() => handleToggle(project)}><p className='portfolio-coating--text'>{project.name}</p></span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {
                isPopup && <Popup {...currentProject} />
            }
        </div>
    )
}

export default MyProject