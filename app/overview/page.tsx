import Link from 'next/link'
import React from 'react'

const CompaniesOverview = () => {
  return (
    <main className='grid place-items-center h-56'>
        <h1 className='text-sky-900'>
            Congratulations!!! you made it to a new page
        </h1>
        <Link href={"\."} className='btn btn-outline'>Go Back</Link>
    </main>
  )
}

export default CompaniesOverview