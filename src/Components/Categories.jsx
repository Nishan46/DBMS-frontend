import {React, useState} from 'react'
import {GiCheckMark} from 'react-icons/gi'
import {useForm} from 'react-hook-form'

function Categories({CategoriItems}) {

    const HandleSubmit = (data) =>{

        for(var items in data)
        {
            if(data[items] === true)
            {
                console.log(data)
                return;
            }
        }
        console.log('wadak na bn')
        
    }
    const {register , handleSubmit} = useForm()
    const ado = ['a','b','c','d','e']
    return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-20 flex justify-center items-center'>
        <div className='max-w-[90%] max-h-[95%] h-fit py-5 w-[500px] bg-white items-center justify-center rounded-sm flex flex-col'>
            <form onSubmit={handleSubmit(HandleSubmit)} className='w-full flex items-center justify-center flex-col overflow-y-scroll'>
                {ado.map((items)=>{
                    return(
                        <div key={items} className='Gender-field mb-2 w-[90%]'>
                            <div className='flex px-2 py-3 relative justify-around bg-slate-50 border-slate-300 border shadow-sm rounded-sm'>
                                <section className='flex items-center w-full '>
                                    <label htmlFor={items} className='rdlbl cursor-pointer text-slate-400 flex items-center relative'>
                                        <input type={'checkbox'} name={items} id={items}
                                        {...register(`${items}` , {required:false})}
                                        className='checkboxcls appearance-none w-5 h-5 border rounded-sm border-slate-400'/>
                                        <GiCheckMark className='text-white  p-1 absolute text-opacity-0 checkboximg scale-[0.8] w-5 h-5 bg-slate-300 rounded-sm '/>
                                    <p className='ml-2'>Photography</p></label>
                                </section>
                            </div>
                        </div>
                    )
                })}
                <button className='w-[90%] py-2 bg-violet-700 text-white uppercase rounded-sm font-bold text-center'>Done</button>
            </form>
        </div>
    </div>
    )
}

export default Categories