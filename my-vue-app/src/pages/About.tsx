// @ts-ignore
import { skills, experiences } from '../constants/index.js'
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA.js';
import { useDarkMode } from '../Context/DarkModeContext';

const About = () => {
  const { darkMode } = useDarkMode();
  return (
    <section className='max-container'>
      <h1 className='head-text dark:text-white'>
        Hey, I'm 
        <span className='blue-gradient_text font-semibold drop-shadow'> Zachary Lowinger </span>
      </h1>

      <div className='mt-5 flex flex-col, gap-3 text-slate-500 dark:text-slate-200'>
        <p>
        I'm an aspiring Software Engineer currently based in Seaford, NY. I have a strong passion for developing innovative and intresting solutions and am particularly interested in roles related to artificial intelligence and data science. My journey in technology is driven by a desire to solve complex problems and make a positive impact through my work.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text dark:text-white'>
          My Current Skills
        </h3>

        <div className='flex mt-16 flex-wrap gap-12'>
          {skills.map((skill: { imageUrl: string, name: string }, index: number) => (

            <div key = {index} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl dark:shadow-gray-700 bg-white dark:bg-gray-500' style={{
                  boxShadow: darkMode 
                    ? '16px 0 20px rgba(30, 41, 57, 0.5)' 
                    : '16px 0 40px rgba(228, 228, 228, 1)',
                }}/>
              <div className='btn-front rounded-xl flex justify-center items-center '   style={{
                  boxShadow: darkMode 
                    ? '16px 0 20px rgba(30, 41, 57, 0.5)' 
                    : '16px 0 40px rgba(228, 228, 228, 1)',
                }}>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>  ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text dark:text-white'>
          Academic & Professional Journey
        </h3>
        <div className='mt-5 flex flex-col, gap-3 text-slate-500 dark:text-slate-200'>
          <p>
          I've been on an exciting journey of learning and growth, collaborating with talented peers
          and honing my skills in software development. While I'm currently seeking my first role in
          a software company, my academic background, previous experience, and personal projects have
          equipped me with a solid foundation in full-stack software development, artificial intelligence,
          and and a knack for creative problem-solving.<br/><span className='font-bold'>Here's a quick snapshot of my recent journey:</span> 
          </p>
        </div>

        <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience: { date: string, title: string, desc: string, points: string[], icon: string, company_name: string, iconBg: string }, index: number) => (
                <VerticalTimelineElement
                  key = {index}
                  className="vertical-timeline-element--work "
                  contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                  date={<span className="dark:text-white">{experience.date}</span>}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className={`${
                        experience.company_name === 'Hart to Hart Entertainment' 
                          ? 'w-[60%] h-[60%] object-contain' 
                          : 'w-[100%] h-[100%] object-contain'
                      }`}
                                            >
                      </img>
                    </div>
                  }
                  contentStyle={{ borderBottom: '8px',
                              borderStyle: 'solid',
                              borderColor: experience.iconBg,
                              boxShadow: 'none',
                   }}
                  iconStyle={{ background: experience.iconBg }}

                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                  </div>
                  <p className='text-black-500 font-medium font-base' style= {{margin:0}}>{experience.desc}</p>
              
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point: string, index: number) => (
                      <li key={`experience-point-${index}`} className='text-black-500 font-normal pl-1 text-sm '>{point}</li>
                    ))}
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'></hr>
      <CTA />
    </section>
  )
}

export default About