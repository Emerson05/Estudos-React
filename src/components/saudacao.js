function Saudacao({nome}){

    function exibirSaudacao(algumNome){
         return `Ola, ${algumNome}, Tudo Bem ? `
    }
    return  <>{nome && <p>{exibirSaudacao(nome)}</p>}</>
    
}

export default Saudacao