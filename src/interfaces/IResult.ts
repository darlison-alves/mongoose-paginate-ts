import { Model, Document } from "mongoose";

export interface IResult<T extends Document > {
    docs: Array<Model<T>>;
    total: number;
    limit: number;
    offset?: number;
    page?: number;
    pages?: number;
}