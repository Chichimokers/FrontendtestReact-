import React from "react";

class IncorrectLabel extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
            return(
                <label id="errorLabel" className ="text-30 text-red-600 font-bold mb-5 flex items-center justify-center text-center">
                {this.props.text}</label>
             )
    }
}
export default IncorrectLabel