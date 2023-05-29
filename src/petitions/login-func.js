
const  LoginFunc = async (username ,password) =>{
    try{
        const login = {
            nombre: username,
            correo :"",
            password:password,
            rol :""
        }
        const opciones=
        
        {method: "POST",
        headers:{
            "Content-Type":'application/json'
        },
        body: JSON.stringify(login)
        }
        const respuesta = await fetch('http://127.0.0.1:8080/api/auth',opciones)
      
        if(respuesta.status === 200){

            respuesta.json().then((body)=>{
                console.log(body["token"])
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

export default LoginFunc