import CompanyDecorator from "@/app/models/CompanyDecorator";
import RadioButton from "./RadioButton";

import { useState } from "react";

const SortDropDown = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    const [sortBy, setSortBy] = useState<string>("");

    // Type to map the radio button sorting options label and value
    type RadioButtonSortingOptions = {
        label: string;
        value: string;
    };

    const radioButtonSortingOptions: RadioButtonSortingOptions[] = [
        { label: "Alphabetically", value: "alphabetically" },
        { label: "Location", value: "location" },
        { label: "Most women in tech roles", value: "mostWomenTechRoles" },
        { label: "Most women in leadership", value: "mostWomenLeadership" },
        { label: "Most men in tech roles", value: "mostMenTechRoles" },
        { label: "Most men in leadership", value: "mostMenLeadership" },
    ];

    // Sets the sortBy option when onChange is triggered
    const handleSortingOptionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
                                onChange={handleSortingOptionsChange}
                            />
                        ))}
                    </div>
                </div>
            </details>
        </div>
    );
};

export default SortDropDown;
