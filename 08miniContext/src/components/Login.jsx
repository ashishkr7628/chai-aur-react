import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {


    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)



    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div className='text-center gap-1'>

        <h2>Login</h2>

        <input className='p-3 m-2' type="text" 
        placeholder='Enter your username'
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        />
        <input className='m-3'type="text" 
        placeholder='Enter your password'
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        />
        {" "}

        <button onClick={handleSubmit}>Submit</button>





    </div>
  )
}

export default Login