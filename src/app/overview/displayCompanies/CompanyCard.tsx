import InfoIcon from "@/src/components/InfoIcon";
import CompanyDecorator from "@/src/models/CompanyDecorator";

const CompanyCard = (props: { company: CompanyDecorator }) => {
    const companyDecorator = props.company;

    return (
        <div className="card card-compact min-w-[30%] m-6 bg-base-100 shadow-xl">
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
                        <div className="grid grid-flow-col auto-cols-max gap-2">
                            <p className="md:font-semibol">Tech roles</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button">
                                    <InfoIcon size={18} color="#A9A9A9" />
                                </div>
                                <div className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                                    <p>Ratio of women and men that work in a technical position within the company</p>
                                </div>
                            </div>
                        </div>
                        <p>
                            W {companyDecorator.percentageWomenInTechRoles}% | M {companyDecorator.percentageMenInTechRoles}%
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-flow-col auto-cols-max gap-2">
                            <p className="md:font-semibol">Leadership</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button">
                                    <InfoIcon size={18} color="#A9A9A9" />
                                </div>
                                <div className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                                    <p>Ratio of women and men in leadership positions within the company</p>
                                </div>
                            </div>
                        </div>
                        <p>
                            W {companyDecorator.percentageWomenInLeadership}% | M {companyDecorator.percentageMenInLeadership}%
                        </p>
                    </div>
                </div>
                <div className="flex justify-left">
                    <div>
                        <p className="md:font-semibold">Work from home days </p>
                    </div>
                    <div>
                        <p className="pl-2">{companyDecorator.company.flexibleDays}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
