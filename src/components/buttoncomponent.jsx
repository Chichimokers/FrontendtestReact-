import React from 'react';
import ReactDOM from 'react-dom';
import LoginButtonClick from "../components-actions/LoginButtonClick"
import EmailComponent from './Emailcomponent';
import HomeComponent from './Home/HomeComponent'
import SignIn from '../components-actions/SignInButtonClick';

class Buttoncomponent extends React.Component{
     handleClickButtonLogin = () => {

        
    const emaildiv = document.getElementById("email-position")
    const emailnode = emaildiv.getRootNode()
    const emailinput = emailnode.getElementById("email-div")
    console.log(emailinput)

    if(emailinput != null){
        ReactDOM.render(<div id="email-position"></div>,document.getElementById("email-position"))
        return;
    } 

    const username= document.getElementById("User-div")
    const usernamenodo = username.getRootNode()
    const valorusername = usernamenodo.getElementById("username").value 

    const password= document.getElementById("pass-div")
    const passwordnode = password.getRootNode()
    const passwordvalue = passwordnode.getElementById("password").value

    console.log(valorusername)
    
    console.log(passwordvalue)

    LoginButtonClick(valorusername,passwordvalue)

    }
    addemailforregister= ()=>{



     
    const emaildiv = document.getElementById("email-position")
    const emailnode = emaildiv.getRootNode()
    const emailinput = emailnode.getElementById("email-div")
       
    

    if(emailinput === null){
         ReactDOM.render(<EmailComponent/>,document.getElementById("email-position"))
         return;
    } 

    const emailvaluae = emailinput.getRootNode().getElementById("email").value

    const username= document.getElementById("User-div")
    const usernamenodo = username.getRootNode()
    const valorusername = usernamenodo.getElementById("username").value 

    const password= document.getElementById("pass-div")
    const passwordnode = password.getRootNode()
    const passwordvalue = passwordnode.getElementById("password").value

    SignIn(valorusername,passwordvalue,emailvaluae)
        
    }

    render(){

        return(     
            <div class = "flex items-center justify-center mb-4">
            <input class="cursor-pointer bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
             type="button" onClick = {this.addemailforregister} id="inciarsesion" value="Sign up"/>
                
            <input class="separar cursor-pointer bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
             type="button" id="registrarse" onClick={this.handleClickButtonLogin} value="Sign in" />
            </div>)
            
    }
}

export default Buttoncomponent