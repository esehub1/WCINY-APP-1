// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SharedModule } from './app/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { of } from 'rxjs';
import { BjAvatarComponent } from './app/bj-avatar/bj-avatar.component';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Provide common testing modules and stub native providers globally so specs
// that rely on HttpClient, Router or native plugins get basic providers.
beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      FormsModule,
      ReactiveFormsModule,
      IonicModule.forRoot(),
      SharedModule
    ],
    providers: [
      { provide: NavController, useValue: {} },
      { provide: FCM, useValue: {} },
      { provide: SocialSharing, useValue: {} },
      // NativeGeocoder: return a default location array with latitude/longitude
      { provide: NativeGeocoder, useValue: { forwardGeocode: (opts?: any) => Promise.resolve([{ latitude: 0, longitude: 0 }]) } },
      // SQLite: create() returns a Promise that resolves to a db-like object with executeSql and rows shape
      { provide: SQLite, useValue: {
        create: () => Promise.resolve({
          executeSql: (sql: string, params?: any[]) => Promise.resolve({ rows: { length: 0, item: (i: number) => null } }),
          transaction: (cb: any) => {
            try { cb({ executeSql: (sql: string, params: any[], success?: any) => { if (success) success(null, { rows: { length: 0, item: () => null } }); } }); } catch (e) { }
          }
        })
      } },
      { provide: LaunchNavigator, useValue: {} },
      // Storage: simple promise-based mock
      { provide: Storage, useValue: { get: (k: any) => Promise.resolve(null), set: (k: any, v: any) => Promise.resolve(v), remove: (k: any) => Promise.resolve() } },
      { provide: InAppBrowser, useValue: {} },
      { provide: Calendar, useValue: {} },
      { provide: NativeStorage, useValue: {} },
      // ActivatedRoute: provide snapshot.paramMap.get and default data.special to avoid undefined reads
      { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (k: string) => null }, params: {}, data: { special: { body: null, title: '', content: '', introtext: '', images: { imageLarge: '' }, event_date: '2025-01-01', event_time: '12:00' } } }, params: of({}), queryParams: of({}), data: of({ special: { body: null, title: '', content: '', introtext: '', images: { imageLarge: '' }, event_date: '2025-01-01', event_time: '12:00' } }) } },
      // Router: mock for navigation/state and routerLink usage (createUrlTree, events)
      { provide: Router, useValue: { navigate: (args: any) => Promise.resolve(true), getCurrentNavigation: () => ({ extras: { state: {} } }), createUrlTree: (args?: any) => ({}), events: of({ url: '' }), serializeUrl: (u: any) => '' } },
      // SplashScreen: provide a spy for hide() so specs that expect a spy pass
      { provide: SplashScreen, useValue: { hide: (window as any).jasmine ? (window as any).jasmine.createSpy('hide') : (() => {}) } }
    ]
  });
  // Provide a minimal google.maps stub to avoid ReferenceError in components using Google Maps
  try {
    (window as any).google = (window as any).google || { maps: {} };
    if (!(window as any).google.maps.LatLng) {
      (window as any).google.maps.LatLng = function(lat: any, lng: any) { this.lat = function() { return lat; }; this.lng = function() { return lng; }; };
    }
  } catch (e) { }

  // Prevent BjAvatarComponent from throwing when tests create components without inputs
  try {
    if (BjAvatarComponent && BjAvatarComponent.prototype) {
      BjAvatarComponent.prototype.getAvatar = function() { return; };
    }
  } catch (e) { }
});
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
