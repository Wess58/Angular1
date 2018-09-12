import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
              // We bootstrap an Angular Application in the main.ts file.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
