import {React} from 'react'
import InputField from './InputField'
import {arial_photography} from '../Components/DomAttributes'
import {Languages} from '../Components/Languages'
import {useSelector} from 'react-redux'

function Arial() {

    const {selected_language} = useSelector((state) => state.languageChanger);
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
        console.log(data)
    }

    return (
    <div className='w-[90%] flex flex-col grow-0 my-5 mx-auto '>
        <form onSubmit={HandleSubmit}>    
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