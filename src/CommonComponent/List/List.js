import React from 'react'
import './index.css';
import DeleteIcon from '@material-ui/icons/CancelRounded';
import { withRouter } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function List(props) {
    console.log('List?: ', props)
    return (
        <div className="list-container">
            {props.data.length > 0 && props.data.map((item,i) => (
                <div className="list-items" >
                    <div onClick={()=> {props.history.push({
                    pathname: '/todoEdit',
                    state: { item: item }
                  })}
                }> {item.name} </div>
                    <DeleteIcon style={{ color: '#fba963' }} onClick={()=> { props.handleDelete(item)} } />
                </div>
            ))}
            {
                props.data.length === 0 &&
                <div className={'empty-list'}>
                    The List is empty.<br/>
                    Add one by typing the name above and press <AddCircleIcon style={{ color: 'white' }}/>
                </div>
            }
        </div>
    )
}

export default withRouter(List);
