import React, { FC } from 'react'

import CompanyProps from '../interfaces/CompanyProps';
import Company from './Company';

const CompanyList = (props: {data: any}) => {
    
    const data:CompanyProps[] = props.data

    if (!data || data.length === 0) {
        return <div>No data available</div>; // Render a message or placeholder when data is undefined or empty
    }

    return (
        <div className='grid grid-cols-4 gap-8'>
            {data.map((company) => (
                <Company key={company.id} data={company} />
            ))}
        </div>
    )
}

export default CompanyList