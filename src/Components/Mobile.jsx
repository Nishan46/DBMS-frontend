import {React} from 'react'
import InputField from './InputField'
import {mobile_photography} from './DomAttributes'
import {Languages} from './Languages'
import {useSelector , useDispatch} from 'react-redux'
import { setLoad , newAccess , visibleCategories} from '../Redux/AssestsSclices';
import axios, { AxiosError } from 'axios'
function Mobile() {
    const {access_token} = useSelector((state) => state.Assets_actions);
    const dispatch = useDispatch()
    
    const SendMobile = async (obj) =>{
        const api = axios.create({ baseURL:'/api',timeout:20000});
        await api.post(`/mobile-data/${access_token}`,obj).then(function (data){
          dispatch(setLoad(false));
          console.log(data);
          dispatch(newAccess(data.data.token))
          dispatch(visibleCategories(false))
  
        }).catch(function (error){
          if(error instanceof AxiosError)
          {
            dispatch(setLoad(false));
            if(error.response.status === 500 )
            {
                dispatch(visibleCategories(false))
                console.error('Proxy Error !')
            }
            else
            {
                dispatch(visibleCategories(false))
                console.error(error.response.data);
            }
          }
        })
    }
    const {selected_language} = useSelector((state) => state.languageChanger);
    const HandleSubmit = (e) =>{
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        SendMobile(data)
        dispatch(setLoad(true))
    }


    return (
    <div className='w-[90%] flex flex-col grow-0 my-5 mx-auto '>
        <form onSubmit={HandleSubmit}>    
            {mobile_photography.map(({name , type , id , value , error,patern}) => {
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

export default Mobile