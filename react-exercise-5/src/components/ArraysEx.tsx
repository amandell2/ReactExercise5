import {useState} from 'react';

interface Pets{
    name: string;
    type: string;
    id: number
}


function ArraysEx(){
    const [colors, setColors] = useState(["red", "orange", "yellow"]);
    function addColor(color: string): void{
        setColors(prev => [...prev, color]);
    }

    const [pets, setPets]=useState([
        {name: "Nala", type: "Pitbull", id: 1},
        {name: "Ludo", type: "Pitbull", id: 2},
        {name: "Rocky", type: "Chocolate Lab", id: 3}
    ])
    
    return(
       <div className="ArraysEx">
       <section>
       <header>
           <h1>Colors</h1>
       </header>
       <ol>
           {colors.map((color, i) => <li key={i}>{color}</li>)}
       </ol>
       <button onClick = {()=> addColor("Blue")}>
                Blue
           </button>
       <button onClick = {()=> addColor("Green")}>
               Green
           </button>
       <button onClick = {()=> addColor("Purple")}>Purple</button>
       </section>
       <section>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                <tbody className="Pets-row">
                    {pets.map((pet, i)=> <tr key = {i}><td>{pet.name}</td> <td>{pet.type}</td></tr>)}
                </tbody>
            </table>
       </section>
       </div>
    );
};

export default ArraysEx;