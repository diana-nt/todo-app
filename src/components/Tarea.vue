<template>
  <div v-bind:class="{ 'completed': tarea.completed }">
      <p @click="markComplete">{{ tarea.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Tarea',
  props: [
      "tarea"
  ],
  methods: {
    markC
  }
}
</script>

<style scoped>

</style>