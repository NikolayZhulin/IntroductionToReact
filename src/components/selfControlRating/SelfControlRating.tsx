import React, {useState,MouseEvent} from "react";

type RatingPropsType={
	value: 0|1|2|3|4|5,
}

export function SelfControlRating() {
	
	let [value,setValue]=useState<number>(0)
	
	const setRating =(val:number)=>{
		setValue(val)
	}
	
		return <div>
			<Star selected = {value>0} callback={()=>setRating(1)}/>
			<Star selected = {value>1} callback={()=>setRating(2)}/>
			<Star selected = {value>2} callback={()=>setRating(3)}/>
			<Star selected = {value>3} callback={()=>setRating(4)}/>
			<Star selected = {value>4} callback={()=>setRating(5)}/>
		</div>
	}
	

type StarPropsType={
	selected: boolean
	callback:()=>void
}

function Star(props: StarPropsType){
	return <span>
		{props.selected? <b>star </b>: 'star '}
	</span>
}
