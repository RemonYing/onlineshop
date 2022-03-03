import React , { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import loginBg from './loginBg.jpg'
import { Person} from '@material-ui/icons'
import { useHistory } from 'react-router'
const useStyles = makeStyles(theme => ({
  root: {
      backgroundImage: `url(${loginBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
  },
  container: {
      height: '80%',
      marginTop: theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
          marginTop: 0,
          width: '100%',
          height: '100%'
      }
  },
  div: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
  },
  form: {
      width: '100%',
      marginTop: theme.spacing(1)
  },
  button: {
      margin: theme.spacing(3, 0, 2)
  }
}))

function Register() {

  
  const [body, setBody] = useState({ username: '', password: '' })
  const initialValues = {
    username: "",
    password: "",
  };
  
  const { push } = useHistory();
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const inputChange = ({ target }) => {
    const { name, value } = target
    setBody({
        ...body,
        [name]: value
    })
}

const onSubmit = () => {
    axios.post('http://localhost:4000/api/login', body)
        .then(({ data }) => {
            localStorage.setItem('auth', '"yes"')
            push('/app')
        })
        .catch(({ response }) => {
            console.log(response.data)
        })
}

//   const onSubmit = (data) => {
//     axios.post("http://localhost:3001/auth", data).then(() => {
//       console.log(data);
//     });
//   };
  return (
    <>
    <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <Person />
                    </Avatar>
                    <Typography component='h1' variant='h5'>Registration</Typography>
                    <form className={classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Username'
                            value={body.username}
                            onChange={inputChange}
                            name='username'
                        /><TextField
                        fullWidth
                        autoFocus
                        color='primary'
                        margin='normal'
                        variant='outlined'
                        label='Email'
                        value={body.username}
                        onChange={inputChange}
                        name='email'
                    />
                        <TextField
                            fullWidth
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Password'
                            value={body.password}
                            onChange={inputChange}
                            name='password'
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            onClick={onSubmit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
    </>
  );
}

export default Register;



