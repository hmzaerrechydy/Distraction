<script>
import itemsObj from "../../../backend/db.json"; 

export default {
  data() {
    return {
      items: itemsObj.items,
    };
  },
};

</script>

<template>
  <a href="/add">Add</a>

  <ul>
    <li v-for="item in items" :key="item.title">
      <h3>{{item.title}}</h3>
      <p>{{item.body}}</p>
      <strong>Tag: {{item.tag}}</strong>
    </li>
  </ul>

</template>

<style scoped>
</style>
