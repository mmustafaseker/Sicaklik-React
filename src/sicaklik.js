import {useState} from 'react';


function Sicaklik(props){
    const ilkdeger = props.birim == "f" ? props.celcius*1.8+32 : props.celcius;
    const [sicaklik, setSicaklik] = useState(ilkdeger);
    const birimAd = props.birim== "f" ? "Fahrenheit" : "Celcius" ;


    const sicaklikDegisti = function(e){
        setSicaklik(e.target.value);
    };

    
    return (
    <fieldset>
            <legend>sıcaklık ({birimAd})</legend>
            <input type="number" value={sicaklik} onChange={sicaklikDegisti}/>
    </fieldset>
    );
}

export default Sicaklik;