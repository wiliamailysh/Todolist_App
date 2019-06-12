<template>
  <div class="todolist_app">
    <v-container>
      <h1 class="display-2 py-5 grey--text text--darken-1">
        TODOLIST
      </h1>
      <v-card class="pa-4 mb-5" color="grey lighten-3">
        <!-- Add a new task -->
        <input type="text" class="new-todo" placeholder="Ajouter une tâche" @keyup.enter="addTodo">

        <!-- Todolist elements -->
        <todo-elements />
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import mapHelpers
import { mapActions } from 'vuex'

// Import Components
import TodoElements from '~/components/TodoElements.vue'

export default {
  components: {
    TodoElements
  },
  methods: {
    ...mapActions({
      addTodo: 'todolist/addTodo'
    })
  }
}
</script>

<style src="~/assets/todolist.css"></style>
