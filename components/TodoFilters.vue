<template>
  <v-layout row wrap justify-space-between class="my-4">
    <v-flex xs6>
      <v-chip
        v-show="allTodosCount > remainingTodosCount && allTodosCount !== doneTodosCount"
        class="red white--text"
        :class="[filter === 'all' ? ['activeFilter', 'elevation-10'] : '']"
        @click="changeFilter('all')"
      >
        <v-avatar
          class="red darken-4"
        >
          {{ allTodosCount }}
        </v-avatar>
        <span>Toutes</span>
      </v-chip>

      <v-chip
        v-show="remainingTodosCount > 0"
        class="green white--text"
        :class="[filter === 'todo' ? ['activeFilter', 'elevation-10'] : '']"
        @click="changeFilter('todo')"
      >
        <v-avatar
          class="green darken-4"
        >
          {{ remainingTodosCount }}
        </v-avatar>
        <span>À faire</span>
      </v-chip>

      <v-chip
        v-show="doneTodosCount > 0"
        class="orange white--text"
        :class="[filter === 'done' ? ['activeFilter', 'elevation-10'] : '']"
        @click="changeFilter('done')"
      >
        <v-avatar
          class="orange darken-4"
        >
          {{ doneTodosCount }}
        </v-avatar>
        <span>Faites</span>
      </v-chip>
      <v-chip
        v-show="doneTodosCount > 0"
        class="grey white--text"
        @click="removeDoneTodos"
      >
        <span>Supprimer les tâches finies</span>
      </v-chip>
    </v-flex>
    <v-flex xs6>
      <div class="right">
        <v-chip
          v-show="laterTodoCount > 0"
          class="orange lighten-1 white--text"
          :class="[filter === 'later' ? ['activeFilter', 'elevation-10'] : '']"
          @click="changeFilter('later')"
        >
          <v-avatar
            class="orange darken-4"
          >
            {{ laterTodoCount }}
          </v-avatar>
          <span>Later</span>
        </v-chip>
        <v-chip
          v-show="importantTodoCount > 0"
          class="red lighten-1 white--text"
          :class="[filter === 'important' ? ['activeFilter', 'elevation-10'] : '']"
          @click="changeFilter('important')"
        >
          <v-avatar
            class="red darken-4"
          >
            {{ importantTodoCount }}
          </v-avatar>
          <span>Important</span>
        </v-chip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// import mapHelpers
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      allTodosCount: 'todolist/allTodosCount',
      doneTodosCount: 'todolist/doneTodosCount',
      remainingTodosCount: 'todolist/remainingTodosCount',
      importantTodoCount: 'todolist/importantTodoCount',
      laterTodoCount: 'todolist/laterTodoCount',
      filter: 'todolist/filter',
      filteredTodos: 'todolist/filteredTodos'
    })
  },
  methods: {
    ...mapActions({
      changeFilter: 'todolist/changeFilter',
      removeDoneTodos: 'todolist/removeDoneTodos'
    })
  }
}
</script>

<style src="~/assets/filters.css"></style>
