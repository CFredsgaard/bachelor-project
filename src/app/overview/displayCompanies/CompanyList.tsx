import CompanyDecorator from "@/src/models/CompanyDecorator";
import CompanyCard from "./CompanyCard";

const CompanyList = (props: { companies: CompanyDecorator[] }) => {
    const companies: CompanyDecorator[] = props.companies;

    if (!companies || companies.length === 0) {
        return <div>No data availabe</div>;
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
