import React from 'react'
import Announcing from '../Components/Announcing'
import Categories from '../Components/Categories'
import FormBody from '../Components/FormBody'
import FormHeader from '../Components/FormHeader'
import LOADER from '../Components/LOADER'
import Photography from '../Components/Photography'
import Technical from '../Components/Technical'
import Videography from '../Components/videography'
import Reporting from '../Components/Reporting'
import PhotoEditing from '../Components/PhotoEditing'
import VideoEditing from '../Components/VideoEditing'
import GraphicDesigning from '../Components/GraphicDesigning'
import WebDeisgning from '../Components/WebDeisgning'

function Form() {
  return (
    <div className='md:flex h-[100vh]'>
      {/* <Categories/> */}
      <div className="header-bg relative md:flex-[0.3] w-full md:border md:shadow-xl xl:shadow-xl">
        <section className='md:absolute top-0 backdrop-blur-[1px] left-0 right-0 bottom-0 md:bg-black/40'></section>
        <FormHeader/>

      </div>
      <div className='md:flex-[0.7] w-full overflow-y-scroll relative'>
        {/* <FormBody/> */}
        <Photography/>
        {/* <Videography/> */}
        {/* <Technical/> */}
        {/* <Announcing/> */}
        {/* <Reporting/> */}
        {/* <PhotoEditing/> */}
        {/* <VideoEditing/> */}
        {/* <GraphicDesigning/> */}
        {/* <WebDeisgning/> */}
      </div>
    </div>
  )
}

export default Form