import {React} from 'react'
import InputField from './InputField'
import {photo_editing_data} from './DomAttributes'
import {Languages} from './Languages'
import {useSelector} from 'react-redux'
import { useForm } from 'react-hook-form'

function PhotoEditing() {

    const {register , handleSubmit} = useForm()
    const {selected_language} = useSelector((state) => state.languageChanger);
    const HandleSubmit = (e) =>{
        console.log(e)
    }

    return (
    <div className='xl:absolute w-full left-[15%] xl:w-[70%] xl:top-[10%] xl:max-h-[80%] xl:border xl:shadow-2xl xl:h-fit xl:rounded-2xl xl:overflow-y-scroll '>
    <h1 className='text-1xl my-5 mx-auto w-[90%] relative font-bold underline-offset-3 underline'>{Languages[selected_language].soft_choose},</h1>
        <div className='w-[90%] flex flex-col grow-0 my-5 mx-auto '>
            <form onSubmit={handleSubmit(HandleSubmit)}>    
                {photo_editing_data.map(({name , type , id , value , error,patern , required}) => {
                    return(
                    <div key={`${id} + 32`}>
                        <InputField
                        value={value}
                        type={type} 
                        error={error}
                        lblText={Languages[selected_language][name]}
                        name={name}
                        pattern={patern}
                        registration={register}
                        id={id}
                        required={required}
                        />
                    </div>
                    )
                })}
                <button 
                    type='submit'
                    id='submit'
                    className='w-full px-2 py-3 rounded-md shadow-sm uppercase text-white font-bold text-md'
                >{Languages[selected_language]['done']}</button>
            </form>
        </div>
    </div>
    )
}

export default PhotoEditing