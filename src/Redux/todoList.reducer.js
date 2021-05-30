const initState = {
    todos: [],
};

export const addTodo = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            const arr = state.todos
            let found = false;
            arr.map((item,i) => {
                if(item.name === action.payload) {
                    found = true;
                } 
            });
            if (found === false && action.payload !== '') {
                arr.push({ key: state.todos.length, name: action.payload})
                return {
                    ...state,
                    todos: arr
                }
            }
            return state
        }
        case 'EDIT_TODO': {
            const arr = state.todos
            arr.map((item,i) => {
                if(item.key === action.payload.key) {
                    return item.name = action.payload.name;
                }
            })
            return {
                ...state,
                todos: arr
            }
        }
        case 'DELETE_TODO': {
            const arr = state.todos.filter((item, i) => item.key !== action.payload.key)
            
            return {
                ...state,
                todos: arr
            }
        }
        default:
            return state;
    }
};