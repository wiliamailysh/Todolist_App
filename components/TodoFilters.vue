<template>
  <v-layout row wrap>
    <div>Content</div>
  </v-layout>
</template>

<script>
// import mapHelpers
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      allTodosCount: 'todolist/allTodosCount',
      doneTodosCount: 'todolist/doneTodosCount',
      remainingTodosCount: 'todolist/remainingTodosCount',
      importantTodoCount: 'todolist/importantTodoCount',
      laterTodoCount: 'todolist/laterTodoCount'
    })
  }
}
</script>
