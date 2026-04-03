import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FileUpload from './components/File Upload/FileUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <FileUpload/>
    </>
  )
}

export default App
