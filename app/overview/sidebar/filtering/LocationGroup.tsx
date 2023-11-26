import CompanyDecorator from "@/app/models/CompanyDecorator";
import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const LocationGroup = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    const companies = props.companies;
    const [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        companies.forEach((company) => {
            if (cities.includes(company.company.location)) {
                return;
            }
            cities.push(company.company.location);
        });
        cities.sort();
    }, []);

    return (
        <div>
            <h1 className="md:font-bold text-lg">Location</h1>
            <div className="form-control overflow-scroll h-96 bg-base-100">
                {cities.map((city) => (
                    <CheckBox label={city} value={city} onChange={() => {}} />
                ))}
            </div>
        </div>
    );
};

export default LocationGroup;
