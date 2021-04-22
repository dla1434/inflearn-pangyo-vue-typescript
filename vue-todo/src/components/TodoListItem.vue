<template>
  <div>
    <span>{{ todoItem }}</span>
    <button @click="remoteTodo">삭제</button>
    <!-- 
    위의 코드는 메소드 없이 바로 emit을 호출도 가능하지만...
    이 방법은 테스트 시에도 소스를 건드리게 되는 문제가 있어서 위에 메소드로 처리하는 걸 추천한다고 한다.
    <button @click="$emit('delete')">삭제</button>
    -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    todoItem: String,
    index: Number,
  },
  methods: {
    remoteTodo() {
      this.$emit("remove", this.index);
    },
  },
});
</script>

<style scoped></style>
