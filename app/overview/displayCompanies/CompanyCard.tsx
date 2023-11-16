import CompanyProps from "../../types/CompanyProps";

const CompanyCard = (props: { company: CompanyProps }) => {
    const company = props.company;

    console.log(company);

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={company.image} alt="Company logo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{company.name}</h2>
                    <h1 className="md:font-bold text-lg">{company.location}</h1>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="md:font-semibold">Leadership</p>
                            <p>
                                W {company.womenInLeadership} | M{" "}
                                {company.menInLeadership}
                            </p>
                        </div>
                        <div>
                            <p className="md:font-semibold">Tech roles</p>
                            <p>
                                W {company.womenInTechRoles} | M{" "}
                                {company.menInTechRoles}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-left">
                        <div>
                            <p className="md:font-semibold">Flexible Days</p>
                        </div>
                        <div>
                            <p className="pl-2">{company.flexibleDays}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanyCard;
