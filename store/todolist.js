export const state = () => ({
  list: []
})

export const getters = {

}

export const mutations = {
  addTodo (state, payload) {
    state.list.unshift({
      text: payload.text,
      id: state.list.length === 0 ? 1 : state.list[0].id + 1,
    })
  }
}
