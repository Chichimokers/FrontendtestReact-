import React from "react";  

class EmailComponent extends React.Component{
    render(){
        return(
            <div className="mb-5 " id="email-div">

                <label className="block text-gray-700 text-sm font-bold mb-2" 
                id="email-label">Email</label>
                <input className ="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="email"></input>

            </div>
        )
    }
}
export default EmailComponent