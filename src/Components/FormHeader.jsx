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
      <header className='from-header w-[full] h-[40vh] md:h-[80vh] md:rounded-b-2xl'>
        <div className=' md:rounded-b-2xl w-full h-full backdrop-blur-[1px] bg-black/30 flex justify-center flex-col items-center'>
          <img src={mrcLogo} className='w-1/5 md:w-[300px] mb-6'/>
          <h1 className='text-2xl xl:text-4xl text-white text-center font-bold '>Mahinda Rajapaksha College <br/>Homagama.</h1>
        </div>
      </header>
      <section className='md:h-[calc(20vh)] flex md:justify-center w-full flex-col mb-3 items-center'>
        <img src={MediaLogo} className='w-[100px] relative top-5 shadow-md'/>
        <p className='mt-[40px] text-3xl font-bold text-center'>{Languages[selected_language].welcome}</p>
        <button className='w-[100px] cursor-pointer h-[50px] outline-none hover:bg-slate-100 active:bg-violet-700 active:text-white bg-white border-2 mt-4 rounded-full shadow-md flex items-center justify-center'
        onClick={() =>{Dispatch(setLanguage(selected_language))}}
        >{selected_language}
        </button>
      </section>
      
    </div>
  )
}
export default FormHeader