import { ColorRing } from 'react-loader-spinner'
import {React ,useEffect, useState} from 'react'


function LOADER({shows}) {

  const [show , setShow] = useState('visible')
  useEffect(()=>{
    
    if(shows){
      
      setShow('visible')
    }
    else{
      setShow('hidden')
    }
  },[shows])

  return (
    <div className='loader-container fixed z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/90' style={{visibility:`${show}`}}>
        <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        color='white'
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b81']}
        />
    </div>
  )
}

export default LOADER