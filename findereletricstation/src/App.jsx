import { useState } from 'react';
import './App.scss';

function App() {


  const axios = require('axios');

// Definindo os parâmetros da requisição
const options = {
  method: 'GET',
  url: 'https://ev-charge-finder.p.rapidapi.com/search-by-location',
  params: {
    near: 'São Paulo, SP, Brasil', // Localização de busca no Brasil
    limit: '20' // Limite de resultados
  },
  headers: {
    'x-rapidapi-key': 'bf8dff4de0mshf38228eec688b4cp172b86jsn313bc7b1a56d',
    'x-rapidapi-host': 'ev-charge-finder.p.rapidapi.com'
  }
};

// Função para buscar dados
async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log('Postos de Energia:', response.data);
  } catch (error) {
    console.error('Erro na Requisição:', error.response ? error.response.data : error.message);
  }
}

fetchData();


  const[location,setLocation] = useState('')

  
  return (
    <main>
        <h1>ola, bme vindo ao achador de carregador de carros elétricos</h1>
        <input className='LocationInput' value={location} onChange={e => setLocation(e.target.value)} type="text" />
        <h1>{location}</h1>
    </main>

  );
}

export default App;
