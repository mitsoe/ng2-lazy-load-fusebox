import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '', redirectTo: '/crisis-center', pathMatch: 'full' },
    {
        path: 'heroes',
        loadChildren: () => require('myApp.js'),
    },
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