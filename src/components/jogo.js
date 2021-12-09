import React, {useState} from 'react';
import './jogo.css'


const Jogo = () =>{

    
    
    const  [turno, SetTurno] = useState('x')
    const  [cells, setCells] = useState(Array(9).fill(''));
    const  [vencedor, setVencedor] = useState();
    const  Checarvencedor = (blocos) => {
         let vitorias = {
            horizontal: [[0,1,2],
                         [3,4,5],
                         [6,7,8]
                        ],
            vertical: [[0,3,6],
                       [1,4,7],
                       [2,5,8]
                      ],
            diagonal: [[0,4,8],
                       [2,4,6]]          
        }
        for(let vitoria in vitorias){
            vitorias[vitoria].forEach((sequencia) => {
                console.log(sequencia)
                if(
                    blocos[sequencia[0]] === ''||
                    blocos[sequencia[2]] === ''||
                    blocos[sequencia[3]] === ''
                ){
 
                }
                else if(blocos[sequencia[0]] === blocos[sequencia[1]] && blocos[sequencia[1]] === blocos[sequencia[2]]){
                     setVencedor(blocos[sequencia[0]]);
                }
            });
        }
    }
   const handleclick = (num) =>{
       let blocos = [...cells];
        if(blocos[num] !== ''){
            alert("espaço invalido")
            return;
        }
       if(turno === 'x'){
           blocos[num] = 'x';
           SetTurno('o');
       }
       else{
           blocos[num] = 'o';
           SetTurno('x')
       }
       Checarvencedor(blocos)
       setCells(blocos)

       

   }

   const Handlerestart = () =>{
       setVencedor(null);
       setCells(Array(9).fill(''))
   }

   const Cell = ({num}) =>{
       return <td onClick = {() => handleclick(num)}>{cells[num]}</td>
   }


    return (
        <div  class = "container">
            <div class = "turno">
                <p> Turno: {turno}</p>
            </div>
            <div class = "tabuleiro">
                <div id = "bloco0" class="block"><Cell num = {0}/></div>
                <div id = "bloco1" class="block"><Cell num = {1}/></div>
                <div id = "bloco2" class="block"><Cell num = {2}/></div>
                <div id = "bloco3" class="block"><Cell num = {3}/></div>
                <div id = "bloco4" class="block"><Cell num = {4}/></div>
                <div id = "bloco5" class="block"><Cell num = {5}/></div>
                <div id = "bloco6" class="block"><Cell num = {6}/></div>
                <div id = "bloco7" class="block"><Cell num = {7}/></div>
                <div id = "bloco8" class="block"><Cell num = {8}/></div>
            </div>
            {vencedor && (
                <>
                    <p class = "vitoria">{vencedor} é o vencedor</p>
                    <button onClick = {() => Handlerestart()}>Jogar novamente</button>
                </>
            )}
        </div>
    )
}
export default Jogo