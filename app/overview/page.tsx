import CompanyProps from './interfaces/CompanyProps'
import CompanyList from './CompanyOverview/CompanyList';


const Screen = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const companies:CompanyProps[] = await response.json();

    return (
        <div className='p-4'>
            <CompanyList data={companies}></CompanyList>

        </div>
    );
    
    
}


export default Screen;