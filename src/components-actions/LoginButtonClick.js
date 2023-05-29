import LoginFunc from "../petitions/login-func"
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorLabel  from "../components/Errorlabel"
async function LoginButtonClick (username,password) {
    try{
    const loginsucefully = await LoginFunc(username,password)
    
    if(loginsucefully){
        ReactDOM.render(<ErrorLabel text="Login complete" type={true} login={true}/>,document.getElementById("errorlabel-place"))
        
        console.log("Sucefully login")
    }else{
      
        ReactDOM.render(<ErrorLabel text="The password or username is incorrect" type= {true} login={false}/>,document.getElementById("errorlabel-place"))
        
        console.log("failed auth")
    }
}catch(error){
    console.log(error)
    ReactDOM.render(<ErrorLabel text="The password or username is incorrect" type= {true} login={false}/>,document.getElementById("errorlabel-place"))

}
}

export default LoginButtonClick