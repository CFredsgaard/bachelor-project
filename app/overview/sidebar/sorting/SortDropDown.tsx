import CompanyDecorator from "@/app/models/CompanyDecorator";
import RadioButton from "./RadioButton";
import { SortOptions } from "./sortOptions";

import { useEffect, useState } from "react";

const SortDropDown = (props: {
    companies: CompanyDecorator[];
    updateCompanies: (selectedCompanies: CompanyDecorator[]) => void;
    shouldSort: boolean;
    updateShouldSort: (shouldSort: boolean) => void;
}) => {
    const [sortBy, setSortBy] = useState<string>("");
    const companies: CompanyDecorator[] = props.companies;

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
        if (!props.shouldSort) {
            return;
        }
        if (sortBy === "") {
            return;
        }
        const sorted = companies.slice().sort(sortFunctions[sortBy]);
        props.updateCompanies(sorted); // Update the displayed companies
        props.updateShouldSort(false);
    }, [sortBy, props.shouldSort]); // Re-run the effect when props.shouldSort or sortBy changes

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
        {
            label: "Most women in tech roles",
            value: SortOptions.MOST_WOMEN_TECH_ROLES,
        },
        {
            label: "Most women in leadership",
            value: SortOptions.MOST_WOMEN_LEADERSHIP,
        },
        { label: "Most men in tech roles", value: SortOptions.MOST_MEN_TECH_ROLES },
        { label: "Most men in leadership", value: SortOptions.MOST_MEN_LEADERSHIP },
        { label: "Most flexible days", value: SortOptions.MOST_FLEXIBLE_DAYS },
    ];

    // Sets the sortBy option when onChange is triggered
    const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value); // Update sortBy state
        props.updateShouldSort(true);
    };

    return (
        <div>
            <details className="collapse collapse-arrow bg-secondary">
                <summary className="collapse-title text-m font-medium">Sort by</summary>
                <div className="collapse-content">
                    <div className="form-control">
                        {radioButtonSortingOptions.map((option, index) => (
                            <RadioButton
                                key={index}
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
