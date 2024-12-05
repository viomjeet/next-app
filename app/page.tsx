import React from 'react'
import { Greet } from './components/greet'
import { Counter } from './components/counter'
function page() {
  return (
    <div className='mx-auto max-w-1xl px-6 lg:max-w-8xl lg:px-8'>
      <Greet />
      <Counter />
      <h1 className='text-6xl'>Home</h1>

    </div>
  )
}

export default page