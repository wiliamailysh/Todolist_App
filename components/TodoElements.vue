<template>
  <div>
    <v-card v-for="todo in filteredTodos" :key="todo.id" class="pa-3 my-4">
      <v-layout row wrap align-center>
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
            @dblclick="editTodo(todo, $event)"
          >
            {{ todo.text }}
          </div>

          <!-- Editing section, active when dblclick -->
          <input
            v-show="todo === editingTodo"
            type="text"
            class="editing-task"
            @change="updateText($event, todo)"
            @keyup.enter="doneEdit"
            @blur="doneEdit"
          >
        </v-flex>
        </v-flex>
        <!-- Actions -->
        <v-flex xs3>
          <div class="right">
            <!-- Later element chip -->
            <v-chip
              fab
              class="white--text"
              :class="{orange: todo.tag.includes('later'), grey: !todo.tag.includes('later')}"
            >
              <v-icon
                v-if="todo.tag.includes('later')"
              >
                query_builder
              </v-icon>
              <v-icon
                v-else
                @click="addTag(todo, 'later')"
              >
                query_builder
              </v-icon>
              <div v-show="todo.tag.includes('later')">
                <v-icon
                  small
                  class="ml-2"
                  @click.prevent="deleteTag(todo, 'later')"
                >
                  close
                </v-icon>
              </div>
            </v-chip>

            <!-- Important element chip -->
            <v-chip
              slot="activator"
              fab
              class="white--text"
              :class="{red: todo.tag.includes('important'), grey: !todo.tag.includes('important')}"
            >
              <v-icon
                v-if="todo.tag.includes('important')"
              >
                label_important
              </v-icon>
              <v-icon
                v-else
                @click="addTag(todo, 'important')"
              >
                label_important
              </v-icon>
              <div v-show="todo.tag.includes('important')">
                <v-icon
                  small
                  class="ml-2"
                  @click.prevent="deleteTag(todo, 'important')"
                >
                  close
                </v-icon>
              </div>
            </v-chip>
            <!-- Delete element chip -->
            <v-chip
              class="red lighten-1 white--text"
              @click="removeTodo(todo)"
            >
              <v-icon>delete</v-icon>
            </v-chip>
          </div>
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
      editingTodo: 'todolist/editingTodo',
      filteredTodos: 'todolist/filteredTodos'
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
    },
    deleteTag(todo, tag) {
      this.$store.commit('todolist/deleteTag', {
        id: todo.id,
        tagType: tag
      })
    },
    addTag(todo, tag) {
      this.$store.commit('todolist/addTag', {
        id: todo.id,
        tagToAdd: tag
      })
    }
  }
}
</script>

<style src="~/assets/elements.css"></style>
<style src="~/assets/checkbox.css"></style>
