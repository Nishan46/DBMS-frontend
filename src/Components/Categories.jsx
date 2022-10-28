import {React, useState} from 'react'
import {GiCheckMark} from 'react-icons/gi'
import { Languages } from './Languages'
import { useSelector , useDispatch } from 'react-redux';
import { categories } from './DomAttributes';
import axios, { AxiosError } from 'axios'
import { setLoad , newAccess} from '../Redux/AssestsSclices';

function Categories({token}) {
    const {selected_language} = useSelector((state) => state.languageChanger);
    const dispatch = useDispatch();
    const SendCategories = async (obj) =>{

        const api = axios.create({ baseURL:'/api',timeout:2000});
  
        await api.post(`/category-data/${token}`,obj).then(function (data){
          dispatch(setLoad(false));
          console.log(data);
          dispatch(newAccess(null))
  
        }).catch(function (error){
          if(error instanceof AxiosError)
          {
            dispatch(setLoad(false));
            if(error.response.status === 500 )
            {
              
              console.error('Proxy Error !')
            }
            else
            {
              console.error(error.response.data);
            }
          }
        })
    }

    const HandleSubmit = (e) =>{
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        for(var items in data)
        {
            if(data[items] === 'on')
            {
                data[items] = true
            }
        }
        SendCategories(data);
        dispatch(setLoad(true))


        
    }
    
    return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-20 flex justify-center items-center'>
        <div className='max-w-[90%] max-h-[95%] h-fit py-5 w-[500px] bg-white items-center justify-center rounded-md flex flex-col'>
            <form onSubmit={HandleSubmit} className='w-full flex items-center justify-center flex-col overflow-y-scroll'>
                {categories.map(({name , type , id})=>{
                    return(
                        <div key={id} className='Gender-field mb-2 w-[90%]'>
                            <div className='flex px-2 py-2.5 lg:py-3 relative justify-around bg-slate-50 border-slate-300 border shadow-sm rounded-md'>
                                <section className='flex items-center w-full '>
                                    <label htmlFor={id} className='rdlbl cursor-pointer text-slate-400 flex items-center relative'>
                                        <input type={type} name={name} id={id}
                                        className='checkboxcls appearance-none absolute w-5 h-5 border rounded-sm border-slate-400'/>
                                        <GiCheckMark className='text-white  p-1 absolute text-opacity-0 checkboximg scale-[0.8] w-5 h-5 bg-slate-300 rounded-sm '/>
                                    <p className='ml-2 text-sm md:text-lg relative left-5 pr-5'>{Languages[selected_language][name]} </p></label>
                                </section>
                            </div>
                        </div>
                    )
                })}
                <button className='w-[90%] py-2 bg-violet-700 text-white uppercase rounded-md font-bold text-center'>Done</button>
            </form>
        </div>
    </div>
    )
}

export default Categories