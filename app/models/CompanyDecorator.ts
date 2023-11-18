import CompanyData from "../types/CompanyData";

class CompanyDecorator {
    percentageWomenInLeadership: number;
    percentageWomenInTechRoles: number;
    percentageMenInLeadership: number;
    percentageMenInTechRoles: number;
    company: CompanyData;

    constructor(company: CompanyData) {
        this.company = company;
        // Leadership percentages
        const totalLeadership = company.menInLeadership + company.womenInLeadership;
        this.percentageMenInLeadership = Math.round((company.menInLeadership / totalLeadership) * 100);
        this.percentageWomenInLeadership = Math.round((company.womenInLeadership / totalLeadership) * 100);

        // Tech roles percentages
        const totalTechRoles = company.menInTechRoles + company.womenInTechRoles;
        this.percentageMenInTechRoles = Math.round((company.menInTechRoles / totalTechRoles) * 100);
        this.percentageWomenInTechRoles = Math.round((company.womenInTechRoles / totalTechRoles) * 100);
    }
}

export default CompanyDecorator;
