import React, {useState, MouseEvent} from "react";

export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export type SelfControlProps = {
    defaultValue?:number | RatingPropsType;
    onChange?:(value:number)=>void
}

export function SelfControlRating(props: SelfControlProps) {

    let [value, setValue] = useState(props.defaultValue
        ? props.defaultValue
        : 0)

    const setRating = (val: number) => {
        setValue(val)
    }

    return <div>
        <Star selected={value > 0} callback={() => {setRating(1); props.onChange && props.onChange(1)}}/>
        <Star selected={value > 1} callback={() => {setRating(2);props.onChange && props.onChange(2)}}/>
        <Star selected={value > 2} callback={() => {setRating(3); props.onChange && props.onChange(3)}}/>
        <Star selected={value > 3} callback={() => {setRating(4); props.onChange && props.onChange(4)}}/>
        <Star selected={value > 4} callback={() => {setRating(5); props.onChange && props.onChange(5)}}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.callback}>
		{props.selected ? <b>star </b> : 'star '}
	</span>
}
