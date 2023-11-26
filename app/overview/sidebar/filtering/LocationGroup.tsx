import CompanyDecorator from "@/app/models/CompanyDecorator";
import React from "react";
import CheckBox from "./CheckBox";

const LocationGroup = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    const cities = ["Aarhus", "Odense", "Copenhagen"];
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
