<script>

import axios from 'axios'; 


export default {
  data() {
    return {
      title: '', 
      body: '', 
      tag: ''
    }
  },
  methods: {
    submit() {
      //this.$emit('submit', this.email)
      //use axios to submit form data to node 
      
      axios.post('http://localhost:3000/add', {
        title: this.title,
        body: this.body, 
        tag: this.tag
      })

      this.$router.push('/'); 


    }
  }
}
</script>

<template>
    <div>
      <input type="text" v-model="title" placeholder="title"/><br/>
      <input type="text" v-model="body" placeholder="body"/><br/>
      <input type="text" v-model="tag" placeholder="tag"/><br/>

      <button @click="submit">Submit</button>
  </div>
</template>



<style scoped>
</style>
