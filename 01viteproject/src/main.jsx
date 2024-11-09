import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return(

    <div>Hello Dude ! My Name is Ashish</div>
  )
}

const app=(
  <div>My name is Ashish Kumar</div>


)

// const nextElement= (
//   <a href="https://google.com" target='_blank'>Click here</a>
// )

const user= "My name is Karan"

const nextElement= React.createElement(

  'a',
  {href:'https://google.com',target: '_blank'},
  'click here',
  user




)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <Chai/>
  // <MyApp/>
   nextElement
)




