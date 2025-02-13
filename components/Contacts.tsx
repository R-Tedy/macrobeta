import React from 'react'
import { ContactsForm } from './ContactsForm'

function Contacts() {
  return (
    <section 
        className='p-4'
        id='contacts'
      >
      <h2 className='text-center subtitle_1'>Contacts</h2>
      <div className='flex flex-wrap w-10/12 mx-auto max-md:flex-col max-md:gap-4
      '>
        <div className='flex flex-col flex-1 justify-between contactText'>
          <div className='p-3 max-md:text-center'>
            <p>Tel: +254759693618</p>
            <p>Email: info@macrobeta.co.ke</p>
          </div>
          <div className='p-3 max-md:text-center'>
            <p>Macrobeta Engineering Limited</p>
            <p>P.O Box 234-0100</p>
            <p>
            Nyeri
            </p>
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <ContactsForm/>
        </div>
      </div>
    </section>
  )
}

export default Contacts