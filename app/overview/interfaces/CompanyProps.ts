import { ObjectId } from "mongodb";

export default interface CompanyProps {
    _id: ObjectId;
    name: string;
    location: string;
    numberOfWomen: number;
    numberOfMen: number;
    flexibleDays: number;
}

