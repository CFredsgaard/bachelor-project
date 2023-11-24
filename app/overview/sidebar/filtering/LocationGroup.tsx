import CompanyDecorator from "@/app/models/CompanyDecorator";
import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

const LocationGroup = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => any }) => {
    // Create list with city names and sort them alphabetically
    const companies: CompanyDecorator[] = props.companies;
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCities, setSelectedCities] = useState<string[]>([]);

    useEffect(() => {
        if (selectedCities.length !== 0) {
        }

        companies.forEach((company) => {
            if (cities.includes(company.company.location)) {
                return;
            }
            cities.push(company.company.location);
        });

        cities.sort();
        setCities(cities);
    }, []);

    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const cityChanged = e.target.value;

        // setSelectedCities((prevCities) => {
        //     if (!prevCities.includes(cityChanged)) {
        //         prevCities.push(cityChanged);
        //         return prevCities;
        //     } else {
        //         const arr = prevCities.filter((city) => city !== cityChanged);
        //         return arr;
        //     }
        // });

        if (selectedCities.includes(cityChanged)) {
            const arr = selectedCities.filter((city) => city !== cityChanged);
            setSelectedCities(arr);
        } else {
            selectedCities.push(cityChanged);
            setSelectedCities(selectedCities);
        }

        console.log(selectedCities);
    };

    return (
        <div>
            <h1 className="md:font-bold text-lg">Location</h1>
            <div className="form-control overflow-scroll h-96 bg-base-100">
                <div>
                    {cities.map((city) => (
                        <CheckBox label={city} value={city} onChange={handleCheckBoxChange} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationGroup;
