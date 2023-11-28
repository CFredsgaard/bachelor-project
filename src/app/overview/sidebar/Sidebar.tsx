import CompanyDecorator from "@/src/models/CompanyDecorator";
import SortDropDown from "./sorting/SortDropDown";
import SortOptions from "@/src/util/sortOptions";
import LocationGroup from "./filtering/LocationGroup";

const Sidebar = (props: { updateSortState: (sortBy: SortOptions) => void }) => {
    const updateSortState = props.updateSortState;

    return (
        <div className="bg-base-100 h-full p-4 w-72">
            <div>
                <SortDropDown updateSortState={updateSortState} />
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
