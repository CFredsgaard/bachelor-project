import CompanyDecorator from "../models/CompanyDecorator";

const locationFilterCompanies = (companies: CompanyDecorator[], locations: string[]) => {
    if (locations.length === 0) {
        return companies;
    }

    let filteredCompanies: CompanyDecorator[] = [];

    companies.forEach((company) => {
        if (locations.includes(company.company.location)) {
            filteredCompanies.push(company);
        }
    });
    return filteredCompanies;
};

export default locationFilterCompanies;
