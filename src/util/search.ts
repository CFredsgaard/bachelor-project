import CompanyDecorator from "../models/CompanyDecorator";

const searchCompanies = (companies: CompanyDecorator[], companyName: string, companyLocation: string) => {
    const filteredCompanies = companies.filter(
        (company) =>
            company.company.name.toLowerCase().includes(companyName.toLowerCase()) &&
            company.company.location.toLowerCase().includes(companyLocation.toLowerCase())
    );
    return filteredCompanies;
};

export default searchCompanies;
