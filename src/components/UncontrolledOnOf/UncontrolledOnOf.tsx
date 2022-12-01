import {useState} from "react";

type OnOffType = {
    activeLed: (val: boolean) => void
    defaultValue?: boolean
}

export const UncontrolledOnOf = (props: OnOffType) => {

    let [activeLed, setActiveLed] = useState<boolean>(props.defaultValue
        ? props.defaultValue
        : false)

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: '5px',
        background: activeLed && 'green' || 'red'
    }
    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: activeLed && 'green' || 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: activeLed && 'white' || 'red'
    }

    const onclickOnHandler = () => {
        setActiveLed(true)
        props.activeLed(true)
    }
    const onclickOffHandler = () => {
        setActiveLed(false)
        props.activeLed(false)
    }
    return (
        <div>
            <button style={onStyle}
                    onClick={onclickOnHandler}
            >On
            </button>
            <button style={offStyle}
                    onClick={onclickOffHandler}
            >Off
            </button>
            <div style={indicatorStyle}></div>
        </div>
    )
}
		
	
	
	
	
	