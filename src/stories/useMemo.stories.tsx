import {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const Example1 = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(()=>{
        let tempRes = resultA
        for (let i = 1; i <= a; i++) {
            let fake = 1
            while (fake < 1000000000){
                fake++
                let fakeVal = fake;
            }
            tempRes = i*tempRes;
        }
        return tempRes;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = i*resultB;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <div>
                Result !{a}: {resultA}
            </div>
            <div>
                Result !{b}: {resultB}
            </div>
        </>
    )
}