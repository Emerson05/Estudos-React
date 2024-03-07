function OutraLista( { Itens }){
    return (
        <>
        <h3>Lista de Coisas Boas</h3>
       
            {Itens.length > 0 ? (
            
            Itens.map((Item, index)=>(
                <p key = {index}>{Item}</p>)
            )):(
                <p>Não Há Lista</p>
            )}

                
       
        </>
    )
}

export default OutraLista