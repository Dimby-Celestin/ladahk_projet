// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  LOCAL_STORAGE_PREFIX: "f8e5c41c-d071-4d9f-9cf8-9fdaa9d5d2a2",
  DOMAIN_SCHEME: "https://",
  ENV: "dev",
  DOMAIN: "",
  API_URL: "http://192.168.1.4:8000/api/v1/",// http://localhost:8000/api/v1/",
  SERVER_URL: "",
  FILE_ENDPOINT: "http://192.168.1.4:8000",
  DATA_ENDPOINT: "http://192.168.1.4:8000",
  GOOGLE_MAPS_API_KEY: "",  
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
