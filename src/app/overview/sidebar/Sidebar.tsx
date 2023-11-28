import CompanyDecorator from "@/src/models/CompanyDecorator";
import SortDropDown from "./sorting/SortDropDown";
import SortOptions from "@/src/util/sortOptions";
import LocationGroup from "./filtering/LocationGroup";
import SliderGroup from "./filtering/SliderGroup";

const Sidebar = (props: {
    allCompanies: CompanyDecorator[];
    updateSortState: (sortBy: SortOptions) => void;
    updateLocationFilterState: (locations: string[]) => void;
}) => {
    const updateSortState = props.updateSortState;

    return (
        <div className="bg-base-100 h-full p-4 w-72">
            <div>
                <SortDropDown updateSortState={updateSortState} />
            </div>
            <div>
                <SliderGroup />
            </div>
            <div>
                <LocationGroup allCompanies={props.allCompanies} updateLocationFilterState={props.updateLocationFilterState} />
            </div>
        </div>
    );
};

export default Sidebar;
