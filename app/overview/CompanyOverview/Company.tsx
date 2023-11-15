import React from 'react'
import CompanyProps from '../interfaces/CompanyProps'


const Company = (props:{data: CompanyProps}) => {
  const data = props.data
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <figure><img src='https://picsum.photos/seed/picsum/400/200' /></figure>
        <div className='card-body'>
            <h1 className='card-title'>{data.name}</h1>
            <p>{data.username}</p>
            <p>{data.email}</p>
        </div>
    </div>
  )
}

export default Company