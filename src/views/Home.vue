<template>
  <div class="home">
      <addTarea @add-tarea="refreshList" />

      <custom-select
      :options="['Tareas', 'Pendientes', 'Finalizadas']"
      default='Tareas'
      class="select"
      @input="changeTab"/>

    <tareas
        :tareas="tareasMostradas()"
        @completar-tarea="completarTarea"
        @delete-tarea="deleteTarea"></tareas>

    <button @click="ordenarTareas">Ordenar</button>
  </div>
</template>

<script>
import Tareas from "@/components/Tareas";
import AddTarea from "@/components/AddTarea";
import CustomSelect from "@/components/CustomSelect";
// import repo from "@/services/tasks.service";
import http from '../http-common';

export default {
  name: 'Home',
  components: {
    Tareas,
    AddTarea,
      CustomSelect
  },
  data() {
    return {
      actual: 'tareas',
      tareas: [
        /*{
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
        }*/
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
      this.tareas = [...this.tareas, nuevaTarea];
    },
      /* eslint-disable no-console */
    deleteTarea(tareaId){
        let tareaIndex = this.tareas.findIndex(tarea => tarea._id === tareaId);
        http
            .delete("/task/" + this.tareas[tareaIndex]._id)
            .then(() => {
                this.tareas.splice(this.tareas[tareaIndex],1);
                this.refreshList();
                //this.$emit("refreshData");
            })
            .catch(e => {
                console.log(e);
            });
    },
    ordenarTareas(){
      return this.tareas.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    },
      /* eslint-disable no-console */
    completarTarea(tareaId){
        console.log(this.tareas)
        let tareaIndex = this.tareas.findIndex(tarea => tarea._id === tareaId);
        console.log('tareaIndex',tareaIndex)
        this.tareas[tareaIndex].completed = !this.tareas[tareaIndex].completed;
        let data = {
            completed: this.tareas[tareaIndex].completed
        };
        console.log(tareaIndex)

        http
            .put("/task/" + this.tareas[tareaIndex]._id, data)
            .then(response => {
                console.log(response.data.completed)
                // this.task.completed = response.data.completed;
                this.tareas[tareaIndex].completed = response.data.completed;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    },
  /*  async getTasksFromRepository() {
        let tasks = await repo.getTasks();
        this.$set(this, "tareas", tasks);
    }*/
      /* eslint-disable no-console */
    retrieveTasks(){
        http
            .get("/tasks")
            .then(response => {
                this.tareas = response.data;
                console.log(response.data);
            })
        .catch(e => {
            console.log(e);
        });
    },
    refreshList(){
        this.retrieveTasks();
    }
  },
  mounted() {
    this.retrieveTasks();
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

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    /*background-color: azure;*/
    border: 1px solid black;
}

</style>