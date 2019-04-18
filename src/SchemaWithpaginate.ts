import { Schema, Model, Document, model } from 'mongoose'
import { IOptions } from './interfaces/IOptions';

export class SchemaWithPaginate extends Schema {
    public paginate( query: object = {}, options: IOptions, cb: Function ) {
        let select = options.select;
        let sort = options.sort;
        let populate = options.populate;
        let lean = options.lean || false;
        let leanWithId = options.leanWithId || true;
        let limit = options.limit || 10;

        let page: number, offset: number, skip: number, promises: Array<Promise<any>>;

        if(options.offset) {
            offset = options.offset;
            skip = offset;
        } else if (options.page) {
            page = options.page;
            skip = (page - 1) * limit;
        } else {
            page = 1;
            offset = 0;
            skip = offset;
        }

        if(limit) {
            //let Query = this.
        }


    }
}