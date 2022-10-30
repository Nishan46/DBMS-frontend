import {React} from 'react'
import InputField from './InputField'
import {member_data} from '../Components/DomAttributes'
import {Languages} from '../Components/Languages'
import {useSelector} from 'react-redux'
import axios, { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'
import { setLoad , newAccess , visibleCategories } from '../Redux/AssestsSclices'

function FormBody() {
  const dispatch = useDispatch()
  const Register = async (obj) =>{
      const api = axios.create({ baseURL:'/api',timeout:20000});

      await api.post('/member-data',obj).then(function (data){
        dispatch(setLoad(false));
        if(data.status === 202)
        {
          dispatch(newAccess(data.data.token))
          dispatch(visibleCategories(true))
        }

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
  const {selected_language} = useSelector((state) => state.languageChanger);
  const HandleSubmit = (e) =>{
    e.preventDefault();
    dispatch(setLoad(true))
    const data = Object.fromEntries(new FormData(e.target).entries());
    Register(data)
    
  }
  return (
    <div className='xl:absolute w-full left-[15%] xl:w-[70%] xl:top-[10%] xl:h-[80%] xl:border xl:shadow-2xl xl:rounded-2xl xl:overflow-y-scroll '>
        <h1 className='text-1xl my-5 mx-auto w-[90%] relative font-bold underline-offset-3 underline'>{Languages[selected_language].register},</h1>
        <div className='w-[90%] flex flex-col grow-0 my-5 mx-auto '>
            <form onSubmit={HandleSubmit}>    
                {member_data.map(({name , type , id , value , error,patern}) => {
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
                >{Languages[selected_language]['register']}</button>
            </form>
        </div>
    </div>
  )
}
export default FormBody