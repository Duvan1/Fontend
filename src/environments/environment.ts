// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyBC1yEfTCxBxZ8vIPcTonJGb2h8ONNdzhU",
    authDomain: "textiles-exe.firebaseapp.com",
    databaseURL: "https://textiles-exe.firebaseio.com",
    projectId: "textiles-exe",
    storageBucket: "",
    messagingSenderId: "751473655328"
  }
};
