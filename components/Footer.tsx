import { Navlinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-primary text-white p-8 footertext'>
      <div className='flex justify-between text-center flex-wrap max-sm:flex-col max-sm:gap-3'>
        <ul className='flex flex-col items-center gap-1 max-sm:flex-row max-sm:gap-2 max-sm:justify-center'>
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
        <div>
          <p>Tel: +254759693618</p>
          <p>Email: ifo@macrobeta.co.ke</p>
        </div>
        <div className='p-3 flex justify-center'>
          <Link
            href='/'
          >
            <Image
              src='/assets/logoA.png'
              alt='logo'
              height={50}
              width={75}
            />
          </Link>
        </div>
      </div>
      <div className='flex justify-center'>
        <p>c. Macrobeta 2025</p>
      </div>
    </footer>
  )
}

export default Footer