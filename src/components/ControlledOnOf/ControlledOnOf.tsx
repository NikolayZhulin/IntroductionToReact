import {useState} from "react";

export type OnOffType = {
	activeLed: boolean
	setActiveLed:(activeLed:boolean)=>void
}

export const ControlledOnOf = (props:OnOffType) => {
	
	const indicatorStyle = {
		width: '10px',
		height: '10px',
		borderRadius: '10px',
		border: "1px solid black",
		display: 'inline-block',
		marginLeft: '5px',
		background: props.activeLed && 'green' || 'red'
	}
	const onStyle = {
		width: '40px',
		height: '20px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '5px',
		background: props.activeLed && 'green' || 'white'
	}
	const offStyle = {
		width: '40px',
		height: '20px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '5px',
		background: props.activeLed && 'white' || 'red'
	}
	
	const onclickOnHandler=()=>{
		props.setActiveLed(true)
	}
	const onclickOffHandler=()=>{
		props.setActiveLed(false)
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
		
	
	
	
	
	