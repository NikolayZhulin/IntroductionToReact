import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingType} from "./components/Rating/Rating";
import {UncontrolledOnOf} from "./components/UncontrolledOnOf/UncontrolledOnOf";
import {SelfControledAccordion} from "./components/selfControledAccordion/selfControledAccordion";
import {SelfControlRating} from "./components/selfControlRating/SelfControlRating";
import {ControlledOnOf, OnOffType} from "./components/ControlledOnOf/ControlledOnOf";


function App() {
	
	let [collapsed, setCollapsed] = useState<boolean>(false);
	let [value, setValue] = useState<RatingType>(0);
	let [activeLed, setActiveLed]=useState<boolean>(false);
	
	console.log('App rendering');
	return (
		<div className="App">
			{/*/!*<input/>*!/*/}
			{/*/!*<input type='date'/>*!/*/}
			{/*/!*<PageTitle title={'This is app titleee'}/>*!/*/}
			{/*/!*<PageTitle title={'This is my frends'}/>*!/*/}
			{/*article 1*/}
			{/*/!*<Rating value={3}/>*!/*/}
			<Accordion titleValue={'MENU'} setCollapsed={setCollapsed} collapsed={collapsed}/>
			{/*<Accordion titleValue={'Users'} collapsed = {false}/>*/}
			{/*article 2*/}
			<Rating setValue={setValue} value={value}/>
			<Rating setValue={setValue} value={value}/>
			<Rating setValue={setValue} value={value}/>
			<Rating setValue={setValue} value={value}/>
			<Rating setValue={setValue} value={value}/>
			<Rating setValue={setValue} value={value}/>
			<UncontrolledOnOf activeLed = {setActiveLed}/>{activeLed.toString()}
			<UncontrolledOnOf activeLed = {setActiveLed}/>{activeLed.toString()}
			<UncontrolledOnOf activeLed = {setActiveLed}/>{activeLed.toString()}
			<UncontrolledOnOf activeLed = {setActiveLed}/>{activeLed.toString()}
			<SelfControledAccordion titleValue={'AAAAAAAA'}/>
			<SelfControledAccordion titleValue={'CCCCCCCC'}/>
			<ControlledOnOf activeLed={activeLed} setActiveLed={setActiveLed}/>
			<ControlledOnOf activeLed={activeLed} setActiveLed={setActiveLed}/>
			<ControlledOnOf activeLed={activeLed} setActiveLed={setActiveLed}/>
			<SelfControlRating/>
			{/*<SelfControlRating/>*/}
			{/*<SelfControlRating/>*/}
			{/*<SelfControlRating/>*/}
		</div>
	);
}

type  PageTitlePropsType = {
	title: string
}

function PageTitle(props: PageTitlePropsType) {
	console.log('PageTitle rendering');
	return <h1>{props.title}</h1>
}


export default App;

