import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import NavItem from './NavItem'
const Header = () => {
  return (
    <header className='w-full'>
      <div className='wrapper flex items-center justify-between'>
      <Link href='/' className='w-36 -mt-24'> 
  <Image
    src='/assets/images/logo.svg'
    height={32}
    width={128}
    alt='Evently logo'
    // className='translate-y-2' // Moves the image up
  />
</Link>
      </div>
    </header>
  )
}

export default Header