import React from 'react';
import Input from '../../CommonComponent/Input/Input';
import CheckCircleRoundedIcon from '@material-ui/icons/Save';
import { editTodo } from '../../Redux/todoList.action';
import { connect } from 'react-redux';

function TodoEditPage(props) {
        const { name, key, checked } = props.location.state.item;
        const [value, setValue] = React.useState(name);
        const handleChange =  (val) => {
            setValue(val);
            console.log('props: ', val)
        };
        const handleBtn =  (e) => {
            e.preventDefault();
            props.editTodoDispatch({key: key, name: value, checked:checked });
            if (props.editError === '') {
                props.history.push({
                    pathname: '/',
                })
            }
        };
        return (
            <div>
                Edit {name}
                <Input
                    value={value}
                    handleChange={handleChange}
                    handleBtn={handleBtn}
                    icon={<CheckCircleRoundedIcon style={{ color: 'white' }}/>}
                    title={"Update"}
                    label={"Enter Name"}
                />
                {
                    props.editError !== '' &&
                    <div style={{ color: 'red'}}>
                        {props.editError}
                    </div>
                }
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    editTodoDispatch: todo => dispatch(editTodo(todo))
});
const mapStateToProps = state => ({
    editError: state.editError,
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoEditPage);
