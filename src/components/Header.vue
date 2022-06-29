<template>
  <header class="w-1/2 bg-slate-600 flex flex-col p-4">
    <h1 class="text-white font-bold uppercase text-center text-xl">
      {{ msg }}
    </h1>
    <form class="flex mt-5">
      <input type="text" class="p-2 w-9/12 outline-none" v-model="value" />
      <button
        class="w-3/12 bg-emerald-400 hover:bg-emerald-500"
        @click.prevent.stop="handleStore"
      >
        Envoyer
      </button>
    </form>
  </header>
</template>

<script>
import { store } from "../reactive/store";

export default {
  name: "TopHeader",
  props: {
    msg: String,
  },
  data() {
    return {
      value: "",
      array: store.state.listArray,
    };
  },
  methods: {
    handleStore() {
      if (this.value !== "") {
        store.commit("addTodo", {
          value: this.value,
        });
        this.value = "";
      }
    },
  },
};
</script>
