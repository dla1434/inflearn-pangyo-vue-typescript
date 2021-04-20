<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">ADD</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["item"],
  methods: {
    handleInput(event: any) {
      this.$emit("input", event.target.value);
    },
    addTodo() {
      console.log("add");
      this.$emit("add");
    },
  },
});
</script>

<style scoped>
</style>