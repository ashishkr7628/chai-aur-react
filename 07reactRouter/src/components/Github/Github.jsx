import React,{useState,useEffect} from 'react'

function Github() {

    const[data,setData]=useState({})


    useEffect(()=>{

        fetch('https://api.github.com/users/ashishkr7628')
        .then((response)=>response.json())
        .then((data)=>{

            console.log(data);

            setData(data)
            
        })


    })


   
  return (<>
    <div>Github: {data.followers}</div>

    <img src={data.avatar_url} alt="" height={100} width={200} />
    </>
  )
}

export default Github