import CompanyDecorator from "../models/CompanyDecorator";
import SortOptions from "../util/sortOptions";

type FilterMinMax = {
    min: number;
    max: number;
};

export interface ApplicationState {
    _companies: CompanyDecorator[];
    searchCompanyName: string;
    searchCompanyLocation: string;
    sortByOption: SortOptions;
    filterLocations: string[];
    filterWomenTechRoles: FilterMinMax;
    filterWomenLeadership: FilterMinMax;
    filterFlexibleDays: FilterMinMax;
    displayedCompanies: CompanyDecorator[];
}

export const initializeApplicationState = (allCompanies: CompanyDecorator[]): ApplicationState => {
    return {
        _companies: allCompanies,
        searchCompanyName: "",
        searchCompanyLocation: "",
        sortByOption: SortOptions.NONE_SELECTED,
        filterLocations: [],
        filterWomenTechRoles: { min: 0, max: 100 },
        filterWomenLeadership: { min: 0, max: 100 },
        filterFlexibleDays: { min: 0, max: 7 },
        displayedCompanies: allCompanies,
    };
};
