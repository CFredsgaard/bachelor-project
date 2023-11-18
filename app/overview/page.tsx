import companiesJSON from "../data/companies.json";
import CompanyDecorator from "../models/CompanyDecorator";
import CompanyData from "../types/CompanyData";
import CompanyList from "./displayCompanies/CompanyList";

let _companies = companiesJSON.map((company) => new CompanyDecorator(company as CompanyData));

const CompaniesOverview = () => {
    console.log("text", _companies);

    const displayedCompanies = _companies;

    return (
        <>
            <main className="p-4">
                <CompanyList companies={displayedCompanies} />
            </main>
        </>
    );
};

export default CompaniesOverview;
