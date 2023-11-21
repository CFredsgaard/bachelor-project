import CompanyDecorator from "@/app/models/CompanyDecorator";

const CompanyCard = (props: { company: CompanyDecorator }) => {
    const companyDecorator = props.company;

    console.log(companyDecorator);

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex flex-row place-content-between">
                        <div className="self-center">
                            <h1 className="card-title text-2xl">{companyDecorator.company.name}</h1>
                            <h2 className="md:font-bold text-lg">{companyDecorator.company.location}</h2>
                        </div>

                        <figure className="self-center rounded-full">
                            <img src={companyDecorator.company.image} alt="Company logo" width={100} height={100} />
                        </figure>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="md:font-semibold">Leadership</p>
                            <p>
                                W {companyDecorator.percentageWomenInLeadership}% | M {companyDecorator.percentageMenInLeadership}%
                            </p>
                        </div>
                        <div>
                            <p className="md:font-semibold">Tech roles</p>
                            <p>
                                W {companyDecorator.percentageWomenInTechRoles}% | M {companyDecorator.percentageMenInTechRoles}%
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-left">
                        <div>
                            <p className="md:font-semibold">Flexible Days</p>
                        </div>
                        <div>
                            <p className="pl-2">{companyDecorator.company.flexibleDays}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanyCard;
