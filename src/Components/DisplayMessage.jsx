import {React , useState} from 'react'
import {HiInformationCircle} from 'react-icons/hi'
import {IoIosClose} from 'react-icons/io'


function DisplayMessage({title , message}) {

  const [Show, setShow] = useState(true);

  if(Show)
  {
    return (
      <div className='cursor-pointer scale-1 fixed top-0 left-0 right-0 bottom-0 bg-black/70 flex items-center justify-center'
        >

        <section className='display-message w-[90vw] overflow-y-scroll min-h-1/3 max-h-[95vh]  flex-col flex items-center rounded-lg justify-center md:w-[40vw] xl:w-[20vw] bg-violet-800 '
        >

          <HiInformationCircle
              className='text-6xl mt-5 md:text-6xl xl:text-6xl text-white'
          />

          <h1 className='text-xl md:text-3xl xl:text-3xl mx-5 font-bold text-center uppercase text-white underline underline-offset-4 mt-3'>{title}</h1>


          <p className='text-center m-5 md:text-lg xl:text-xl text-slate-100 text-md'>{message}</p>

          <div onClick={()=>{setShow(false)}} className='txts flex items-center pb-2'>
            <IoIosClose className='clsbtn text-2xl'/><span className='clstext'>CLOSE</span>
          </div>

        </section>
      </div>
    )
  }
  else
  {
    return (
      <div className='cursor-pointer scale-0 fixed transform delay-300 top-0 left-0 right-0 bottom-0 bg-black/70 flex items-center justify-center'>

        <section className='scale-0 cursor-pointer transform ease-out duration-300 w-[90vw] min-h-1/3 h-fit  flex-col flex items-center rounded-lg justify-center md:w-[40vw] xl:w-[20vw] bg-violet-800 '>

          <HiInformationCircle
              className='text-6xl m-5 md:text-8xl xl:text-8xl text-white'
          />

          <h1 className='text-3xl md:text-4xl xl:text-4xl mx-3 font-bold text-center uppercase text-white underline underline-offset-4'>This is a quick notification</h1>

          <p className='text-center m-5 md:text-lg xl:text-xl text-slate-100 text-md'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>

        </section>
      </div>
    )
  }
}

export default DisplayMessage