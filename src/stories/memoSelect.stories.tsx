import {useMemo, useState} from "react";
import {SelectUser} from "../components/Select/Select";
import {UserType} from "../App";
import React from "react";


export default {
    title: 'useMemo'
}

export const ExampleForMemoSelect = () => {
    let [users, setUsers] = useState<UserType[]>([
        {id: 1, title: '2222', surname: '2222', city: 'Novi Sad'},
        {id: 2, title: '1111', surname: '33333', city: 'Novi Sad'},
        {id: 3, title: '3333', surname: '44444', city: 'SPB'},
        {id: 4, title: '4444', surname: '5555', city: 'Moscow'},
        {id: 5, title: '5555', surname: '6666', city: 'Moscow'},
    ])
    let [count, setCount] = useState(0);
    const [userValue, setUserValue] = useState<string | undefined>(undefined);

    let cityFilteredUsers = useMemo(() => {
        return users.filter(user => user.city === 'Moscow')
    }, [users])
    let nameFilteredUsers = useMemo(() => {
        return users.filter(user => user.title.toLowerCase().indexOf('o') >= -1)
    }, [users])
    let idFilteredUsers = useMemo(() => users.filter(user => user.id >= 3), [users])


    return (
        <>
            <div>{count}
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <SelectUser users={idFilteredUsers}
                        setUserValue={setUserValue}
                        userValue={userValue}/>
            {/*<SelectContainer users={users}  />*/}
            {/*<SelectContainer users={users}  />*/}
        </>
    )
}