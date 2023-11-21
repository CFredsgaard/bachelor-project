import companiesJSON from "../data/companies.json";
import CompanyDecorator from "../models/CompanyDecorator";
import CompanyData from "../types/CompanyData";
import CompanyList from "./displayCompanies/CompanyList";
import Footer from "./footer/Footer";
import Header from "./header/Header";

let _companies = companiesJSON.map((company) => new CompanyDecorator(company as CompanyData));

const CompaniesOverview = () => {
    console.log("text", _companies);

    const displayedCompanies = _companies;

    return (
        <>
            <Header />
            <main className="p-4">
                <CompanyList companies={displayedCompanies} />
            </main>
            <Footer />
        </>
    );
};

export default CompaniesOverview;
