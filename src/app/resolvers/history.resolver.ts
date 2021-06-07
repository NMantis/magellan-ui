import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HistoryService } from "../services/user/history.service";

@Injectable({
    providedIn: 'root'
})
export class HistoryResolver implements Resolve<any> {
    
    constructor(protected historyService: HistoryService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | any {
       //  const id = route.paramMap.get('stage_id') || '';

        return this.historyService.show();
    }
}