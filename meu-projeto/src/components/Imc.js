import styles from './Imc.module.css'


function Imc({ altura, peso }) {
    function imc(IMC) {
        if (IMC < 18.5) {
            return 'Abaixo do peso'
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            return 'Peso normal'
        } else if (IMC >= 25 && IMC <= 29.9) {
            return 'Sobrepeso'
        } else if (IMC >= 30 && IMC <= 34.9) {
            return 'Obesidade grau I'
        } else if (IMC >= 35 && IMC <= 39.9) {
            return 'Obesidade grau II'
        } else if (IMC >= 40) {
            return 'Obesidade grau III'
        }
    }

    return (
        <>
            <p id="imc" className={styles.paragraph}>{imc(peso / (altura * altura))}</p>    
        </>
    )
}

export default Imc;