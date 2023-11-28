import CompanyDecorator from "@/src/models/CompanyDecorator";
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const LocationGroup = (props: { allCompanies: CompanyDecorator[] }) => {
    const _allCompanies: CompanyDecorator[] = props.allCompanies;
    const [locations, setLocations] = useState<string[]>([]);

    useEffect(() => {
        if (locations.length === 0) {
            _allCompanies.forEach((company) => {
                if (locations.includes(company.company.location)) {
                    return;
                }
                locations.push(company.company.location);
            });
            setLocations([...locations.sort()]);
        }
    }, []);

    return (
        <div className="form-control pt-4">
            <h1 className="md:font-bold text-lg">Location</h1>
            {locations.map((location) => (
                <CheckBox label={location} value={location} onChange={() => {}} />
            ))}
        </div>
    );
};

export default LocationGroup;
