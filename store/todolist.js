const match = function (myExpresion, comparedExpression, tagArray, tagToAdd) {
  // Check if input value contain an expression (ex. #important, #later)
  if (myExpresion.match(comparedExpression)) {
    // Check if tagArray already contains tagToAdd
    if (!tagArray.includes(tagToAdd)) {
      tagArray.push(tagToAdd)
    }
  }
}

export const state = () => ({
  list: [
    { text: 'Obtenir le poste de développeur Front-end chez Clémentine', id: 4, done: false, tag: ['important'] },
    { text: 'Faire une application Todo-list avec Vue.js', id: 2, done: true, tag: [] },
    { text: 'M\'entrainer au baby-foot pour le grand séminaire', id: 3, done: false, tag: ['later'] },
    { text: 'Repeindre la salle de bain', id: 4, done: false, tag: [] }
  ],
  editing: null,
  filter: 'todo'
})

export const getters = {
  editingTodo: (state) => {
    return state.editing
  },
  allTodosCount: (state) => {
    return state.list.length
  },
  doneTodosCount: (state) => {
    return state.list.filter(todo => todo.done).length
  },
  remainingTodosCount: (state) => {
    return state.list.filter(todo => !todo.done).length
  },
  importantTodoCount: (state) => {
    return state.list.filter(todo => todo.tag.includes('important')).length
  },
  laterTodoCount: (state) => {
    return state.list.filter(todo => todo.tag.includes('later')).length
  },
  filteredTodos: (state, getters) => {
    if (state.filter === 'todo') {
      return state.list.filter(todo => !todo.done)
    } else if (state.filter === 'done') {
      return state.list.filter(todo => todo.done)
    } else if (state.filter === 'important') {
      return state.list.filter(todo => todo.tag.includes('important'))
    } else if (state.filter === ('later')) {
      return state.list.filter(todo => todo.tag.includes('later'))
    } else {
      return state.list
    }
  },
  filter: (state) => {
    return state.filter
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

    // Reset filter to all-tasks
    if (state.filter !== 'todo') {
      state.filter = 'all'
    }
  },
  toggle(state, todo) {
    // Switch todo state
    todo.done = !todo.done
  },
  remove(state, todo) {
    // Remove the right element
    state.list.splice(state.list.indexOf(todo), 1)

    let filteredTodos = []

    if (state.filter === 'todo') {
      filteredTodos = state.list.filter(todo => !todo.done)
    } else if (state.filter === 'done') {
      filteredTodos = state.list.filter(todo => todo.done)
    } else if (state.filter === 'important') {
      filteredTodos = state.list.filter(todo => todo.tag.includes('important'))
    } else if (state.filter === ('later')) {
      filteredTodos = state.list.filter(todo => todo.tag.includes('later'))
    } else {
      filteredTodos = state.list
    }

    if (filteredTodos.length === 0) {
      if (state.list.filter(todo => todo.done).length === 0) {
        state.filter = 'todo'
      } else if ((state.list.filter(todo => !todo.done).length === 0)) {
        state.filter = 'done'
      } else {
        state.filter = 'all'
      }
    }
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
    const tagArray = todo.tag

    // Check if updated text contains #important
    match(payload.newText, /#important/gm, tagArray, 'important')
    // Remove #important from text-value
    payload.newText = payload.newText.replace('#important', '')

    // Check if updated text contains #later
    match(payload.newText, /#later/gm, tagArray, 'later')
    // Remove #important from text-value
    payload.newText = payload.newText.replace('#later', '')

    // Update text and tag list with new values
    todo.text = payload.newText
    todo.tag = tagArray
  },
  deleteTag(state, payload) {
    const todo = state.list.find(todo => todo.id === payload.id)
    const tagToDelete = todo.tag.find(tag => tag === payload.tagType)
    todo.tag.splice(todo.tag.indexOf(tagToDelete), 1)
  },
  addTag(state, payload) {
    const todo = state.list.find(todo => todo.id === payload.id)
    todo.tag.push(payload.tagToAdd)
  },
  changeFilter(state, newFilter) {
    // Switch filter
    state.filter = newFilter
  },
  removeDoneTodos(state) {
    // Filter todo-list to remove done tasks
    state.list = state.list.filter(todo => !todo.done)

    // Reset filter to todo task
    state.filter = 'todo'
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
  },
  changeFilter(context, newFilter) {
    context.commit('changeFilter', newFilter)
  },
  removeDoneTodos(context) {
    context.commit('removeDoneTodos')
  }
}
