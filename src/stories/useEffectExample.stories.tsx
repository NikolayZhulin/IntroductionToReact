import {useEffect, useState} from "react";

export default {
    title: 'useEffectExample'
}

export const useEffectExample = () =>{



let [date, setDate] = useState<Date>(new Date())
let [count2, setCount2] = useState(1)

    console.log(date)

useEffect(()=>{
    setInterval(()=>{
        setDate(new Date())
        }, 1000
    )
}, [])

    let seconds = date.getSeconds()<10? `0${date.getSeconds()}`:date.getSeconds()
    let minutes = date.getMinutes()<10? `0${date.getMinutes()}`:date.getMinutes()
    let hours = date.getHours()<10? `0${date.getHours()}`:date.getHours()

    return(
        <>
            {hours}:{minutes}:{seconds}
    </>
    )
}