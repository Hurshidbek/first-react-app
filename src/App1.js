
/*

language: JAVASCRIPT
framework: REACT
Project name is 'Dynamic Frontend'
Project goal: There will be 'add' button. If it is clicked there will be added '+' , '-' buttons and value (default 0).
                and '+' and '-' control the value;

*/

import {useState} from "react";

function App1() {

    const [count, setCount] = useState(0);
    const [user, setUser] = useState([]);

    function add() {
        setUser(user.concat(
            {
                id:Date.now(),
                count:0
            }
        )) ;
    }

    function increment(e) {
        setUser(
            user.map((l)=>{
                if(l.id == e.target.value){
                    l.count ++ ;
                }
                return l ;
            })
        )
    }


    function decrement(e) {
        setUser(
            user.map((l)=>{
                if(l.id == e){
                    l.count -- ;
                }
                return l ;
            })
        )
    }



    return <div>
        <div>
            <button onClick={add}>add</button>
        </div>
        <ul>
            {
                user.map((e) => {
                    return <li>
                        <div>
                        <button onClick={()=>increment(e.id)}>+</button>
                             { e.count }
                        <button onClick={()=>decrement(e.id)}>-</button>
                        </div>
                    </li>
                })
            }
        </ul>

    </div>
}

export default App1;