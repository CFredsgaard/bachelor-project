import CompanyDecorator from "@/app/models/CompanyDecorator";
import SortDropDown from "./sorting/SortDropDown";
import SliderGroup from "./filtering/SliderGroup";
import LocationGroup from "./filtering/LocationGroup";

const Sidebar = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    const companies: CompanyDecorator[] = props.companies;
    const updateCompanies: (selectedCompanies: CompanyDecorator[]) => void = props.updateCompanies;

    return (
        <div className="bg-base-200 h-full p-4 w-72">
            <div className="absolute z-30 w-full pr-8">
                <SortDropDown companies={companies} updateCompanies={updateCompanies} />
            </div>
            <div className="pt-12">
                <div className="pt-4">
                    <SliderGroup />
                </div>
                <div className="pt-4">
                    <LocationGroup />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
