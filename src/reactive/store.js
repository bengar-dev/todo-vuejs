import { createApp } from 'vue'
import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            listArray: []
        }
    },
    mutations: {
        addTodo (state, payload) {
            state.listArray.unshift(payload.value)
        },
        deleteTodo (state, payload) {
            state.listArray.splice(payload.index, 1)
        }
    }
})

const app = createApp({})
app.use(store)
