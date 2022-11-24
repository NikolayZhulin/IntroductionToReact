import React from 'react';

type AccordionPropsType={
	titleValue: string
	setCollapsed: (collapsed:boolean)=>void
	collapsed: boolean
}

function Accordion(props:AccordionPropsType){
	console.log('accordion rendering')
		return(
			<div>
				<AccordionTitle title={props.titleValue} setCollapsed = {props.setCollapsed} collapsed={props.collapsed}/>
				{!props.collapsed && <AccordionBody/>}
			</div>
		)
	}


type AccordionTitlePropsType={
	title: string
	setCollapsed: (collapsed:boolean)=>void
	collapsed: boolean
}

function AccordionTitle(props:AccordionTitlePropsType) {
	console.log('AccordionTitle rendering');
	return <h3 onClick={()=>props.setCollapsed(props.collapsed)}>{props.title}</h3>
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

export default Accordion;