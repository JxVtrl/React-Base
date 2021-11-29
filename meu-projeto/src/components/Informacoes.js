function Informacoes({ idade, altura, peso }) {
    return (
        <>
            <p>Idade: {idade} anos</p>
            <p>Altura: {altura}m</p>
            <p>Peso: {peso}kg</p>
        </>
    )
}

// Forma errada

// function Informacoes(props) {
//     return (
//         <>
//             <p>Sua idade é {props.idade} anos</p>
//             <p>Sua altura atual é {props.altura}m</p>
//             <p>Seu peso é {props.peso}kg</p> 
//         </>
//     )
// }

export default Informacoes;