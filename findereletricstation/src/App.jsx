import { useState } from 'react';
import './App.scss';

function App() {

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
