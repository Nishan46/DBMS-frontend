import {React} from 'react'
import InputField from './InputField'
import {member_data} from '../Components/DomAttributes'
import {Languages} from '../Components/Languages'
import {useSelector} from 'react-redux'

function FormBody() {

  const {selected_language} = useSelector((state) => state.languageChanger);
  const HandleSubmit = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()))
  }
  return (
    <div className='xl:absolute w-full left-[15%] xl:w-[70%] xl:top-[10%] xl:h-[80%] xl:border xl:shadow-2xl xl:rounded-2xl xl:overflow-y-scroll '>
        <h1 className='text-2xl my-5 mx-auto w-[90%] relative font-bold underline-offset-3 underline'>{Languages[selected_language].register},</h1>
        <div className='w-[90%] flex flex-col grow-0 my-5 mx-auto '>
            <form onSubmit={HandleSubmit}>    
                {member_data.map(({name , type , id , value , error,patern})=>{
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
                  className='w-full px-2 py-3 rounded-md shadow-sm text-white font-bold text-md'
                >REGISTER</button>
            </form>
        </div>
    </div>
  )
}
export default FormBody