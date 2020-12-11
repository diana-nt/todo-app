<template>
  <div>
    <ul>
      <li v-bind:key="tarea.id" v-for="tarea in tareas">
        <Tarea
            :tarea="tarea"
           @completar-tarea="completarTarea"
           @delete-tarea="deleteTask(tarea)"/>
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
  ],
    methods:{
      deleteTask(task){
          console.log(task, task._id)
          this.$emit('delete-tarea', task._id)
      },
        completarTarea(tarea){
            this.$emit('completar-tarea', tarea._id)
        }
    }
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