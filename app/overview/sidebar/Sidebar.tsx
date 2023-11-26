import CompanyDecorator from "@/app/models/CompanyDecorator";
import SortDropDown from "./sorting/SortDropDown";
import LocationGroup from "./filtering/LocationGroup";

const Sidebar = (props: {
    companies: CompanyDecorator[];
    updateCompanies: (selectedCompanies: CompanyDecorator[]) => void;
    shouldSort: boolean;
    updateShouldSort: (shouldSort: boolean) => void;
}) => {
    const companies: CompanyDecorator[] = props.companies;
    const updateCompanies: (selectedCompanies: CompanyDecorator[]) => void = props.updateCompanies;
    const shouldSort: boolean = props.shouldSort;
    const updateShouldSort: (shouldSort: boolean) => void = props.updateShouldSort;

    return (
        <div className="bg-base-100 h-full p-4 w-72">
            <div className="">
                <SortDropDown
                    companies={companies}
                    updateCompanies={updateCompanies}
                    shouldSort={shouldSort}
                    updateShouldSort={updateShouldSort}
                />
            </div>
            <div className="pt-4">
                <h1 className="md:font-bold text-lg">Filter</h1>
                <p>Women in tech roles</p>
                <input type="range" min={0} max="100" value="40" className="range range-xs" readOnly />
                <p>Women in leadership</p>
                <input type="range" min={0} max="100" value="40" className="range range-xs" readOnly />
                <p>Flexible days</p>
                <input type="range" min={0} max="7" value="2" className="range range-xs" readOnly />
            </div>
            <div>
                <LocationGroup />
            </div>
        </div>
    );
};

export default Sidebar;
