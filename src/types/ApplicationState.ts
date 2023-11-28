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
    filterSliders: {
        filterWomenTechRoles: number[];
        filterWomenLeadership: number[];
        filterFlexibleDays: number[];
    };
    displayedCompanies: CompanyDecorator[];
}

export const initializeApplicationState = (allCompanies: CompanyDecorator[]): ApplicationState => {
    return {
        _companies: allCompanies,
        searchCompanyName: "",
        searchCompanyLocation: "",
        sortByOption: SortOptions.NONE_SELECTED,
        filterLocations: [],
        filterSliders: {
            filterWomenTechRoles: [0, 100],
            filterWomenLeadership: [0, 100],
            filterFlexibleDays: [0, 7],
        },
        displayedCompanies: allCompanies,
    };
};
