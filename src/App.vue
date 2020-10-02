<template>
  <div id="app">
      <h2>TAREAS QUE HACER</h2>
    <home></home>
  </div>
</template>

<script>
import Home from "@/views/Home";

export default {
  name: 'app',
  components: {
    Home,
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
    h2 {

        font-family: 'Oswald', sans-serif;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        font-size: 60px;
        text-decoration: underline;
        text-decoration-color: paleturquoise;
    }

</style>
