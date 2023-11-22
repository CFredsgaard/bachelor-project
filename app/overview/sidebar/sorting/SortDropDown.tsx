import CompanyDecorator from "@/app/models/CompanyDecorator";
import RadioButton from "./RadioButton";

const SortDropDown = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
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

    return (
        <div>
            <details className="collapse collapse-arrow bg-secondary">
                <summary className="collapse-title text-m font-medium">Sort by</summary>
                <div className="collapse-content">
                    <div className="form-control">
                        {radioButtonSortingOptions.map((option) => (
                            <RadioButton label={option.label} name={"sorting"} value={option.value} onChange={() => {}} />
                        ))}
                    </div>
                </div>
            </details>
        </div>
    );
};

export default SortDropDown;
