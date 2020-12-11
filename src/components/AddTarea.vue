<template>
  <div>
      <input type="text" v-model="task.title" name="title" placeholder="¿Qué tienes que hacer?" @keyup.enter="saveTask()" v-focus>
      <button @click="saveTask(); newTask();"><font-awesome-icon icon="plus" /></button>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import repo from "@/services/tasks.service";
import http from "../http-common";

library.add(faPlus)

export default {
  name: "AddTarea.vue",
    components: {
      FontAwesomeIcon
    },
  data() {
    return {
        task: {
            id: 0,
            title: '',
            completed: false,
            created_at: new Date()
        }
    }
  },
  methods: {
   /* addTarea(){

      const nuevaTarea = {
        //id: uuidv4(),
        title: this.task.title,
        //completed: false,
        //created_at: new Date()
      }

      //repo.addTask(nuevaTarea);
        console.log(nuevaTarea)
      //this.$emit('add-tarea', nuevaTarea);
      this.task.title = '';
    },*/

      saveTask() {
        let data = {
            title: this.task.title
        };
          console.log(data)

        http
          .post("/task", data)
          .then(response => {
              // this.task.id = response.data.id;
              this.$emit('add-tarea', response.data);
              console.log(response)
              this.task.title = '';
          })
          .catch(e => {
              console.log(e);
          })
      },
      newTask(){
        this.task = {};
      }
  },
    directives: {
      focus: {
          inserted: function (el) {
              el.focus()
          }
      }
    }
}
</script>

<style scoped>

    div {
        display: flex;
        /*text-align: center;*/
        margin-left: 32%;
        padding-bottom: 20px;
    }

    input {
        background: transparent;
        border: solid 2px;
        padding: 7px 10px;
        border-right: none;
        width: 40%;
        color: black;
        border-color: black;
        font-size: 20px;
    }


    button {
        border: solid 2px;
        padding: 7px 10px;
        background: paleturquoise;
        cursor: pointer;
        width: 10%;
        color: black;
        font-size: 22px;
        text-align: center;
        vertical-align: center;
    }

</style>