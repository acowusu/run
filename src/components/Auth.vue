<template>
  <div>
    <p>Google Sheets API Quickstart</p>

    <!--Add buttons to initiate auth sequence and sign out-->
    <button class="btn btn-danger" @click="login">Login</button>

    <pre id="content" style="white-space: pre-wrap"></pre>
  </div>
</template>

<script>
import { gapi } from "../gapi";
export default {
  name: "VueAuth",
  data() {
    return {
      apiKey: "AIzaSyA-3GMoiyzePFFMEXgpLkhmCxVt7fMXPr8",
      clientId:
        "1022323340468-71rlesatm60ud4u72bc7hng12ss5frtr.apps.googleusercontent.com",
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
      ],
      scope: "https://www.googleapis.com/auth/spreadsheets",
    };
  },
  methods: {
    login() {
      window.gapi.auth2.getAuthInstance().signIn();
      // this.$gapi.login().then(({ currentUser, hasGrantedScopes }) => {
      //   console.log({ currentUser, hasGrantedScopes });
      // });
    },
  },
};
</script>

<style>
</style>