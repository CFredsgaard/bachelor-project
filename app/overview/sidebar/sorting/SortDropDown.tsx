import CompanyDecorator from "@/app/models/CompanyDecorator";

const SortDropDown = (props: { companies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    return (
        <div>
            <details className="collapse collapse-arrow bg-secondary">
                <summary className="collapse-title text-m font-medium">Sort by</summary>
                <div className="collapse-content">
                    <div className="form-control"></div>
                </div>
            </details>
        </div>
    );
};

export default SortDropDown;
