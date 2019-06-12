<template>
  <div>
    <!-- "How to use it ?" section -->
    <manual />
    <!-- TodoList Component containing the whole app -->
    <todolist />
  </div>
</template>

<script>
import Todolist from '~/components/Todolist.vue'
import Manual from '~/components/Manual.vue'

export default {
  components: {
    Todolist,
    Manual
  }
}
</script>

<style src="~/assets/general.css"></style>
