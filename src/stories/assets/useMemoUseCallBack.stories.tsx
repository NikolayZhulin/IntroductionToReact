import React, {useCallback, useMemo, useState} from "react";
import {logger} from "@storybook/node-logger";

export default {
    title: 'useMemoUseCallBack'
}


export const Example2 = () => {
    console.log('Example')
    let [technologies, serTechnologies] = useState(['React', 'Redux', 'MUI', 'SASS'])
    let [count, setCount] = useState(1)

    const addTechnologies = () => {
        serTechnologies([...technologies, 'Angular'])
    }

    let memoizedAddTechnologies = useMemo(()=>{
        return addTechnologies
    }, [technologies])

    let memoizedAddTechnologies2 = useCallback( ()=> serTechnologies([...technologies, 'Angular']), [technologies])


    return (
        <>
            <div>
                {count}
                <button onClick={()=>setCount(count+1)}>++++</button>
            </div>
            <Technologies addTechnologies={memoizedAddTechnologies} technologies={technologies}/>
        </>
    )
}


type TechnologiesPropsType = {
    addTechnologies: () => void
    technologies:string[]
}

export const Technologies = React.memo((props: TechnologiesPropsType) => {
    console.log(props.technologies)
    return (
        <button onClick={props.addTechnologies}>+</button>
    )
})