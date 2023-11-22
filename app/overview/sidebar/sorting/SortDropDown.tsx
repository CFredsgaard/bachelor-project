import CompanyDecorator from "@/app/models/CompanyDecorator";
import RadioButton from "./RadioButton";

import { useState } from "react";

const SortDropDown = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    const [sortBy, setSortBy] = useState<string>("");

    enum SortOptions {
        ALPHABETICALLY = "alphabetically",
        LOCATION = "location",
        MOST_WOMEN_TECH_ROLES = "mostWomenTechRoles",
        MOST_WOMEN_LEADERSHIP = "mostWomenLeadership",
        MOST_MEN_TECH_ROLES = "mostMenTechRoles",
        MOST_MEN_LEADERSHIP = "mostMenLeadership",
    }

    // Type to map sort functions to option
    type SortFunctions = {
        [key: string]: (a: CompanyDecorator, b: CompanyDecorator) => number;
    };

    const sortFunctions: SortFunctions = {
        [SortOptions.ALPHABETICALLY]: (a, b) => a.company.name.localeCompare(b.company.name),
        [SortOptions.LOCATION]: (a, b) => a.company.location.localeCompare(b.company.location),
        [SortOptions.MOST_WOMEN_TECH_ROLES]: (a, b) => b.percentageWomenInTechRoles - a.percentageWomenInTechRoles,
        [SortOptions.MOST_WOMEN_LEADERSHIP]: (a, b) => b.percentageWomenInLeadership - a.percentageWomenInLeadership,
        [SortOptions.MOST_MEN_TECH_ROLES]: (a, b) => b.percentageMenInTechRoles - a.percentageMenInTechRoles,
        [SortOptions.MOST_MEN_LEADERSHIP]: (a, b) => b.percentageMenInLeadership - a.percentageMenInLeadership,
    };

    // Type to map the radio button sorting options label and value
    type RadioButtonSortingOptions = {
        label: string;
        value: string;
    };

    const radioButtonSortingOptions: RadioButtonSortingOptions[] = [
        { label: "Alphabetically", value: SortOptions.ALPHABETICALLY },
        { label: "Location", value: SortOptions.LOCATION },
        { label: "Most women in tech roles", value: SortOptions.MOST_WOMEN_TECH_ROLES },
        { label: "Most women in leadership", value: SortOptions.MOST_WOMEN_LEADERSHIP },
        { label: "Most men in tech roles", value: SortOptions.MOST_MEN_TECH_ROLES },
        { label: "Most men in leadership", value: SortOptions.MOST_MEN_LEADERSHIP },
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
