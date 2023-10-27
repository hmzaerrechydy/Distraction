<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.email)
      console.log(this.email)
    }
  }
}
</script>

<template>
    <div>
      <input type="email" v-model="title" /><br/>
      <input type="email" v-model="body" /><br/>
      <input type="email" v-model="tag" /><br/>

      <button @click="submit">Submit</button>
  </div>
</template>



<style scoped>
</style>
