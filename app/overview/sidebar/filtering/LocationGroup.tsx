import CompanyDecorator from "@/app/models/CompanyDecorator";
import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const LocationGroup = (props: {
    companies: CompanyDecorator[];
    allCompanies: CompanyDecorator[];
    updateCompanies: (selectedCompanies: CompanyDecorator[]) => void;
}) => {
    const allCompanies = props.allCompanies;
    const companies = props.companies;

    const [locations, setLocations] = useState<string[]>([]);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const [filteredCompanies, setFilteredCompanies] = useState<CompanyDecorator[]>([]);

    useEffect(() => {
        if (locations.length === 0) {
            allCompanies.forEach((company) => {
                if (locations.includes(company.company.location)) {
                    return;
                }
                locations.push(company.company.location);
            });
            setLocations([...locations.sort()]);
        }
    }, []);

    const filterBylocation = (selectedLocations: string[]) => {
        // Display companies matching selected locations
        if (selectedLocations.length === 0) {
            console.log("filter no locations selected");
            props.updateCompanies(companies);
        } else {
            let compList: CompanyDecorator[] = [];
            allCompanies.forEach((company) => {
                //console.log("useEffect locations:", selectedLocations);
                if (selectedLocations.includes(company.company.location)) {
                    compList.push(company);
                }
            });
            props.updateCompanies([...compList]);
            setFilteredCompanies(compList);
        }
    };

    const handleCheckBoxChange = (e: any) => {
        console.log("--- event click ---");
        const city = e.target.value;
        console.log("target value: ", city);
        const isChecked = e.target.checked;

        let newLocations = [...selectedLocations];

        if (isChecked) {
            newLocations.push(city);
            filterBylocation(newLocations);
            setSelectedLocations([...newLocations]);
        } else {
            newLocations = selectedLocations.filter((c) => c !== city);
            filterBylocation(newLocations);
            setSelectedLocations([...newLocations]);
        }
        console.log("new locations:", newLocations);
        console.log("selected locations: ", selectedLocations);
    };

    return (
        <div>
            <h1 className="md:font-bold text-lg">Location</h1>
            <div className="form-control overflow-scroll h-96 bg-base-100">
                {locations.length !== 0 ? (
                    locations.map((city, index) => <CheckBox key={index} label={city} value={city} onChange={handleCheckBoxChange} />)
                ) : (
                    <p>loading...</p>
                )}
            </div>
        </div>
    );
};

export default LocationGroup;
