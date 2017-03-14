import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';
//Include heroes module in app.js
// require('./heroes/heroes.module');
// let listCmp = require('./heroes/hero-list.component');
// console.log(listCmp.HeroListComponent)
// console.log(CrisisListComponent)

const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '', redirectTo: '/crisis-center', pathMatch: 'full' },
    // {
    //     path: 'heroes',
    //     loadChildren: 'app/heroes/heroes.module.js'
    // },
    // {
    //     path: 'heroes',
    //     // loadChildren: 'app/heroes/heroes.module.js'
    //     component: listCmp.HeroListComponent
    // },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }