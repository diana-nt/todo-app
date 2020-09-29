<template>
  <div class="home">
    <button v-for="tab in tabs" @click="changeTab(tab)" :key="tab">
      {{ tab }}
    </button>
    <tareas :tareas="tareasMostradas()" @delete-tarea="deleteTarea"></tareas>
    <addTarea @add-tarea="addTarea" />
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
      tabs: ['todas', 'finalizadas','pendientes' ],
      actual: 'todas',
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
      ]
    }
  },
  methods: {
    changeTab(tab){
      this.actual = tab;
    },
    tareasMostradas(){

      if (this.actual === 'finalizadas'){
        return this.tareasFinalizadas;
      }else if (this.actual === 'pendientes'){
        return this.tareasPendientes;
      }
      return this.tareas;
    },
    addTarea(nuevaTarea) {
      console.log(nuevaTarea)
      this.tareas = [...this.tareas, nuevaTarea];
    },
    deleteTarea(tareaId){
      this.tareas = this.tareas.filter(tarea => tarea.id !== tareaId);
    }
  },
  computed:{
    tareasFinalizadas(){
      return this.tareas.filter(tarea => tarea.completed === true);
    },
    tareasPendientes(){
      return this.tareas.filter(tarea => tarea.completed === false);
    }
  }
}
</script>
