<template>
  <div class="hello">
    <vue-auth></vue-auth>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the

      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <p><vue-counter msg="count" ref="count" :delta="10" /></p>
    <p><vue-average msg="average" :number="5" ref="average" /></p>
    <p><vue-timer ref="timer" /></p>
    <button class="btn btn-success" v-if="!started" @click="start">
      Start!
    </button>

    <button class="btn btn-info" v-if="started" @click="lap">Lap!</button>
  </div>
</template>

<script>
import VueCounter from "./Counter.vue";
import VueAverage from "./Average.vue";
import VueTimer from "./Timer.vue";
import VueAuth from "./Auth.vue";
export default {
  name: "VueContainer",
  props: {
    msg: String,
  },
  components: {
    VueCounter,
    VueAverage,
    VueTimer,
    VueAuth,
  },
  data() {
    return {
      mounted: false,
    };
  },
  mounted() {
    this.$refs.timer.reset();
    this.mounted = true;
  },
  computed: {
    started() {
      return (
        this.mounted && (this.$refs.average.started || this.$refs.timer.started)
      );
    },
  },
  methods: {
    start() {
      this.$refs.timer.start();
    },
    lap() {
      this.$refs.count.next();

      this.$refs.average.addValue(this.$refs.timer.micros);
      this.addRecord([this.$refs.timer.micros / 1000]);
      this.$refs.timer.reset();
      this.$refs.timer.start();
    },
    async addRecord(values) {
      var body = {
        values: [values],
      };
      // this.$gapi.client.load(
      //   "https://sheets.googleapis.com/$discovery/rest?version=v4"
      // );
      console.log(window.gapi.auth2.getAuthInstance().isSignedIn.get());
      const client = window.gapi.client;
      console.log(client);
      const response = await client.sheets.spreadsheets.values.append({
        spreadsheetId: "1TPK6NMeNMkV5vwNuQSZ5tXdqRkoZSskRqEGnmzG9JIs",
        range: "A1:A1000000",
        valueInputOption: "RAW",
        resource: body,
      });

      var result = response.result;
      console.log(`${result.updates.updatedCells} cells appended.`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
