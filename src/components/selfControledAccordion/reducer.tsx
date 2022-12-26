export type ActionType = {
    type:"COLLAPSED-TOGGLE",
}

type StateType={
    toggle:boolean
}

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "COLLAPSED-TOGGLE":
            return {...state, toggle: !state.toggle}
    }
    throw new Error('bad action type')
}