<template>
  <div>
    <v-card v-for="todo in allTodos" :key="todo.id" class="pa-3 my-4">
      <v-layout row wrap align-content>
        <!-- Chekbox element -->
        <v-flex xs1>
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        </v-flex>
        <!-- Text-content element  -->
        <v-flex xs8>
          <div class="headline" :class="{done: todo.done}">
            {{ todo.text }}
          </div>
        </v-flex>
        <!-- Actions -->
        <v-flex xs3>

        </v-flex>
      </v-layout>
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
      addTodo: 'todolist/addTodo',
      toggle: 'todolist/toggle'
    })
  }
}
</script>

<style src="~/assets/elements.css"></style>
<style src="~/assets/checkbox.css"></style>
