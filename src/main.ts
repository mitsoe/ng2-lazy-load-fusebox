import 'core-js/es7/reflect';
// Angular wants it
import 'zone.js/dist/zone';
// Styles
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

//enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);