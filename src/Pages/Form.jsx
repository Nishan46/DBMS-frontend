import React from 'react'
import FormBody from '../Components/FormBody'
import FormHeader from '../Components/FormHeader'
import LOADER from '../Components/LOADER'

function Form() {
  return (
    <div className='md:flex h-[100vh]'>
      <div className="header-bg relative md:flex-[0.3] w-full md:border md:shadow-xl xl:shadow-xl">
        <section className='md:absolute top-0 backdrop-blur-[1px] left-0 right-0 bottom-0 md:bg-black/40'></section>
        <FormHeader/>

      </div>
      <div className='md:flex-[0.7] w-full overflow-y-scroll relative '>
        <FormBody/>
      </div>
    </div>
  )
}

export default Form