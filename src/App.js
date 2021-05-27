import {useState} from 'react';
import './App.css';
import Sicaklik from './sicaklik';
import KaynamaKarar from './KaynamaKarar';

function App() {
  const [sicaklikC, setSicaklikC] = useState(0);
  return (
    <div >
        <h1>Sıcaklık Döünşüm Uygulaması</h1>
        <Sicaklik celcius={sicaklikC} birim="c"/>
        <Sicaklik celcius={sicaklikC} birim="f"/>
        <KaynamaKarar celcius={sicaklikC}/>
    </div>
  );
}

export default App;
