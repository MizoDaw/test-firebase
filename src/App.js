'use server'

import React, { useEffect } from 'react'
import './style/import.scss'
import Pusher from 'pusher-js'
function App() {
  // app_id = "1664780"
  // key = "d2d5ed5d54e48a1cfd45"
  // secret = "420d74e80c89209c2271"
  // cluster = "ap4"
  useEffect(()=>{
    const pusher = new Pusher('d2d5ed5d54e48a1cfd45', {
      cluster: 'ap4',
      authEndpoint:'https://api.rayantaxi.com/api/broadcasting/auth'  ,
      useTLS: true,
      auth:{
        headers:{
          Authorization:`Bearer 665|laravel_sanctum_EemMjfIQkuKJPXSEFk9Er7QaTt1i89XaLtQ9g6Lof2a6e0aa`
        }
      }


  })

  const channel  = pusher.subscribe("private-order.1")

  channel.bind('order_event' ,(data)=>{
    console.log(data)
  })
  
  },[])
  return (
    < >
       hello world 
    </>
   
  )
}

export default App
