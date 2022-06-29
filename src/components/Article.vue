<template>
    <li class="flex p-2 bg-zinc-100 border border-zinc-300">
        <span>{{ msg }}</span>
        <button 
        @click.prevent.stop="handleStore"
        class="mr-0 ml-auto p-1 bg-red-200 hover:bg-red-400 text-red-600 hover:text-white text-sm uppercase">Delete</button>
    </li>
</template>

<script>

import { store } from "../reactive/store";

export default {
  name: "ArticleList",
  props: {
    msg: String,
    id: Number
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleStore() {
      store.commit("deleteTodo", {
        index: this.id
      })
    }
  }
};
</script>