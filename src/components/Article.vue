<template>
  <li class="flex p-2 bg-zinc-100 border border-zinc-300">
    <span v-if="!toggle">{{ msg }}</span>
    <div class="w-full flex space-x-1" v-if="toggle">
      <input :value="tempMsg" @input="handleChange($event)" class="w-2/3 outline-none" type="text"/>
      <button 
      @click.prevent.stop="handleEdit"
      class="w-1/4 p-1 bg-emerald-200 hover:bg-emerald-400 text-emerald-600 hover:text-white text-sm uppercase">Valider</button>
    </div>
    <div class="mr-0 ml-auto flex space-x-2">
      <button
        @click.prevent.stop="handleToggle"
        class="p-1 bg-orange-200 hover:bg-orange-400 text-orange-600 hover:text-white text-sm uppercase"
      >
        Edit
      </button>
      <button
        @click.prevent.stop="handleStore"
        class="p-1 bg-red-200 hover:bg-red-400 text-red-600 hover:text-white text-sm uppercase"
      >
        Delete
      </button>
    </div>
  </li>
</template>

<script>
import { store } from "../reactive/store";

export default {
  name: "ArticleList",
  props: {
    msg: String,
    id: Number,
  },
  data() {
    return {
      toggle: false,
      tempMsg: this.msg
    };
  },
  methods: {
    handleChange(e) {
      this.tempMsg = e.target.value
    },
    handleStore() {
      store.commit("deleteTodo", {
        index: this.id,
      });
    },
    handleEdit() {
      store.commit("editTodo", {
        index: this.id,
        value: this.tempMsg
      })
      this.toggle = false
    },
    handleToggle() {
      this.toggle = !this.toggle
    }
  },
};
</script>
