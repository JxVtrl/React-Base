import './App.css';

function App() {
  const myInfo = {
    nome: 'João',
    idade: 20,
    altura: 1.84,
    peso: 72,
  }
  const newName = myInfo.nome.toUpperCase() 

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

  const url = 'https://via.placeholder.com/150'


  return (
    <div className="App">
      <h1>Olá, { newName }!</h1>
      <p>Recolhemos suas informações, aqui estão.</p>
      
      <p>Sua idade é {myInfo.idade} anos</p>
      <p>Sua altura atual é {myInfo.altura}m</p>
      <p>Seu peso é {myInfo.peso}kg</p>

      <p>Seu IMC é {imc(myInfo.peso / (myInfo.altura * myInfo.altura))}</p>

      <img src={url} alt="Img" />
    </div>
  );
}

export default App;
