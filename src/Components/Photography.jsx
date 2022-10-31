import React, {useState } from 'react'
import {photographer_data} from '../Components/DomAttributes'
import { Languages } from './Languages'
import { useSelector } from 'react-redux';
import { GiCheckMark } from 'react-icons/gi';
import DslrMirroless from './DslrMirroless';
import Arial from './Arial';
import Mobile from './Mobile';
import {setPhotographyFields} from '../Redux/AssestsSclices'
import { useDispatch } from 'react-redux';


function Photography() {
    const dispatch = useDispatch()
    const {photography_fields} = useSelector((state) => state.Assets_actions);
    const {selected_language} = useSelector((state) => state.languageChanger);

    const [Fields, setFields] = useState({
        is_dslr_mirrorless_photographer:false,is_arial_photographer:false,
        is_mobile_photographer:false
    });
    const FormHandleChange = (e) => {
        dispatch(setPhotographyFields({}))
        const frm_elements = e.currentTarget
        for (let i = 0; i < frm_elements.length; i++) {
            if(frm_elements[i].checked)
            {
                if (frm_elements[i].name === 'is_dslr_mirrorless_photographer')
                {
                    dispatch(setPhotographyFields({...photography_fields,is_dslr_mirrorless_photographer:true}))
                }
                else if (frm_elements[i].name === 'is_arial_photographer')
                {
                    dispatch(setPhotographyFields({...photography_fields,is_arial_photographer:true}))
                }
                else if (frm_elements[i].name === 'is_mobile_photographer')
                {
                    dispatch(setPhotographyFields({...photography_fields,is_mobile_photographer:true}))
                }
            }
        }
    }

    const HandleChange = (e) => {
        if(e.target.name === 'is_dslr_mirrorless_photographer')
        {
            setFields({ ...Fields,is_dslr_mirrorless_photographer:e.target.checked})
        }
        else if(e.target.name === 'is_arial_photographer')
        {
            setFields({ ...Fields,is_arial_photographer:e.target.checked})
        }
        else if(e.target.name === 'is_mobile_photographer')
        {
            setFields({ ...Fields,is_mobile_photographer:e.target.checked})
        }
    }

    return (
    <div className='xl:absolute w-full left-[15%] xl:w-[70%] xl:top-[10%] xl:max-h-[80%] xl:border xl:shadow-2xl xl:h-fit xl:rounded-2xl xl:overflow-y-scroll '>
        <h1 className='text-1xl my-5 mx-auto w-[90%] relative font-bold underline-offset-3 underline'>{Languages[selected_language].choose},</h1>
        <div className='w-[90%] flex flex-col grow-0 my-5 mx-auto '>
            <form onChange={FormHandleChange}>
                {photographer_data.map(({name , type , id }) => {
                    return(
                            <div key={id} className='Gender-field mb-2 w-full'>
                                <div className='flex pl-2 py-3 relative justify-around bg-slate-50 border-slate-300 border shadow-sm rounded-sm'>
                                    <section className='flex items-center w-full '>
                                        <label htmlFor={id} className='rdlbl cursor-pointer text-slate-400 flex items-center relative'>
                                            <input type={type} name={name} id={id}
                                            onChange={HandleChange}
                                            className='checkboxcls appearance-none w-5 h-5 border rounded-sm border-slate-400'/>
                                            <GiCheckMark className='text-white  p-1 absolute text-opacity-0 checkboximg scale-[0.8] w-5 h-5 bg-slate-300 rounded-sm '/>
                                        <p className='ml-2'>{Languages[selected_language][name]}</p></label>
                                    </section>
                                </div>
                            </div>
                        )
                    })}
            </form>
        </div>
        {Fields.is_dslr_mirrorless_photographer && <DslrMirroless/>}
        {Fields.is_arial_photographer && <Arial/>}
        {Fields.is_mobile_photographer && <Mobile/>}
    </div>
    )
}

export default Photography
