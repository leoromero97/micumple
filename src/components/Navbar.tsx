import React from 'react'
import Button from './Button'

export default function NavBar() {
  return (
    <nav className='flex flex-row flex-wrap-reverse sm:flex-wrap w-full justify-between gap-2 items-center'>
      <h1 className='sm:text-2xl sm:font-medium md:font-semibold'>El cumple de Leo Romero 🥳</h1>
      <Button text='Confirmar asistencia' variant='primary' />
    </nav>
  )
}
