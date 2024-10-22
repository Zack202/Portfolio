import React, { Suspense } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Me from '../models/Me';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


interface ImportMetaEnv {
  VITE_EMAILJS_SERVICE_ID: string;
  VITE_EMAILJS_TEMPLATE_ID: string;
  VITE_EMAILJS_PUBLIC_KEY: string;
}


declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const Contact = () => {
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })

  const {alert, showAlert, hideAlert} = useAlert()

  const [isLoading, setisLoading] = useState(false)

  const [currentAnimation, setcurrentAnimation] = useState('idle')


  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (_e: React.FocusEvent<HTMLElement>) => {

    setcurrentAnimation('gangnam')
  }

  const handleBlur = (_e: React.FocusEvent<HTMLElement>) => {
      setcurrentAnimation('idle')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setisLoading(true)
    setcurrentAnimation('salute')

    // Blur input elements
    if (nameRef.current) nameRef.current.blur();
    if (emailRef.current) emailRef.current.blur();
    if (messageRef.current) messageRef.current.blur();

    //Check for real email with regex

    if (!form.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      setisLoading(false)
      console.log('Error')
      showAlert({text: 'Please enter a valid email address, I would love to chat with you 😢', type: 'danger'})
      setcurrentAnimation('dead')
      setTimeout(() => {
        setcurrentAnimation('idle')
        hideAlert()
        setform({ name: form.name, email: '', message: form.message })
      }, 3000)

      return
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Zachary',
        from_email: form.email,
        to_email: 'zachary.m.lowinger@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false)
      showAlert({text: 'Your message has been sent successfully! I look forward to reading it! 😃', type: 'success'})
      setTimeout(() => {
        setcurrentAnimation('idle')
        hideAlert()
        setform({ name: '', email: '', message: '' })
      }, 3000)
    }).catch(() => {
      setisLoading(false)
      console.log('Error')
      showAlert({text: 'There was an error sending your message. Please try again later. 😢', type: 'danger'})
      setcurrentAnimation('dead')
      setTimeout(() => {
        setcurrentAnimation('idle')
        hideAlert()
      }, 3000)
    })
  }


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert}/>}
      {/* <Alert type='d' text='This is a test alert' /> */}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text dark:text-white'>Feel Free To
        <span className='blue-gradient_text font-semibold drop-shadow'> Contact Me </span>
         </h1>
        <form className='w-full flex flex-col gap-7 mt-14'
              onSubmit={handleSubmit}>
            <label className='text-black-500 font-semibold dark:text-slate-200'>Name
                <input type='text' 
                        name='name'
                        className='input'
                        placeholder='John Smith'
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />

            </label>
            <label className='text-black-500 font-semibold dark:text-slate-200'>Email
            <input type='text' 
                        name='email'
                        className='input'
                        placeholder='johnsmith@gmail.com'
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />
            </label>
            <label className='text-black-500 font-semibold dark:text-slate-200'>Your Message
                  <input type='text' 
                        name='message'
                        className='input'
                        placeholder='Your message here... Feel free to ask anything or just say hi!'
                        required
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />
            </label>

            <button className='btn' 
                    type='submit'
                    disabled={isLoading}>
                      {isLoading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
          <Suspense fallback={<Loader/>}>
            <Me 
              position={[0, -2.5, 0]}
              rotation={[0, 0, 0]}
              scale={[3, 3, 3]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Contact