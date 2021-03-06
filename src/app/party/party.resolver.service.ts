import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PartiesResolver implements Resolve<any> {
    user: FirebaseObjectObservable<any>;

    constructor(private af: AngularFire) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
        const data = this.af.database.object(`/application/${localStorage.getItem('applicationId')}/parties`);
        return data.map((item) => {
            return item;
        }).first();
    }

}
