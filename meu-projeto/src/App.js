import './App.css';
import Informacoes from './components/Informacoes.js';
import Imc from './components/Imc.js';

function App() {
  const url = 'https://via.placeholder.com/150'
  const myInfo = {
    nome: 'João'.toUpperCase(),
    idade: 20,
    altura: 1.84,
    peso: 72,
  }

  return (
    <div className="App">
      <h1>Olá, { myInfo.nome }!</h1>
      <p>Recolhemos suas informações, aqui estão.</p>

      <Informacoes
        nome={myInfo.nome}
        idade={myInfo.idade}
        altura={myInfo.altura}
        peso={myInfo.peso} />
      
      <Imc
        className="imc"
        altura={myInfo.altura}
        peso={myInfo.peso} />

      <img src={url} alt="Img" />
    </div>
  );
}

export default App;
