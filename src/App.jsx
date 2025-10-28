import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './components/Greeting'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-500">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Understanding ReactJS with Tailwind CSS 🚀
      </h1>
      <p className="text-gray-700 text-lg">
        Day 1: Learning Components and JSX
      </p>
      <Greeting />
    </div>
  )
}

export default App
