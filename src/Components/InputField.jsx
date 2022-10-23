import {React , useState} from 'react'
import {useSelector} from 'react-redux'
import { Languages } from './Languages';

function InputField({lblText , name , id, type ,value, error , pattern}) {
  
  const [isError , setIsError] =  useState(false)
  const {selected_language} = useSelector((state) => state.languageChanger);
  const genders = ['male','female','other']
  const [date , setDate] = useState(value);

  // useEffect(() => {
  //   return () => {

  //      window.addEventListener("beforeunload", function(e) {
  //      let confirmationMessage = "'It looks like you have been editing something. ";
  //      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  //    formRegistered &&   handleSubmit(e)
  //    console.log(" confirmationMessage", confirmationMessage)
  //     return confirmationMessage; //Webkit, Safari, Chrome
    
  //   });
  //  }
   
  // });
  
  if (type !== 'gender')
  {
    if(!value){
      return (
        <div className='Text-field mb-2'>
            <label htmlFor={id}>{lblText}</label>
            <input
              type={type}
              id={id} 
              name={name}
              onInvalid={(e) => {setIsError(true);}}
              required
              placeholder={lblText}
              pattern={pattern}
              autoCorrect='off'
              spellCheck='false'
              className='transition-shadow px-2 py-3 outline-none focus:shadow-xl bg-slate-50 border-slate-300 border shadow-sm rounded-md my-1 w-full'/>
              {isError &&
              <span>
                <p className=' text-red-600'>{error}</p>
              </span>}
        </div>
      )
    }
    else
    {
      return (
        <div className='Text-field mb-2'>
            <label htmlFor={id} className='cursor-pointer'>{lblText}</label>
            <input
              type={type}
              id={id} 
              name={name}
              onInvalid={() => setIsError(true)}
              onChange={(e)=>{setDate(e.target.value)}}
              placeholder={lblText}
              value={date}
              className='transition-shadow px-2 py-3 outline-none focus:shadow-xl bg-slate-50 border-slate-300 border shadow-sm rounded-md my-1 w-full'/>
              {isError &&
              <span>
                <p className=' text-red-600'>{error}</p>
              </span>}
        </div>
      )
    }
  }
  else
  {
    return (
      <div className='Gender-field mb-2'>
          <label htmlFor={id} className='cursor-pointer'>{lblText}</label>
          <div className='flex px-2 py-3 justify-around bg-slate-50 border-slate-300 border shadow-sm rounded-md'>
            {genders.map((gender)=>{
              return(
                <section className='flex items-center' key={gender}>
                  <input
                    name='gender' 
                    id={gender}
                    value={gender}
                    required
                    onInvalid={() => setIsError(true)}
                    onChange={() => setIsError(false)}
                    className='mx-2 cursor-pointer' 
                    type={'radio'}/>
                  <label
                    htmlFor={gender}
                    className='rd-lbl cursor-pointer text-slate-400'>
                    {Languages[selected_language][gender]}
                  </label>
                </section>
              )
            })}
          </div>
            {isError &&<span>
              <p className=' text-red-600'>{error}</p>
            </span>}
      </div>
    )
  }
}
export default InputField 