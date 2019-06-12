<template>
  <div>
    <!-- TodoList Component containing the whole app -->
    <todolist />
  </div>
</template>

<script>
import Todolist from '~/components/Todolist.vue'

export default {
  components: {
    Todolist
  }
}
</script>

<style src="~/assets/general.css"></style>
