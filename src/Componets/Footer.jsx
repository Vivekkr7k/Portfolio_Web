import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
         <Layout className='py-8 flex items-center justify-between lg:flex-col lg:p-6'>
            <span>{new Date().getFullYear()} &copy; All rights reserved</span>
            <div className='flex items-center lg:my-2'>
             Build with <span className='text-primary text-2xl dark:text-red-600 px-1 '>&#9825;</span>by&nbsp;<Link href="/" className='underline underline-offset-2'>Vivek kumar</Link>
            </div>
            
            <Link href="/" className='underline underline-offset-2'>Say hello</Link>
         </Layout>
   </footer>
  )
}

export default Footer
