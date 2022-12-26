import React, {useState, MouseEvent, KeyboardEvent, useEffect} from "react";
import {UserType} from "../selfControledAccordion/selfControlledAccordion";
import s from "./Select.module.css"

type SelectUserType = {
    users: UserType[];
    setUserValue: (title: string) => void;
    userValue: string | undefined;
}

export const SelectUser = React.memo((props: SelectUserType) => {
    console.log('REND SELECT')
    const [collapsed, setCollapsed] = useState(true);
    const [hoveredItem, setHoveredItem] = useState(props.userValue)

    useEffect(() => setHoveredItem(props.userValue), [props.userValue])

    const onClickItem = (title: string) => {
        props.setUserValue(title)
        setHoveredItem(title)
        setCollapsed(true)
    }

    const onClickSelectTitleHandler = () => {
        setCollapsed(!collapsed)
        setHoveredItem(props.userValue)
    }

    const mouseMoveItem = (e: MouseEvent<HTMLSpanElement>) => {
        setHoveredItem(e.currentTarget.title)
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLSpanElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.users.length; i++) {
                if (hoveredItem === props.users[i].title) {
                    let nextHoveredItem = e.key === "ArrowUp"
                        ? props.users[i - 1]
                        : props.users[i + 1]

                            if (nextHoveredItem) {
                                props.setUserValue(nextHoveredItem.title)
                                return
                            }
                        }
                    }
                    if (!hoveredItem) {
                        props.setUserValue(props.users[0].title)
                    }
                }
                if (e.key === "Enter" || e.key === "Escape") {
                    setCollapsed(true)
                }
            }

    let userItems = props.users.map(user => <span key={user.id}
                                                  className={s.userItem + " " + (user.title === hoveredItem
                                                      ? s.hoveredItem
                                                      : '')}
                                                  onClick={() => onClickItem(user.title)}
                                                  onMouseMove={mouseMoveItem}>
                                             {user.title}
                                            </span>);
    return (
        <div className={s.wrapper}>
            <div className={s.selectTitle}
                 onClick={onClickSelectTitleHandler}
                 onKeyUp={onKeyUpHandler}
                 tabIndex={0}>
                {props.userValue ? props.userValue : 'Select user...'}
            </div>
            {!collapsed
                && <div className={s.userItemsContainer}>
                    {userItems}
                </div>}
            {/*<select>*/}
            {/*    <option>none</option>*/}
            {/*    <option value="1">JS</option>*/}
            {/*    <option value="2">React</option>*/}
            {/*    <option value="3">Redux</option>*/}
            {/*</select>*/}
        </div>


    )
})