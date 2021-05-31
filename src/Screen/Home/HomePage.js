import React from 'react';
import { connect } from 'react-redux';
import Input from '../../CommonComponent/Input/Input';
import List from '../../CommonComponent/List/List';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../index.css';
import { addTodo, deleteTodo, checkItemDispatch, bulkDeleteDispatch } from '../../Redux/todoList.action';
import DeleteIcon from '@material-ui/icons/Delete';

function HomePage(props) {
    const [todos, setTodos] = React.useState([...props.todos_r] || []);
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');
    const handleChange =  (val) => {
        setValue(val);
        console.log('props: ', val)
    };
    const handleBtn =  (e) => {
        e.preventDefault();
        if (value === '' ) {
            setError('Enter any values')
        }else if ([...props.todos_r].some(u=>u.name === value)) {
            setError('Item already exists!!')
        } else {
            setError('');
            props.addTodoDispatch(value);
            setValue('');
        }
    };
    const handleDelete =  (item) => {
        props.deleteTodoDispatch(item);
    };
    const handleCheckbox = (item) => {
        props.checkItemDispatch(item);
    }
    React.useEffect(()=>{
        setTodos([...props.todos_r]);
    },[props.todos_r])
    return (
        <>
            <div className="header">
                Todo List
            </div>
            <Input
              value={value}
              handleChange={handleChange}
              handleBtn={handleBtn}
              icon={<AddCircleIcon style={{ color: 'white' }}/>}
              title={"Add"}
            />
            {
                error !== '' &&
                <div style={{ color: 'red'}}>
                    {error}
                </div>
            }
            <List data={todos} handleDelete={handleDelete} handleCheckbox={handleCheckbox}/>
            {
                [...todos].filter((item) => item.checked === true).length > 0 &&
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={props.bulkDeleteDispatch}>
                    Bulk Delete
                </Button>
            }
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    addTodoDispatch: todo => dispatch(addTodo(todo)),
    deleteTodoDispatch: todo => dispatch(deleteTodo(todo)),
    checkItemDispatch: todo => dispatch(checkItemDispatch(todo)),
    bulkDeleteDispatch: () => dispatch(bulkDeleteDispatch())
});
const mapStateToProps = state => ({
    todos_r: state.todos,
})
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
