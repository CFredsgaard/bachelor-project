import CompanyDecorator from "@/src/models/CompanyDecorator";
import CompanyCard from "./CompanyCard";
import InfoIcon from "@/src/components/InfoIcon";

const CompanyList = (props: { companies: CompanyDecorator[] }) => {
    const companies: CompanyDecorator[] = props.companies;

    if (!companies || companies.length === 0) {
        return (
            <div className="flex justify-center items-center mt-96 gap-2">
                <InfoIcon size={25} color="#00BFFF" />
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
