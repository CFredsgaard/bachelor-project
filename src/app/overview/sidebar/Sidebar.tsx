import CompanyDecorator from "@/src/models/CompanyDecorator";
import SortDropDown from "./sorting/SortDropDown";
import SortOptions from "@/src/util/sortOptions";

const Sidebar = (props: { updateSortState: (sortBy: SortOptions) => void }) => {
    const updateSortState = props.updateSortState;

    return (
        <div className="bg-base-100 h-full p-4 w-72">
            <div className="">
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
            <div className="form-control pt-4">
                <h1 className="md:font-bold text-lg">Location</h1>
                <label className="label cursor-pointer justify-start space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Aalborg</span>
                </label>
                <label className="label cursor-pointer justify-start space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Aarhus</span>
                </label>
                <label className="label cursor-pointer justify-start space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Copenhagen</span>
                </label>
                <label className="label cursor-pointer justify-start space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Herning</span>
                </label>
                <label className="label cursor-pointer justify-start space-x-2">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Odense</span>
                </label>
            </div>
        </div>
    );
};

export default Sidebar;
