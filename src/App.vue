<template>
  <div class="bg-slate-900 w-full min-h-screen flex flex-col items-center">
    <TopHeader msg="TodoList in Vue" />
    <div className="w-1/2 bg-white p-4">
      <ul class="flex flex-col space-y-2">
        <Article v-for="(el, index) in list" v-bind:key="index" :msg="el" :id="index"/>
      </ul>
    </div>
  </div>
</template>

<script>
import TopHeader from "./components/Header.vue";
import { store } from "./reactive/store";
import Article from "./components/Article.vue";

export default {
  name: "App",
  data() {
    return {
      list: store.state.listArray,
    };
  },
  components: {
    TopHeader,
    Article
},
};
</script>

<style></style>

