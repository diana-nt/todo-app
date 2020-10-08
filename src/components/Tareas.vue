<template>
  <div>
    <ul>
      <li v-bind:key="tarea.id" v-for="tarea in tareas">
        <Tarea
            :tarea="tarea"
           @completar-tarea="$emit('completar-tarea', tarea.id)"
           @delete-tarea="$emit('delete-tarea', tarea.id)"/>
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

    li {
        list-style: none;
        margin-bottom: 20px;
    }

    ul{
        margin-left: 40px;
    }
</style>