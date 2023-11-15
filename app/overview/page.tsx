import CompanyProps from './interfaces/CompanyProps'
import CompanyList from './CompanyOverview/CompanyList';
import {MongoClient} from 'mongodb';


const Screen = async () => {
    
    const mongoClient = new MongoClient(
        'mongodb+srv://admin:axIPNAl0v1kzKWso@companies.4yjlq0q.mongodb.net/Companies?retryWrites=true&w=majority'
    );
    
    const data = await mongoClient
        .db()
        .collection('Companies')
        .find()
        .toArray();

    const companies = JSON.parse(JSON.stringify(data));
    console.log("!!!", companies);

    

    return (

        <div className='p-4'>
            <CompanyList data={companies}></CompanyList>

        </div>
    );
    
    
}


export default Screen;