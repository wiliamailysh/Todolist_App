export const state = () => ({
  list: [],
  editing: null
})

export const getters = {
  allTodos: (state) => {
    return state.list
  },
  editingTodo: (state) => {
    return state.editing
  }
}

export const mutations = {
  addTodo(state, payload) {
    state.list.unshift({
      text: payload.text,
      id: state.list.length === 0 ? 1 : state.list[0].id + 1,
      done: false
    })
  },
  toggle(state, todo) {
    // Switch todo state
    todo.done = !todo.done
  },
  remove(state, todo) {
    // Remove the right element
    state.list.splice(state.list.indexOf(todo), 1)
  },
  editTodo(state, todo) {
    // State editing stores actual todo-element
    state.editing = todo
  }
}

export const actions = {
  addTodo(context, e) {
    context.commit('addTodo', {
      text: e.target.value
    })
    // Clear input value after added task
    e.target.value = ''
  },
  toggle(context, e) {
    context.commit('toggle', e)
  },
  removeTodo(context, todo) {
    context.commit('remove', todo)
  }
}
