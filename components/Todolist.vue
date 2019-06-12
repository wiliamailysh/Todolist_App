<template>
  <div class="todolist_app">
    <v-container>
      
    </v-container>
  </div>
</template>

<script>
// import mapHelpers
import { mapActions } from 'vuex'

export default {
  components: {

  },
  methods: {
    ...mapActions({
      addTodo: 'todolist/addTodo'
    })
  }
}
</script>
