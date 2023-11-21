import companiesJSON from "../data/companies.json";
import CompanyDecorator from "../models/CompanyDecorator";
import CompanyData from "../types/CompanyData";
import CompanyList from "./displayCompanies/CompanyList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";

let _companies = companiesJSON.map((company) => new CompanyDecorator(company as CompanyData));

const CompaniesOverview = () => {
    console.log("text", _companies);

    const displayedCompanies = _companies;

    return (
        <>
            <Header />
            <div className="flex">
                <div className="">
                    <SideBar />
                </div>
                <div className="grow">
                    <main className="p-4">
                        <CompanyList companies={displayedCompanies} />
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompaniesOverview;
