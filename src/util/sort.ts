import CompanyDecorator from "../models/CompanyDecorator";
import { SortOptions } from "./sortOptions";

// Type used for sort functions
type SortFunctions = {
    [key: string]: (a: CompanyDecorator, b: CompanyDecorator) => number;
};

// Object containg sort functions
const sortFunctions: SortFunctions = {
    [SortOptions.ALPHABETICALLY]: (a, b) => a.company.name.localeCompare(b.company.name),
    [SortOptions.LOCATION]: (a, b) => a.company.location.localeCompare(b.company.location),
    [SortOptions.MOST_WOMEN_TECH_ROLES]: (a, b) => b.percentageWomenInTechRoles - a.percentageWomenInTechRoles,
    [SortOptions.MOST_WOMEN_LEADERSHIP]: (a, b) => b.percentageWomenInLeadership - a.percentageWomenInLeadership,
    [SortOptions.MOST_MEN_TECH_ROLES]: (a, b) => b.percentageMenInTechRoles - a.percentageMenInTechRoles,
    [SortOptions.MOST_MEN_LEADERSHIP]: (a, b) => b.percentageMenInLeadership - a.percentageMenInLeadership,
    [SortOptions.MOST_FLEXIBLE_DAYS]: (a, b) => b.company.flexibleDays - a.company.flexibleDays,
};

const sortCompanies = (companies: CompanyDecorator[], sortBy: string) => {
    return companies.sort(sortFunctions[sortBy]);
};

export default sortCompanies;
