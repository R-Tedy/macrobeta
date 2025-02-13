import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function layout({children}: Readonly<{children:React.ReactNode}>) {
  return (
    <main className='min-h-screen max-w-screen-xl m-auto'>
      <Navbar/>
      {children}
      <Footer/>
    </main>
  )
}

export default layout