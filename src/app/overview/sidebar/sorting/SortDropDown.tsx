import RadioButton from "./RadioButton";

import { SortOptions } from "@/src/util/sortOptions";

const SortDropDown = (props: { updateSortState: (sortBy: string) => void }) => {
    const updateSortState = props.updateSortState;

    /** Radio buttons */
    // Type to map the radio button sorting options label and value
    type RadioButtonSortingOptions = {
        label: string;
        value: string;
    };

    // Array for all the radio buttons added to the UI
    const radioButtonSortingOptions: RadioButtonSortingOptions[] = [
        { label: "Company name", value: SortOptions.ALPHABETICALLY },
        { label: "Company location", value: SortOptions.LOCATION },
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
        updateSortState(e.target.value);
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
