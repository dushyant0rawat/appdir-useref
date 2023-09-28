import { useState,useEffect } from "react"
type toggleProps = { initialIcon: string,toggleIcon?:string,
    onClick:()=>void}
  const ToggleIcon :React.FC<toggleProps>  =  ({initialIcon,toggleIcon,onClick}) => {
  
    const [icon,setIcon] =useState(initialIcon ?? 'face-smile')
    const  handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
        if(onClick) onClick()
        if(icon===initialIcon){
          setIcon(toggleIcon ?? initialIcon)
        } else{
          setIcon(initialIcon)
        }
          
      }
    //  return heroicons
    return (
        <div className="my-auto" onClick={handleClick}>
            {
                icon==='eye' &&     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  className="w-6 h-6 stroke-blue-500 stroke-2 hover:stroke-blue-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }

            {
                icon==='eye-slash' &&  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-blue-500 stroke-2 hover:stroke-blue-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            }

            {
                icon==='user' &&   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-blue-500 stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            }

            {
                icon==='face-smile' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-blue-500 stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
              
            }
        </div>
    )
  }
  
  export default ToggleIcon;