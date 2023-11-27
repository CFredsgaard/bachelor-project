import CompanyDecorator from "@/src/models/CompanyDecorator";
import CompanyCard from "./CompanyCard";

const CompanyList = (props: { companies: CompanyDecorator[] }) => {
    const companies: CompanyDecorator[] = props.companies;

    if (!companies || companies.length === 0) {
        return (
            <div className="flex justify-center items-center mt-96">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6 mr-2">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <span>No data matching your criteria</span>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-row flex-wrap place-content-evenly gap-4">
                {companies.map((company, index) => (
                    <CompanyCard key={index} company={company} />
                ))}
            </div>
        </>
    );
};

export default CompanyList;
