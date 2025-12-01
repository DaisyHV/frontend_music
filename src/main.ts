import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { provideHttpClient, withFetch } from '@angular/common/http';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';




bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
