<template>
<!--  <div v-bind:class="{ 'completed': tarea.completed }">-->
    <div>
<!--      <p @click="markComplete">{{ tarea.title }}</p>-->

        <label class="container">
            <input type="checkbox" @input="completar">{{ tarea.title }}
            <span class="checkmark"></span>
        </label>
    <button @click="$emit('delete-tarea', tarea.id)">Eliminar</button>
  </div>
</template>

<script>
export default {
  name: 'Tarea',
  props: [
      "tarea"
  ],
  methods: {
    completar(){
      this.tarea.completed = !this.tarea.completed
    }
  }
}
</script>

<style scoped>

  /*.completed {*/
  /*  text-decoration: line-through;*/
  /*}*/

  button{
      margin-left: 20px;
  }

  .container {
      display: inline-block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 18px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }

  .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
  }

  .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 18px;
      width: 18px;
      /*background-color: azure;*/
      border: 1px solid black;
  }

  .container:hover input ~ .checkmark {
      background-color: paleturquoise;
  }

  /*.container input:checked ~ .checkmark {*/
  /*    background-color: azure;*/
  /*}*/

  .checkmark:after {
      content: "";
      position: absolute;
      display: none;
  }

  .container input:checked ~ .checkmark:after {
      display: block;
  }

  .container .checkmark:after {
      left: 5px;
      top: 0;
      width: 5px;
      height: 10px;
      border: solid black;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
  }
</style>