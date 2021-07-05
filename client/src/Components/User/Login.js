import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../Assets/Logo.jpeg";
import wallpaper from "../../Assets/undraw_authentication_fsn5.svg";
import useInput from "../../hooks/use-input";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Wyttle
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  wallImage: {
    backgroundImage: `url(${wallpaper})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "auto",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const {
    value: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    enteredValueHasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => {
    return value.includes("@");
  });

  const {
    value: enteredPassword,
    enteredValueIsValid: enteredPasswordIsValid,
    enteredValueHasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    valueInputBlurHandler: passwordInputBlurHandler,
    reset: passwordReset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredEmail);
    emailReset();
    passwordReset();
  };
  const nameInputClasses =
    passwordInputHasError || emailInputHasError
      ? "form-control invalid"
      : "form-control";

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.wallImage} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={[classes.paper, { nameInputClasses }].join(" ")}>
          <img
            src={logo}
            alt=""
            style={{ height: "100px", width: "100px", margin: "10px" }}
          />
          <hr></hr>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={formSubmissionHandler}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              value={enteredEmail}
              autoFocus
            />
            {emailInputHasError && (
              <p className="error-text">Email Not Valid</p>
            )}
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
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
              value={enteredPassword}
            />
            {passwordInputHasError && (
              <p className="error-text">Password should not be empty</p>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
