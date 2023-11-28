import CompanyDecorator from "../models/CompanyDecorator";

interface SliderFilters {
    filterWomenTechRoles: number[];
    filterWomenLeadership: number[];
    filterFlexibleDays: number[];
}

const sliderFilterCompanies = (companies: CompanyDecorator[], sliders: SliderFilters) => {
    return companies.filter((company) => {
        const {
            percentageWomenInTechRoles,
            percentageWomenInLeadership,
            company: { flexibleDays },
        } = company;

        const isWithinWomenTechRolesRange =
            percentageWomenInTechRoles >= sliders.filterWomenTechRoles[0] &&
            percentageWomenInTechRoles <= sliders.filterWomenTechRoles[1];

        const isWithinWomenLeadershipRange =
            percentageWomenInLeadership >= sliders.filterWomenLeadership[0] &&
            percentageWomenInLeadership <= sliders.filterWomenLeadership[1];

        const isWithinFlexibleDaysRange =
            flexibleDays >= sliders.filterFlexibleDays[0] && flexibleDays <= sliders.filterFlexibleDays[1];

        return isWithinWomenTechRolesRange && isWithinWomenLeadershipRange && isWithinFlexibleDaysRange;
    });
};

export default sliderFilterCompanies;
