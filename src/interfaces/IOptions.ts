export interface IOptions {
    select?: object | string;
    sort?: object | string;
    populate?: Array<object|string>|string|object;
    lean?: boolean;
    leanWithId?: boolean;
    offset?: number;
    page?: number;
    limit?: number;
}