<template>
  <div v-bind:class="{ 'completed': tarea.completed }">
      <p @click="markComplete">{{ tarea.title }}</p>
    <button @click="$emit('delete-tarea', tarea.id)">Eliminar</button>
  </div>
</template>

<script>
export default {
  name: 'Tarea',
  props: [
      "tarea"
  ],
  methods: {
    markComplete(){
      this.tarea.completed = !this.tarea.completed
    }
  }
}
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>