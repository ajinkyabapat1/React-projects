import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-grad from-black z-10'>
      <img className='w-44' src={LOGO} alt='netflix logo'/>
    </div>
  )
}

export default Header
