import { Injectable, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '', redirectTo: '/crisis-center', pathMatch: 'full' },
    {
        path: 'heroes',
        loadChildren: function () { return heroModule.HeroesModule; }
    },
    { path: '**', component: PageNotFoundComponent }
];
//Include heroes module in app.js
let heroModule = require('');
@Injectable()
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    constructor(private http: Http) {
        this.loadAngularModule();
    }

    public loadAngularModule() {
        this.http.get('heroesModule.js')
            .toPromise()
            .then(this.loadModule);
    }

    public loadModule(res: Response) {
        FuseBox.dynamic("ngModule.js", res.text());
        FuseBox.import('./ngModule.js');
        const thisModule = FuseBox.import('myAngularModule/app/heroes/heroes.module.js');
        heroModule = thisModule;
    }

    public showHero(): boolean {
        return heroModule !== undefined;
    }
}