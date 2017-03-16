import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroRoutingModule } from './heroes-routing.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule,
        BrowserModule
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: [HeroService],
    bootstrap: [HeroListComponent]
})
export class HeroesModule { }


platformBrowserDynamic().bootstrapModule(HeroesModule);