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
                arr.push({ key: (state.todos.length + '-' + action.payload), name: action.payload, checked: false})
                return {
                    ...state,
                    todos: [...arr]
                }
            }
            return state
        }
        case 'EDIT_TODO': {
            const arr = state.todos
            let err = '';
            arr.map((item,i) => {
                if(item.key === action.payload.key) {
                    if([...arr].some(u=>u.name === action.payload.name)) {
                        err= 'Item already exists!!';
                    } else {
                        err= '';
                        return item.name = action.payload.name;
                    }
                }
            })
            return {
                ...state,
                todos: [...arr],
                editError: err,
            }
        }
        case 'DELETE_TODO': {
            const arr = state.todos.filter((item, i) => item.key !== action.payload.key)
            
            return {
                ...state,
                todos: [...arr]
            }
        }
        case 'CHECK_TODO': {
            const arr = state.todos
            arr.map((item,i) => {
                if(item.key === action.payload.key) {
                    return item.checked = !action.payload.checked;
                }
            })
            return {
                ...state,
                todos: [...arr]
            }
        }
        case 'BULK_DELETE_TODOS': {
            const arr = [...state.todos];
            const selected_items = arr.filter((item) => item.checked === true)
            const arr2 = arr.filter(el => !selected_items.includes(el));
            console.log('arr2: ', arr2);
            return {
                ...state,
                todos: [...arr2]
            }
        }
        default:
            return state;
    }
};