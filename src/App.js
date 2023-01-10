import Login from './components/loginPage/Login';
import Signup from './components/signupPage/Signup';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Rightbar from './components/Rightbar/Rightbar'
import Navbar from './components/Navbar/Navbar'
import {Box,Stack,createTheme,ThemeProvider} from '@mui/material'
import Add from './components/AddPost/Add';
import { useState } from 'react';


function App() {
const [mode,setMode] =useState("light")

const darkTheme = createTheme({
  palette: {
    mode:mode,
  },
});

  return (
      <ThemeProvider theme={darkTheme}>
    <div className="App">
     {/* <Login/>
      <Signup/> */}
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default App;
 