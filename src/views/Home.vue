<template>
  <div class="home">
      <addTarea @add-tarea="addTarea" />
      <custom-select
      :options="['Tareas', 'Pendientes', 'Finalizadas']"
      default='Tareas'
      class="select"
      @input="changeTab"/>
<!--      @input="alert(displayToKey($event))"/>-->
    <tareas :tareas="tareasMostradas()" @delete-tarea="deleteTarea"></tareas>
    <button @click="ordenarTareas">Ordenar</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Tareas from "@/components/Tareas";
import AddTarea from "@/components/AddTarea";
import CustomSelect from "@/components/CustomSelect";

export default {
  name: 'Home',
  components: {
    Tareas,
    AddTarea,
      CustomSelect
  },
  data() {
    return {
      //tabs: ['todas', 'finalizadas','pendientes' ],
      actual: 'tareas',
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
      ],

    }
  },
  methods: {
    changeTab(tab){
      this.actual = tab.toLowerCase();
    },
      tareasMostradas(){
        if (this.actual === 'finalizadas'){
            return this.tareasFinalizadas
        }else if (this.actual === 'pendientes'){
            return this.tareasPendientes
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
}
</script>

<style>

</style>