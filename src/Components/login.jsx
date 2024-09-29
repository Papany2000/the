import React from "react";
import BasicModal from "./ui/modal";
import Button from "@mui/material/Button"
import LoginForm from "./form/loginForm";
import { UserContext } from "./context/contextAuth";


const Login = () => {

    const{auth, setAuth} = React.useContext(UserContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        const token = localStorage.setItem('access_token', '');
        if (!token){
         setAuth(false)
         setOpen(false);
        } 
     }

    return (
        <div>
            {!auth ? <Button onClick={handleOpen}>Login</Button> : <Button onClick={handleLogout}>logout</Button>}
            <BasicModal
                open={open}
                handleClose={handleClose}
                children={<LoginForm handleClose={handleClose} />}
            />
        </div>
    );
};

export default Login;