<template>
  <div class="todolist_app">
    <v-container>
      <v-card class="pa-4 mb-5 grey lighten-3">
        <!-- Add a new task -->
        <input type="text" class="new-todo" placeholder="Ajouter une tâche" @keyup.enter="addTodo">

        <!-- Filters - Chips above todolist -->
        <todo-filters />

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
import TodoFilters from '~/components/TodoFilters.vue'
import TodoElements from '~/components/TodoElements.vue'

export default {
  components: {
    TodoFilters,
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
