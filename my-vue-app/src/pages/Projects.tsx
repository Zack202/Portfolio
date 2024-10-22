
// @ts-ignore
import { projects } from '../constants/index.js'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA.js'
// @ts-ignore
import { arrow } from "../assets/icons";

import { useDarkMode } from '../Context/DarkModeContext';


function Projects() {
  const { darkMode } = useDarkMode();
  return (
    <section className='max-container'>
      <h1 className='head-text dark:text-white'>
        My  
        <span className='blue-gradient_text font-semibold drop-shadow'> Projects </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-200'>
        <p>
        Throughout my journey as a software engineer, I've had the opportunity to work on a diverse range of projects, spanning web development to machine learning. If any of my projects pique your interest or if you're looking to collaborate, please feel free to reach out. Below are a few recent projects that I'm particularly proud of:        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project : {name : string, theme : string, iconUrl :string, description: string, link:string}) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} style={{
                  boxShadow: darkMode 
                    ? '16px 0 20px rgba(30, 41, 57, 0.5)' 
                    : '16px 0 40px rgba(228, 228, 228, 1)',
                }}/>
              <div className='btn-front rounded-xl flex justify-center items-center' style={{
                  boxShadow: darkMode 
                    ? '16px 0 40px rgba(30, 41, 57, 0.5)' 
                    : '16px 0 40px rgba(228, 228, 228, 1)',
                }}>
                <img src={project.iconUrl}
                 alt= "Project Icon"
                 className='w-1/2 h-1/2 object-contain' />

            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold dark:text-white'>
              {project.name}
            </h4>
            <p className='mt-2 text-slate-500 dark:text-slate-300'>
              {project.description}
            </p>
            <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link
                to= {project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-blue-600 hover:text-blue-700'>
                GitHub Link
              </Link>
              <img
                src={arrow}
                alt="arrow"
                className='w-4 h-4 object-contain' />

          </div>
          </div>
          </div>
        ))}

      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default Projects