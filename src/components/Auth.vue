<template>
  <div>
    <p>Google Sheets API Quickstart</p>

    <!--Add buttons to initiate auth sequence and sign out-->
    <button class="btn btn-danger" @click="login" >Login</button>

    <pre id="content" style="white-space: pre-wrap;"></pre>
  </div>
</template>

<script>
export default {
  name: 'VueAuth',
  data() {
    return {
      mounted: false,
       CLIENT_ID : '<YOUR_CLIENT_ID>',
       API_KEY : '<YOUR_API_KEY>',
       DISCOVERY_DOCS : ["https://sheets.googleapis.com/$discovery/rest?version:v4"],
      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
       SCOPES : "https://www.googleapis.com/auth/spreadsheets.readonly",

    
    }
  },
  methods:{

  login() {
        this.$gapi.login().then(({ currentUser, hasGrantedScopes }) => {
          console.log({ currentUser, hasGrantedScopes })
        })
      },
      }
}
</script>

<style>

</style>