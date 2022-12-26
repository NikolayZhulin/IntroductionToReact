import React, {useReducer} from 'react';
import {reducer} from "./reducer";

export type UserType = {
    id: number
    title: string
}

type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean,
    menuItems: UserType[]
}


export const SelfControlledAccordion = (props: AccordionPropsType) => {

    let [collapsed, dispatchCollapsed] = useReducer(reducer, {toggle: true})

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            callback={() => dispatchCollapsed({
                                type: "COLLAPSED-TOGGLE"
                            })}/>
            {!collapsed.toggle && <AccordionBody menuItems={props.menuItems}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={props.callback}>
        {props.title}
    </h3>
}

type AccordionBodyPropsType = {
    menuItems: UserType[];
}

function AccordionBody(props: AccordionBodyPropsType) {

    const itemOnClick = (val: string) => {
        alert(val)
    }


    let menuOptions = props.menuItems.map(i => <li key={i.id} onClick={() => itemOnClick(i.title)}>{i.title}</li>)

    return (
        <ul>
            {menuOptions}
        </ul>
    )
}

