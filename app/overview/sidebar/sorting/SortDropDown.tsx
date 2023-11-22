import CompanyDecorator from "@/app/models/CompanyDecorator";
import RadioButton from "./RadioButton";
import { SortOptions } from "./sortOptions";

import { useEffect, useState } from "react";

const SortDropDown = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    const [sortedCompanies, setSortedCompanies] = useState<CompanyDecorator[]>(props.companies);
    const [sortBy, setSortBy] = useState<string>("");

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

    /** Sort the companies */
    useEffect(() => {
        if (sortBy !== "") {
            const sorted = sortedCompanies.slice().sort(sortFunctions[sortBy]);
            setSortedCompanies(sorted);
            props.updateCompanies(sorted); // Update the displayed companies
        }
    }, [props.companies, sortBy]); // Re-run the effect when props.companies or sortBy changes

    /** Radio buttons */
    // Type to map the radio button sorting options label and value
    type RadioButtonSortingOptions = {
        label: string;
        value: string;
    };

    // Array for all the radio buttons added to the UI
    const radioButtonSortingOptions: RadioButtonSortingOptions[] = [
        { label: "Alphabetically", value: SortOptions.ALPHABETICALLY },
        { label: "Location", value: SortOptions.LOCATION },
        { label: "Most women in tech roles", value: SortOptions.MOST_WOMEN_TECH_ROLES },
        { label: "Most women in leadership", value: SortOptions.MOST_WOMEN_LEADERSHIP },
        { label: "Most men in tech roles", value: SortOptions.MOST_MEN_TECH_ROLES },
        { label: "Most men in leadership", value: SortOptions.MOST_MEN_LEADERSHIP },
        { label: "Most flexible days", value: SortOptions.MOST_FLEXIBLE_DAYS },
    ];

    // Sets the sortBy option when onChange is triggered
    const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value); // Update sortBy state
    };

    return (
        <div>
            <details className="collapse collapse-arrow bg-secondary">
                <summary className="collapse-title text-m font-medium">Sort by</summary>
                <div className="collapse-content">
                    <div className="form-control">
                        {radioButtonSortingOptions.map((option) => (
                            <RadioButton
                                label={option.label}
                                name={"sorting"}
                                value={option.value}
                                onChange={handleSortOptionChange}
                            />
                        ))}
                    </div>
                </div>
            </details>
        </div>
    );
};

export default SortDropDown;
