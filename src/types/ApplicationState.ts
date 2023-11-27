import CompanyDecorator from "../models/CompanyDecorator";

interface FilterWomenTechRoles {
    min: number;
    max: number;
}

interface FilterWomenLeadership {
    min: number;
    max: number;
}

interface FilterFlexibleDays {
    min: number;
    max: number;
}

export interface ApplicationState {
    companies: any[];
    searchCompanyName: string;
    searchCompanyLocation: string;
    sortByOption: string;
    filterLocations: string[];
    filterWomenTechRoles: FilterWomenTechRoles;
    filterWomenLeadership: FilterWomenLeadership;
    filterFlexibleDays: FilterFlexibleDays;
    displayedCompanies: any[];
}

export const initializeApplicationState = (allCompanies: CompanyDecorator[]): ApplicationState => {
    return {
        companies: [],
        searchCompanyName: "",
        searchCompanyLocation: "",
        sortByOption: "",
        filterLocations: [],
        filterWomenTechRoles: { min: 0, max: 100 },
        filterWomenLeadership: { min: 0, max: 100 },
        filterFlexibleDays: { min: 0, max: 5 },
        displayedCompanies: [],
    };
};
