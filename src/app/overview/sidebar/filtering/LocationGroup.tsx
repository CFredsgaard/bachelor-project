import CompanyDecorator from "@/src/models/CompanyDecorator";

const LocationGroup = (props: { allCompanies: CompanyDecorator[] }) => {
    return (
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
    );
};

export default LocationGroup;
