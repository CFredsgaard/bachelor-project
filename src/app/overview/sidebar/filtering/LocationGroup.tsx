import CompanyDecorator from "@/src/models/CompanyDecorator";
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const LocationGroup = (props: { allCompanies: CompanyDecorator[]; updateLocationFilterState: (locations: string[]) => void }) => {
    const _allCompanies: CompanyDecorator[] = props.allCompanies;
    const [allLocations, setAllLocations] = useState<string[]>([]);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

    // Get all the locations dynamically from the campnaies in the application
    useEffect(() => {
        _allCompanies.forEach((company) => {
            if (allLocations.includes(company.company.location)) {
                return;
            }
            allLocations.push(company.company.location);
        });
        setAllLocations([...allLocations.sort()]);
    }, []);

    const handleCheckBoxChange = (e: React.ChangeEvent<any>) => {
        const location = e.target.value;
        const isChecked = e.target.checked;

        let tempLocations = selectedLocations;

        if (isChecked) {
            tempLocations.push(location);
        } else {
            tempLocations = selectedLocations.filter((l) => l !== location);
        }
        setSelectedLocations([...tempLocations]);
        props.updateLocationFilterState([...tempLocations]);
    };

    return (
        <div className="form-control pt-4">
            <h1 className="md:font-bold text-lg">Location</h1>
            <div className="form-control card card-bordered overflow-scroll h-96 bg-base-200">
                {allLocations.map((location, index) => (
                    <CheckBox key={index} label={location} value={location} onChange={handleCheckBoxChange} />
                ))}
            </div>
        </div>
    );
};

export default LocationGroup;
