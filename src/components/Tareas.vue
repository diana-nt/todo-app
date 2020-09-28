<template>
  <div>
    <h2>Mi lista de tareas</h2>
    <ul>
      <li v-bind:key="tarea.id" v-for="tarea in tareas">
        <Tarea v-bind:tarea="tarea" />
      </li>
    </ul>
  </div>
</template>

<script>
import Tarea from './Tarea';

export default {
  name: 'Tareas',
  components: {
    Tarea
  },
  props: [
      "tareas"
  ]
}
</script>

<style scoped>
</style>