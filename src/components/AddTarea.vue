<template>
  <div>
      <input type="text" v-model="title" name="title" placeholder="¿Qué tienes que hacer?">
      <button @click="addTarea"><font-awesome-icon icon="plus" /></button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)

export default {
  name: "AddTarea.vue",
    components: {
      FontAwesomeIcon
    },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTarea(){

      const nuevaTarea = {
        id: uuidv4(),
        title: this.title,
        completed: false,
        created_at: new Date()
      }

      this.$emit('add-tarea', nuevaTarea);
      this.title = '';
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