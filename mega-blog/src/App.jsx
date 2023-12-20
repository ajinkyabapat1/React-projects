import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
console.log(import.meta.env.VITE_APPWRITE_URL)   // why import meta becuse project created using vite else it could be process.env
  return (
   <>
   
   </>
  )
}

export default App
