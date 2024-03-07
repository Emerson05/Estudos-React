import { useState } from 'react'

function Condicional(){

    const [email,setEmail] = useState()
    const [userEmail, setUserEmail] = useState();

    function enviaEmail(e){
        e.preventDefault()
        setUserEmail(email)
        
    }

    function limparEmail(){
        setUserEmail('')
    }

    return (

        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type = "email" name='email ' placeholder='Digite Seu email' onChange={(e)=> setEmail(e.target.value)}></input>
                <button onClick={enviaEmail} >Enviar</button>
                {userEmail &&(
                    <div>
                    <p>o email do usuario é foi {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}

            </form>
        </div>
    )
}

export default Condicional