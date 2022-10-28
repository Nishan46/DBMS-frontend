import {React , useState , useEffect} from 'react'
import { GiCheckMark } from 'react-icons/gi';
import {useSelector} from 'react-redux'
import { Languages } from './Languages';

function InputField({lblText , name , id, type ,value, error , pattern , onChange , registration , required}) {
  
  const [isError , setIsError] =  useState(false)
  const {selected_language} = useSelector((state) => state.languageChanger);
  const genders = ['male','female','other']
  const [date , setDate] = useState(value);

  if (type !== 'gender' && type !== 'checkbox' && type !== 'textarea')
  {
    if(!value){
      return (
        <div className='Text-field mb-2'>
            <label htmlFor={id}>{lblText}</label>
            <input
              {...registration(name,{required:false})}
              type={type}
              id={id} 
              name={name}
              onInvalid={(e) => {setIsError(true);}}
              required
              placeholder={lblText}
              onInput={(e) => {setIsError(false);}}
              pattern={pattern}
              autoCorrect='off'
              spellCheck='false'
              onChange={onChange}
              className='transition-shadow px-2 py-3 outline-none focus:shadow-xl bg-slate-50 border-slate-300 border shadow-sm rounded-md normal my-1 w-full'/>
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
              {...registration(name,{required:false})}
              type={type}
              id={id} 
              name={name}
              onInvalid={() => setIsError(true)}
              onInput={(e)=>{setDate(e.target.value)}}
              placeholder={lblText}
              value={date}
              required
              onChange={onChange}
              className='transition-shadow px-2 py-3 outline-none focus:shadow-xl bg-slate-50 border-slate-300 border shadow-sm rounded-md my-1 w-full'/>
              {isError &&
              <span>
                <p className=' text-red-600'>{error}</p>
              </span>}
        </div>
      )
    }
  }
  else if (type=== 'gender')
  {
    return (
      <div className='Gender-field mb-2'>
          <label htmlFor={id} className='cursor-pointer'>{lblText}</label>
          <div className='flex px-2 py-3 justify-around bg-slate-50 border-slate-300 border shadow-sm rounded-md'>
            {genders.map((gender)=>{
              return(
                <section className='flex items-center' key={gender}>
                  <input
                    {...registration(name,{required:false})}
                    name='gender' 
                    id={gender}
                    value={gender}
                    required
                    onChange={onChange}
                    onInvalid={() => setIsError(true)}
                    onInput={() => setIsError(false)}
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
  else if (type=== 'checkbox')
  {
    return(
      <div key={id} className='Gender-field mb-2 w-full'>
          <div className='flex pl-2 py-3 relative justify-around bg-slate-50 border-slate-300 border shadow-sm rounded-sm'>
              <section className='flex items-center w-full '>
                  <label htmlFor={id} className='rdlbl cursor-pointer  text-slate-400 flex items-center relative'>
                      <input
                        {...registration(name,{required:false})} type={type} name={name} id={id}
                      onChange={onChange}
                      // onInput={HandleChange}
                      className='checkboxcls appearance-none absolute w-5 h-5 border rounded-sm border-slate-400'/>
                      <GiCheckMark className='text-white  p-1 absolute text-opacity-0 checkboximg scale-[0.8] w-5 h-5 bg-slate-300 rounded-sm '/>
                  <p className='ml-2 relative left-5 pr-5'>{Languages[selected_language][name]}</p></label>
              </section>
          </div>
      </div>
    )
  }
  else if(type === 'textarea')
  {
    return(
      <div className='Text-field mb-2'>
            <label htmlFor={id}>{lblText}</label>
            <textarea
              {...registration(name,{required:false})}
              id={id}
              name={name}
              onInvalid={(e) => {setIsError(true); console.log(isError)}}
              onChange={onChange}
              placeholder={lblText}
              onInput={(e) => {setIsError(false);}}
              pattern={pattern}
              autoCorrect='off'
              required={required}
              spellCheck='false'
              className='transition-shadow px-2 py-3 outline-none focus:shadow-xl bg-slate-50 border-slate-300 border shadow-sm rounded-md normal my-1 w-full'></textarea>
              {isError &&
              <section>
                <p className=' text-red-600'>{error}</p>
              </section>}
        </div>
    )
  }
}
export default InputField 