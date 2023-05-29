
import React from 'react'
import UsernameComponent from './UsernameText';
import PasswordComponent from './PasswordComponent'
import Buttoncomponent from './buttoncomponent'

class  LoginComponent extends React.Component{

    render(){
       
        return(
        <React.Fragment>
        <div id="logincontainer ">
            
            <div>
            <h1 className="text-2xl text-gray-700 font-bold mb-5 flex items-center justify-center text-center ">
                Questions Forum</h1>
            </div> 

            <div id="errorlabel-place">

            </div>

            <div className=" margen flex items-center justify-center text-center " >


            <form id ="login" className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
             

                <UsernameComponent/>

                <PasswordComponent/>

                <div id="email-position">
                    
                </div>

                <Buttoncomponent/>
           

            </form>    
            </div>
            </div>
            </React.Fragment>
         
    
    )}
}
export default LoginComponent;