import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const PaperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#663399" };
  const btnstyle={margin:'8px 0'}
  const inputField={margin:'10px 0'}
  return (
    <Grid>
      <Paper elevation={10} style={PaperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          id="outlined-basic"
          label="Username"
          style={inputField}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={"password"}
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox onChange="handleChange" name="gilad" color="primary" />
          }
          label="Remember me"
        />
        <Button type="submit" color="primary" style={btnstyle} variant="contained" fullWidth>
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
