<template>
  <div class="home">
      <addTarea @add-tarea="addTarea" />
    <button v-for="tab in tabs" @click="changeTab(tab)" :key="tab">
      {{ tab | capitalizar }}
    </button>
    <tareas :tareas="tareasMostradas()" @delete-tarea="deleteTarea"></tareas>
    <button @click="ordenarTareas">Ordenar</button>
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
          completed: false,
          created_at: new Date('2017-06-01')
        },
        {
          id: 2,
          title: 'Lavar coche',
          completed: false,
          created_at: new Date('2018-04-23')
        },
        {
          id: 3,
          title: 'Pasar la aspiradora',
          completed: false,
          created_at: new Date('2019-11-30')
        },
        {
          id: 4,
          title: 'Hacer trabajo de clase',
          completed: false,
          created_at: new Date('2019-02-10')
        },
        {
          id: 5,
          title: 'Comprar impresora',
          completed: false,
          created_at: new Date('2004-08-13')
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
    },
    ordenarTareas(){
      return this.tareas.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))

    }
  },
  computed:{
    tareasFinalizadas(){
      return this.tareas.filter(tarea => tarea.completed === true);
    },
    tareasPendientes(){
      return this.tareas.filter(tarea => tarea.completed === false);
    }
  },
  filters: {
    capitalizar(contenido) {
      return contenido.substring(0, 1).toUpperCase() + contenido.substring(1, contenido.length);
    }
  }
}
</script>

<style>


</style>