<template>
  <div>
    <v-card v-for="todo in allTodos" :key="todo.id">
      {{ todo.text }}
    </v-card>
  </div>
</template>

<script>
// import mapHelpers
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapGetters({
      allTodos: 'todolist/allTodos'
    })
  },
  methods: {
    ...mapActions({
      addTodo: 'todolist/addTodo'
    })
  }
}
</script>
