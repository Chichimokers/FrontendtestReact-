import React from 'react';
import ReactDOM from 'react-dom';
import Register from "../petitions/SignIn-func"
import ErrorLabel from "../components/Errorlabel"
async function SignIn(username,password,email){
    try{
    const registrocompleto = await Register(username,password,email)

    if(registrocompleto){
        
        ReactDOM.render(<ErrorLabel text="Correct register" type={false} login={true}/>,document.getElementById("errorlabel-place"))

    }else{
        ReactDOM.render(<ErrorLabel text="something wrog ,password length or now exist the email" type={false} login={false}/>,document.getElementById("errorlabel-place"))

    }
}catch(error){
    ReactDOM.render(<ErrorLabel text="something wrog ,password length or now exist the email" type={false} login={false}/>,document.getElementById("errorlabel-place"))
    console.log(error)
 
}


}

export default SignIn