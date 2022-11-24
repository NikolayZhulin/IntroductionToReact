import React, {useState} from 'react';

type AccordionPropsType={
	titleValue: string,
	collapsed?: boolean,
}

export const SelfControledAccordion=(props:AccordionPropsType)=>{

	let [collapsed, setCollapsed]=useState<boolean>(false)
	
		return(
			<div>
				<AccordionTitle title={props.titleValue} callback={setCollapsed} collapsed={collapsed}/>
				{!collapsed && <AccordionBody/>}
				
			</div>
		)
	}


type AccordionTitlePropsType={
	title: string
	callback:(collapsed:boolean)=>void
	collapsed:boolean
}

function AccordionTitle(props:AccordionTitlePropsType) {
	console.log('AccordionTitle rendering');
	return <h3 onClick={()=>props.callback(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody() {
	console.log('AccordionBody rendering');
	return (
		<ul>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
	)
}

