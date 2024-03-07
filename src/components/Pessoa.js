function Pessoa({nome,idade,profissao,foto}){
    return (
    <div>
    <img src = {foto} alt ={nome} />
    <h2>Nome: {nome}</h2>
    <p>{idade}</p>
    <p>Profissao:{profissao}</p>
    
    </div> 
    )
}

export default Pessoa