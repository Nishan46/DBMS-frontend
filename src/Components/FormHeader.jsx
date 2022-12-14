import React from 'react'
import Logo from '../assets/logo.png'
import mrcLogo from '../assets/MRC PNG.png'
import MediaLogo from '../assets/mediaLogo.png'
import {useDispatch, useSelector} from 'react-redux'
import {setLanguage} from '../Redux/LanguageSlice'
import { Languages } from './Languages'

function FormHeader() {
  const {selected_language} = useSelector((state) => state.languageChanger);
  const Dispatch = useDispatch()
  return (
    <div> 
      <header className='from-header md:w-[90%] w-full mb-0 md:mt-[20px]  md:mx-auto h-[40vh] md:h-[50vh] md:rounded-2xl'>
        <div className=' md:rounded-2xl w-full h-full backdrop-blur-[1px] bg-black/30 md:bg-transparent flex justify-center flex-col items-center'>
          <img src={mrcLogo} className='w-1/5 md:w-[300px] mb-6'/>
          <h1 className='header-text text-1xl xl:text-4xl text-white text-center font-bold text-2xl   md:mt-10 xl:mt-30 sinhala-font'>{Languages[selected_language]['header_title']}</h1>
        </div>
      </header>
      <section className='md:h-[calc(50vh-30px)] flex md:justify-center w-full flex-col mb-3 items-center'>
        <img src={MediaLogo} className='w-[100px] relative top-5 md:w-[200px] 2xl:w-[250px]'/>
        <p className='mt-[40px] text-2xl font-bold text-center z-10 md:text-white'>{Languages[selected_language].welcome}</p>
        <button className='z-10 w-[100px] cursor-pointer h-[50px] outline-none hover:bg-slate-100 active:bg-violet-700 active:text-white bg-white border-2 mt-4 rounded-full shadow-md flex items-center justify-center'
        onClick={() =>{Dispatch(setLanguage(selected_language))}}
        >{selected_language}
        </button>
      </section>
    </div>
  )
}
export default FormHeader