import { HttpParams } from '@angular/common/http';

export class Filters {
    pageNo: number = 0;
    pageSize: number = 20;
    types: string[];

    constructor(data?: Partial<Filters>) {
        Object.assign(this, data);
    }

    toParams(): HttpParams {
        let params = new HttpParams();

        Object.keys(this).forEach(key => {

            if (this[key] != undefined) {
                if (Array.isArray(this[key])) {
                    params = this[key].reduce((params, id) => params.append(`${key}`, String(id)), params);
                } else
                    params = params.append(key, String(this[key]))
            }

        })

        return params;
    }
}