import { useState } from 'react';
import './App.scss';
import Header from './components/header/header.jsx';
import axios from  'axios';
import CardLocation from './components/cards/card.jsx';

function App() {

  
  
    const[location,setLocation] = useState('')
    const[results, setResults] = useState([])


    

    const options = {
      method: 'GET',
      url: 'https://ev-charge-finder.p.rapidapi.com/search-by-location',
      params: {
        near: location, 
        limit: '20' 
      },
      headers: {
        'X-RapidAPI-Key': 'b2dd9a031cmsh2371dcdee407051p1add8ejsn0ca76e1ca259',
        'X-RapidAPI-Host': 'ev-charge-finder.p.rapidapi.com'
      }
    };
    

async function fetchData() {
  try {
    console.log('Buscando por:', location); 
    const response = await axios.request(options);
    console.log('Chaves da resposta:', Object.keys(response.data));
    console.log('Resposta completa:', response.data);


    setResults(response.data.stations || response.data.data || response.data);

  } catch (error) {
    console.error('Erro na Requisição:', error.response ? error.response.data : error.message);
  }
}



  return (
    <main>  
          <Header />
          <input placeholder='Digite sua localização' className='LocationInput' value={location} onChange={e => setLocation(e.target.value)} type="text" />
          <button onClick={fetchData}>Buscar</button>
          
        <section>
            <div className='renderCards'>
                {results.map((posto, index) => (
                    <CardLocation key={index} posto={posto} />
                ))}
            </div>
        </section> 
    </main>

  );
}

export default App;
