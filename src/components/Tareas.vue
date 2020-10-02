<template>
  <div>
<!--    <h2>Tareas que hacer</h2>-->
    <ul>
      <li v-bind:key="tarea.id" v-for="tarea in tareas">
        <Tarea v-bind:tarea="tarea" @delete-tarea="$emit('delete-tarea', tarea.id)"/>
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