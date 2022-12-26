import {useState} from "react";

export default {
    title: 'useStateExample'
}

export const useStateExample = () =>{

    let a = getInitialValue

let [count, setCount] = useState(a)

    function getInitialValue(){
        let fake = 0
        while (fake < 10000000000){
            let a = fake;
            fake++
        }
        console.log("INITIAL")
        return 1
    }
    return(
        <>
            <button onClick={()=>setCount(count+1)}>+</button>
            {count}
    </>
    )
}