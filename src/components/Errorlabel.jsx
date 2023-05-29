import React from "react"
import CorrectLabel from "./CorrectLabel";
import IncorrectLabel from "./IncorrectLabel";

class ErrorLabel extends   React.Component{
    
    constructor(props) {
        super(props);
       
    
      }

render(){
   

  
   return( 
    
    <div id="error-lugar "className="flex items-center justify-center text-center">
  
        {this.props.type  ? 
        //Tipo login
         (this.props.login ?  <CorrectLabel text={this.props.text}/> : <IncorrectLabel text={this.props.text}/> ) 

        :
        //Tipo Register
         (this.props.login ?  <CorrectLabel text={this.props.text}/> : <IncorrectLabel text={this.props.text}/> )

         }
        
        
      
     </div>  )
    
}
}
export default ErrorLabel