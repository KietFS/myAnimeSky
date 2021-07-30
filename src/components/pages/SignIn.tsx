import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';
import Message from '../UI/Message';
import { signin, setError } from '../../state/actions/authActions';
import { RootState } from '../../state';
import miku from '../../images/miku - just 1.png'
import logo from '../../images/Logo.png'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "../../login.css"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2F2F2F"
        }
    }
});



const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  console.log(error);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);




const StyleTextField = withStyles({
    root:{
        fontFamily: 'Noto Sans', 
    }
})(TextField)

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if(error) {
      dispatch(setError(''));
    }
    setLoading(true);
    dispatch(signin({ email, password }, () => setLoading(false)));
  }

  return (
      <section className="login-section">
    <div className="mx-20 relative login-form">
        <div className="container--form mt-28 mx-auto flex max-w-xl rounded-xl bg-white border-2 items-center">

            <div className="img-miku md:flex-shrink-0">
                <img className=" h-48 w-full object-cover md:h-full md:w-48" src={miku} alt="miku" />
            </div>
            <div className="flex mx-12  flex-col">
                <div className="flex items-center justify-center  ">
                    <img className="items-center justify-center " src={logo} alt="img" />
                    <div className="ml-4 font-bold text-3xl ">
                        AniSky
                    </div>
                </div>
                <span className="mb-8 ml-auto font-medium text-maincolor text-sm ">Quản trị viên</span>
                <h1 className="text-center text-2xl font-bold">
                    Sign in
                </h1>
                <form className="w-full" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email "
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <p className="text-xs text-red-500">{`${error ? error : ""}`}</p>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        className="my-4"
                    />

                    <ThemeProvider theme={theme}>
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={submitHandler}>
                            {loading ? "Loading..." : "Đăng nhập"}
                        </Button>
                    </ThemeProvider>

                </form>
            </div>

        </div >

    </div >
    </section>

);
}

export default SignIn;