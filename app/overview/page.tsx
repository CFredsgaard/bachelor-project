import companiesJSON from "../data/companies.json";
import CompanyList from "./displayCompanies/CompanyList";

const CompaniesOverview = () => {
    const companies = companiesJSON;

    //console.log(companies);

    return (
        <>
            <main className="p-4">
                <CompanyList companies={companies} />
            </main>
        </>
    );
};

export default CompaniesOverview;
