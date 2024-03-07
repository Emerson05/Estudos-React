import Button from './evento/Button'

function Evento(){

   
        function meuEvento(){
            console.log('Ativando primeiro Evento')
        }

        function segundoEvento(){
            console.log('Ativando o Segundo Evento')
        }
    return(
        <div>
            <p>Clique para disparar um Evento</p>
          <Button event={meuEvento}  text = "Clicou 1"/>
          <Button event={segundoEvento} text = "Clicou 2"/>
           
           
            
        </div>
    )
}

export default Evento