<template>
  <div class="home">
    <tareas v-bind:tareas="tareas"></tareas>
    <addTarea v-on:add-tarea="addTarea" />
  </div>
</template>

<script>
// @ is an alias to /src
import Tareas from "@/components/Tareas";
import AddTarea from "@/components/AddTarea";

export default {
  name: 'Home',
  components: {
    Tareas,
    AddTarea
  },
  data() {
    return {
      tareas: [
        {
          id: 1,
          title: 'Aprender Vue',
          completed: false
        },
        {
          id: 2,
          title: 'Lavar coche',
          completed: false
        },
        {
          id: 3,
          title: 'Pasar la aspiradora',
          completed: false
        },
        {
          id: 4,
          title: 'Hacer trabajo de clase',
          completed: false
        },
        {
          id: 5,
          title: 'Comprar impresora',
          completed: false
        }
      ],
    }
  },
  methods: {
    addTarea(nuevaTarea) {
      console.log(nuevaTarea)
      this.tareas = [...this.tareas, nuevaTarea];
    }
  }
}
</script>
