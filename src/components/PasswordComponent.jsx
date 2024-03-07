import React from "react";

class PasswordComponent extends React.Component{

render(){

    return(      
    <div className="mb-4" id="pass-div">
    <label className="block bg-white-900 text-white-300 text-sm font-bold mb-2" >Password</label >

    <input  className ="mb-1 shadow appearance-none border rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
    type="password" id="password"/>
    </div>

)}
}

export default PasswordComponent