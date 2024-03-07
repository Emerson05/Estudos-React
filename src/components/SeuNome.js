function SeuNome({setNome}){
    return(
        <div>
            <p>Digite seu Nome</p>
            <input type="text" onChange={(e)=> setNome(e.target.value)}></input>
        </div>
    )
}

export default SeuNome