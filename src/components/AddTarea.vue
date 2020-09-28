<template>
  <div>
      <input type="text" v-model="title" name="title">
      <button @click="addTarea">Añadir</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "AddTarea.vue",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTarea(){

      const nuevaTarea = {
        id: uuidv4(),
        title: this.title,
        completed: false
      }

      this.$emit('add-tarea', nuevaTarea);
      this.title = '';
    }
  }
}
</script>

<style scoped>
</style>