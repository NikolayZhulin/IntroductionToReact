import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function sum(a: number, b: number) {
	alert(a + b)
}

function App() {
	console.log('App rendering');
	return (
		<div className="App">
			{/*<input/>*/}
			{/*<input type='date'/>*/}
			{/*<PageTitle title={'This is app titleee'}/>*/}
			{/*<PageTitle title={'This is my frends'}/>*/}
			article 1
			{/*<Rating value={3}/>*/}
			<Accordion titleValue={'MENU'} collapsed = {true}/>
			<Accordion titleValue={'Users'} collapsed = {false}/>
			{/*article 2*/}
			{/*<Rating value={0}/>*/}
			{/*<Rating value={1}/>*/}
			{/*<Rating value={2}/>*/}
			{/*<Rating value={3}/>*/}
			{/*<Rating value={4}/>*/}
			{/*<Rating value={5}/>*/}
		</div>
	);
}

type  PageTitlePropsType={
	title: string
}

function PageTitle(props: PageTitlePropsType) {
	console.log('PageTitle rendering');
	return <h1>{props.title}</h1>
}


export default App;

