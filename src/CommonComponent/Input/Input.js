import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import {
    withStyles,
  } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '54%',
    },
  }));
  const ValidationTextField = withStyles({
    root: {
        '& .MuiInputBase-input': {
          color: '#fff !important',
        },
        '& label.Mui-focused': {
          color: '#7de5ec',
        },
        '& label:hover': {
          color: '#7de5ec',
        },
        '& label': {
            color: '#fff',
          },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#7de5ec',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: '#921db0',
            color: '#921db0 !important',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#7de5ec',
          },
        },
    },
  })(TextField);
function Input(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.value);
    const handleChange =  (event) => {
        props.handleChange(event.target.value);
      };
      React.useEffect(()=>{
        setValue(props.value);
      },[props.value])
    return (
        <div>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <ValidationTextField
        className={classes.margin}
        label={props.title}
        value={value}
        onChange={handleChange}
        variant="outlined"
        defaultValue="Success"
        id="validation-outlined-input"
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <Button variant="contained" color="secondary" startIcon={props.icon} onClick={(e)=> props.handleBtn(e)}>
                    {props.title ? props.title : ''}
                </Button>
              </InputAdornment>
                ),
        }}
      />
        </FormControl>
        </div>
    )
}

export default Input
