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
          <!-- Text section with text of the task -->
          <div
            v-show="todo !== editingTodo"
            class="headline"
            :class="{done: todo.done}"
            @dblclick="editTodo(todo, $event)">
            {{ todo.text }}
          </div>

          <!-- Editing section, active when dblclick -->
          <input
            v-show="todo === editingTodo"
            type="text"
            @change="updateText($event, todo)"
            @keyup.enter="doneEdit"
            @blur="doneEdit">
        </v-flex>
        </v-flex>
        <!-- Actions -->
        <v-flex xs3>
          <!-- Delete element chip -->
          <v-chip color="red lighten-1 white--text" @click="removeTodo(todo)">
            <v-icon>delete</v-icon>
          </v-chip>
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
      allTodos: 'todolist/allTodos',
      editingTodo: 'todolist/editingTodo'
    })
  },
  methods: {
    ...mapActions({
      addTodo: 'todolist/addTodo',
      toggle: 'todolist/toggle',
      removeTodo: 'todolist/removeTodo',
      doneEdit: 'todolist/doneEdit'
    }),
    editTodo(todo, event) {
      this.$store.commit('todolist/editTodo', todo)
      event.target.nextSibling.nextSibling.value = todo.text
    },
    updateText(event, todo) {
      this.$store.commit('todolist/updateText', {
        newText: event.target.value,
        id: todo.id
      })
    }
  }
}
</script>

<style src="~/assets/elements.css"></style>
<style src="~/assets/checkbox.css"></style>
