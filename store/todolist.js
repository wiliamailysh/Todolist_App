export const state = () => ({
  list: []
})

export const getters = {
  allTodos: (state) => {
    return state.list
  }
}

export const mutations = {
  addTodo(state, payload) {
    state.list.unshift({
      text: payload.text,
      id: state.list.length === 0 ? 1 : state.list[0].id + 1,
      done: false
    })
  }
}

export const actions = {
  addTodo(context, e) {
    context.commit('addTodo', {
      text: e.target.value
    })
    // Clear input value after added task
    e.target.value = ''
  }
}
