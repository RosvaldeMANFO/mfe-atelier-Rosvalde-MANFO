import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeaderModule } from './app/header.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrapHeader = () => {
  platformBrowserDynamic()
    .bootstrapModule(HeaderModule)
    .catch(err => console.error(err));
};

bootstrapHeader();