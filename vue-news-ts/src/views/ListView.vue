<template>
  <div>
    <!-- 
    기존까지는 컴포넌트명이 케밥이었지만..이제 파스칼 형식으로 더 선호
    <list-item></list-item>
    -->
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script>
import { fetchNews } from "@/api";
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus";

export default {
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [],
    };
  },

  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response.data);
      this.newsItems = response.data;
    },
  },

  created() {
    this.fetchNewsItems();
  },
};
</script>

<style></style>
