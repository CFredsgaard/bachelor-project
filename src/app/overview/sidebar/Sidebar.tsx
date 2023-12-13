import CompanyDecorator from "@/src/models/CompanyDecorator";
import SortDropDown from "./sorting/SortDropDown";
import SortOptions from "@/src/util/sortOptions";
import LocationGroup from "./filtering/LocationGroup";
import SliderGroup from "./filtering/SliderGroup";
import { ApplicationState } from "@/src/types/ApplicationState";

const Sidebar = (props: {
    allCompanies: CompanyDecorator[];
    updateSortState: (sortBy: SortOptions) => void;
    updateLocationFilterState: (locations: string[]) => void;
    updateSlidersFilterState: (sliders: ApplicationState["filterSliders"]) => void;
}) => {
    return (
        <div className="bg-base-100 h-full p-4 w-72">
            <div className="absolute w-full pr-8 z-10 pt-2">
                <SortDropDown updateSortState={props.updateSortState} />
            </div>
            <div className="pt-20">
                <div>
                    <SliderGroup updateSlidersFilterState={props.updateSlidersFilterState} />
                </div>
                <div>
                    <LocationGroup allCompanies={props.allCompanies} updateLocationFilterState={props.updateLocationFilterState} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
