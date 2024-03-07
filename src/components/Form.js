import { useState } from 'react'

function Form(){

 function cadastrarUsuario(e){
    e.preventDefault()
    console.log(`Nome: ${name} Senha: ${password}`)
    
 }

 const [name, setName] = useState();
 const [password, setPassword] = useState();


   
    return (
      <div>
        <h1>Meu Cadastro</h1>
      <form >
        <div>
          <label htmlFor = "name"></label>
          <input type = "text"
           id = "name" 
           name = "name" 
           placeholder = "Digite o seu nome"
           onChange={e => setName(e.target.value)}
          
           
            />
        </div>

        <div>
        <label htmlFor = "password"></label>
          <input
           type = "password"
           id = "password" 
           name = "password" 
           placeholder = "Digite a sua senha"
           onChange={ e => setPassword(e.target.value)}
          
          
           />
        </div>

        <div>
          <input onClick={cadastrarUsuario} type = "submit" value = "Cadastrar" />
        </div>

      </form> 
      </div> 
    )
}

export default Form