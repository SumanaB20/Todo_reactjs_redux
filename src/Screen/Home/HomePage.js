import React from 'react';
import { connect } from 'react-redux';
import Input from '../../CommonComponent/Input/Input';
import List from '../../CommonComponent/List/List';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../index.css';
import { addTodo, deleteTodo } from '../../Redux/todoList.action';

function HomePage(props) {
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
        }else if (props.todos_r.some(u=>u.name === value)) {
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
            <List data={props.todos_r} handleDelete={handleDelete}/>
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    addTodoDispatch: todo => dispatch(addTodo(todo)),
    deleteTodoDispatch: todo => dispatch(deleteTodo(todo))
});
const mapStateToProps = state => ({
    todos_r: state.todos,
})
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
