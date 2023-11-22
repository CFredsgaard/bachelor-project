import CompanyDecorator from "@/app/models/CompanyDecorator";
import SortDropDown from "./sorting/SortDropDown";

const Sidebar = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    const companies: CompanyDecorator[] = props.companies;
    const updateCompanies: (selectedCompanies: CompanyDecorator[]) => void = props.updateCompanies;

    return (
        <div className="bg-base-100 h-full p-4">
            <div>
                <SortDropDown companies={companies} updateCompanies={updateCompanies} />
            </div>
            <div>
                <h1 className="md:font-bold text-lg">Sort by</h1>
                <p>Alphabeticaly</p>
                <p>Location</p>
                <p>Most women in tech roles</p>
                <p>Most women in leadership</p>
                <p>Most men in tech roles</p>
                <p>Most men in leadership</p>
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
