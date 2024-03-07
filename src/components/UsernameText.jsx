import React from "react"
class UsernameComponent extends React.Component{

    render(){
        return(               
        <div className="mb-5 " id="User-div" >               
        <label className="block text-white-700 text-sm font-bold mb-2" >Username</label>
        <input  className ="mb-1 shadow appearance-none border rounded w-full py-2 px-3 bg-gray-900 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" 
        type="text" id="username"/>
        </div>
        )
    }
}
export default UsernameComponent