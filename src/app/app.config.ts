import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';

// // Factory to create TranslateHttpLoader (no arguments for older versions)
// export function createTranslateLoader(http: HttpClient): TranslateLoader {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // No need to add TranslateModule here in `appConfig`
  ]
};
