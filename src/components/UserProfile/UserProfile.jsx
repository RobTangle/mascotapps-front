import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import React from 'react'

export default function UserProfile() {
  return (
    <div className='flex flex-col items-center w-full h-full '>
        <Navbar/>
        <div className='grid md:grid-cols-3 gap-2 items-center justify-center content-center w-full px-4  max-h-fit ' >
            <div className='md:col-span-3 h-36 text-center flex content-center items-center justify-center'>
                <p className='text-4xl font-semibold uppercase text-teal-600'>Mi perfil de usuario</p>
            </div>
            <div className='w-52 h-52 rounded-full overflow-hidden mx-auto'>
                <img className='object-cover w-full h-full object-center' src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1661533949/cld-sample.jpg" alt="" />
            </div>
            <div className=' h-full md:min-h-[200px] py-2 px-6'>
                <p className='text-xl font-semibold text-teal-800'>Mis datos de registro</p>
                <div className='bg-teal-800 w-7 h-1'></div>
                <p className='text-teal-900'>Nombre</p>
                <p className='text-teal-900'>Email</p>
            </div>
            <div className=' md:min-h-[200px] h-full py-2 px-6'>
                <p className='text-xl font-semibold text-teal-800'>Mis datos de contacto</p>
                <div className='bg-teal-800 w-7 h-1'></div>
                <p className='text-teal-900'>Celular</p>
                <p className='text-teal-900'>Email</p>
                <p className='text-teal-900'>Zona</p>
            </div>   
            <div className='flex flex-col w-full items-start justify-center gap-3 my-6 px-4  md:flex-row md:justify-center md:col-span-3'>
                <Link to="/" className='px-6 py-3  bg-[#ffd803] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300' >Perdí mi mascota</Link>
                <Link to="/" className='px-6 py-3  bg-[#ffd803] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300'>Encontré una mascota</Link>
                <Link to="/" className='px-6 py-3  bg-[#ffd803] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300'>Dar en adopción</Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

