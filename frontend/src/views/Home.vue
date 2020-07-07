<template>
  <div class="home">
    <h1 class="top_message">{{topMessage}}</h1>
    <ShowAll />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @/ で src/ 以下からの絶対パス
import ShowAll from "@/components/ShowAll.vue";

@Component({
  components: {
    ShowAll
  },
})
export default class Home extends Vue {
  public topMessage = "LINE BOT";
}
</script>

<style>
.top_message {
  font-size: 40px;
  text-align: center;
  margin: 20px 0px 20px 0px;
}
</style>
