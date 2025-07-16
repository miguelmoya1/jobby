import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'jobby-5d1f6',
        appId: '1:600179747387:web:4749b72ffe4ef949684a1e',
        storageBucket: 'jobby-5d1f6.firebasestorage.app',
        apiKey: 'AIzaSyD5mAjql605YO1pB33KlTcA1JEg-ezBbI8',
        authDomain: 'jobby-5d1f6.firebaseapp.com',
        messagingSenderId: '600179747387',
        measurementId: 'G-8RND59PCB4',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFunctions(() => getFunctions()),

    ScreenTrackingService,
    UserTrackingService,
  ],
};
