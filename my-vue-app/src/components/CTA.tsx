import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text dark:text-white'>Have a project in mind or <br/>just want to reach out? 
        <br className='sm:block hidden' />
        Send me a message!
        </p>
        <Link to='/contact' className='btn btn-hover' >Get in touch</Link>
    </section>
  )
}

export default CTA