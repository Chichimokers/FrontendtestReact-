const Register= async (username,password,email)=>{

    try{
    const login = {
        nombre: username,
        correo :email,
        password:password,
        rol :"NORMAL"
    }
    const opciones=
    
    {method: "POST",
    headers:{
        "Content-Type":'application/json'
    },
    body: JSON.stringify(login)
    }
    const respuesta = await fetch('http://127.0.0.1:8080/api//singup',opciones).error((error)=>{
        console.log(error)
        return false;
    })
    if(respuesta.status === 200){

        respuesta.json().then((body)=>{
            console.log(body)
        })

        return true;
        
    }else{

        return false
    }
}catch(error){
    
    console.log(error)
    return false
}



}
export default Register