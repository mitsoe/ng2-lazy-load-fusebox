// import { HeroListComponent } from './heroes/hero-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HeroesModule } from './heroes/heroes.module';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';

let heroesModule = require('./heroes/heroes.module');


let listCmp = require('./heroes/hero-list.component');
console.log(listCmp.HeroListComponent)

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // HeroesModule,
        heroesModule.HeroesModule
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CrisisListComponent,
        PageNotFoundComponent,
        // listCmp.HeroListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }