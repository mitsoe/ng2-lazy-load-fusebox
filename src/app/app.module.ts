import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CrisisListComponent,
        PageNotFoundComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }