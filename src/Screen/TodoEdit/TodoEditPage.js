import React from 'react';
import Input from '../../CommonComponent/Input/Input';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { editTodo } from '../../Redux/todoList.action';
import { connect } from 'react-redux';

function TodoEditPage(props) {
        const name = props.location.state.item.name
        const key = props.location.state.item.key
        const [value, setValue] = React.useState(name);
        const handleChange =  (val) => {
            setValue(val);
            console.log('props: ', val)
        };
        const handleBtn =  (e) => {
            e.preventDefault();
            props.editTodoDispatch({key: key, name: value});
            setValue('');
            props.history.push({
                pathname: '/',
            })
        };
        return (
            <div>
                Edit {name}
                <Input
                    value={value}
                    handleChange={handleChange}
                    handleBtn={handleBtn}
                    icon={<CheckCircleRoundedIcon style={{ color: 'white' }}/>}
                    title={"Edit"}
                />
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    editTodoDispatch: todo => dispatch(editTodo(todo))
});
export default connect(null,mapDispatchToProps)(TodoEditPage);
