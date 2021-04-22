<template>
  <div>
    <span class="item" :class="todoItemClass" @click="toggleItem">
      {{ todoItem.title }}
    </span>
    <button @click="remoteTodo">삭제</button>
    <!-- 
    위의 코드는 메소드 없이 바로 emit을 호출도 가능하지만...
    이 방법은 테스트 시에도 소스를 건드리게 되는 문제가 있어서 위에 메소드로 처리하는 걸 추천한다고 한다.
    <button @click="$emit('delete')">삭제</button>
    -->
  </div>
</template>

<script lang="ts">
import { Todo } from "@/App.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },

  computed: {
    //:class="todoItem.done ? 'complete' : null"
    //span 태그에 조건보다는 computed로 관리하는데 추후 복잡해지는 경우 관리가 수월해진다.
    todoItemClass(): string | null {
      return this.todoItem.done ? "complete" : null;
    },
  },

  methods: {
    toggleItem() {
      this.$emit("toggle", this.todoItem, this.index);
    },
    remoteTodo() {
      this.$emit("remove", this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
