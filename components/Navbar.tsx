import { Navlinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className=''>
      <nav className='flex justify-between '>
        <Link href='/'>
          <Image
            src='/assets/logoB.png'
            alt='hero logo'
            width={300}
            height={100}
          />
        </Link>
        <div className='pt-4 flex-1 flex justify-center max-sm:hidden '>
          <ul className='flex gap-4 navtext'>
            {Navlinks.map((link)=>(
              <li
                key={link.label}
              >
                <Link
                  href={link.route}
                  className='hover:underline'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar