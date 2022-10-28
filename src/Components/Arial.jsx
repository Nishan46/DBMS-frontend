import {React} from 'react'
import InputField from './InputField'
import {arial_photography} from '../Components/DomAttributes'
import {Languages} from '../Components/Languages'
import {useSelector} from 'react-redux'
import { useForm } from 'react-hook-form'

function Arial() {

    const {register , handleSubmit} = useForm()
    const {selected_language} = useSelector((state) => state.languageChanger);
    const HandleSubmit = (e) =>{
        console.log(e)
    }

    return (
    <div className='w-[90%] flex flex-col grow-0 my-5 mx-auto '>
        <form onSubmit={handleSubmit(HandleSubmit)}>    
            {arial_photography.map(({name , type , id , value , error,patern}) => {
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
    )
}

export default Arial