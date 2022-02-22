import Vue from "vue";
import App from "./App.vue";
import VueGapi from "vue-gapi";
// import { gapi } from "./gapi";

Vue.config.productionTip = false;

// Vue.use(VueGapi, {
//   apiKey: "AIzaSyA-3GMoiyzePFFMEXgpLkhmCxVt7fMXPr8",
//   clientId:
//     "1022323340468-71rlesatm60ud4u72bc7hng12ss5frtr.apps.googleusercontent.com",
//   discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
//   scope: "https://www.googleapis.com/auth/spreadsheets"
// });
console.log("gapi  is ", window.gapi);
async function start() {
  // 2. Initialize the JavaScript client library.
  await window.gapi.auth2.init({
    apiKey: "AIzaSyA-3GMoiyzePFFMEXgpLkhmCxVt7fMXPr8",
    clientId:
      "1022323340468-71rlesatm60ud4u72bc7hng12ss5frtr.apps.googleusercontent.com",
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: "https://www.googleapis.com/auth/spreadsheets"
  });

  // this.$gapi =
  new Vue({
    render: (h) => h(App)
  }).$mount("#app");
}
function handleClientLoad() {
  window.gapi.load("client:auth2", initClient);
}
function initClient() {
  window.gapi.client
    .init({
      apiKey: "AIzaSyA-3GMoiyzePFFMEXgpLkhmCxVt7fMXPr8",
      clientId:
        "1022323340468-71rlesatm60ud4u72bc7hng12ss5frtr.apps.googleusercontent.com",
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ],
      scope: "https://www.googleapis.com/auth/spreadsheets"
    })
    .then(
      function () {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(console.log);
        new Vue({
          render: (h) => h(App)
        }).$mount("#app");
        // Listen for sign-in state changes.
        // window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
      },
      function (error) {
        console.log("error", error);
      }
    );
}
// 1. Load the JavaScript client library.
// window.gapi.load("client:auth2", start);
handleClientLoad();
// this.$gapi =
// new Vue({
//   render: (h) => h(App)
// }).$mount("#app");
