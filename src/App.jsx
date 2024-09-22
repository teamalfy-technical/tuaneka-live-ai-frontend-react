import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NextUIProvider} from '@nextui-org/react'
import Layout from './components/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NextUIProvider>
      <Layout />
    </NextUIProvider>
    </>
  )
}

export default App
