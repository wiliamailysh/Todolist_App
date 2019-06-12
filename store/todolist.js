const match = function (myExpresion, comparedExpression, tagArray, tagToAdd) {
  // Check if input value contain an expression (ex. #important, #later)
  if (myExpresion.match(comparedExpression)) {
    tagArray.push(tagToAdd)
  }
}

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
    const tagArray = []

    // // Check if input value contain #important
    match(payload.text, /#important/gm, tagArray, 'important')
    // Remove #important from text-value
    payload.text = payload.text.replace('#important', '')

    // // Check if input value contain #important
    match(payload.text, /#later/gm, tagArray, 'later')
    // Remove #important from text-value
    payload.text = payload.text.replace('#later', '')

    state.list.unshift({
      text: payload.text,
      id: state.list.length === 0 ? 1 : state.list[0].id + 1,
      done: false,
      tag: tagArray
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
  },
  doneEdit(state) {
    // Edit task finished, state editing changes to null
    state.editing = null
  },
  updateText(state, payload) {
    // Actual todo-task and todo tag list
    const todo = state.list.find(todo => todo.id === payload.id)

    // Update text and tag list with new values
    todo.text = payload.newText
  },
  deleteTag(state, payload) {
    const todo = state.list.find(todo => todo.id === payload.id)
    const tagToDelete = todo.tag.find(tag => tag === payload.tagType)
    todo.tag.splice(todo.tag.indexOf(tagToDelete), 1)
  },
  addTag(state, payload) {
    const todo = state.list.find(todo => todo.id === payload.id)
    todo.tag.push(payload.tagToAdd)
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
  },
  doneEdit(context) {
    context.commit('doneEdit')
  }
}
