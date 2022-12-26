import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingType} from "./components/Rating/Rating";
import {UncontrolledOnOf} from "./components/UncontrolledOnOf/UncontrolledOnOf";
import {SelfControlledAccordion} from "./components/selfControledAccordion/selfControlledAccordion";
import {SelfControlRating} from "./components/selfControlRating/SelfControlRating";
import {ControlledOnOf, OnOffType} from "./components/ControlledOnOf/ControlledOnOf";
import {SelectUser} from "./components/Select/Select";

export type UserType ={
	id:number
	title:string
	surname:string;
	city:string;
}

function App() {
	console.log('APP')
	let [value, setValue] = useState<RatingType>(0);
	let [activeLed, setActiveLed]=useState<boolean>(false);
	const [userValue, setUserValue] = useState<string | undefined>(undefined);

	let users:UserType[] = ([
		{id: 1, title: 'Nikolay', surname: 'Zhulin', city: 'Novi Sad'},
		{id: 2, title: 'Hasbulla', surname: 'Hasbulla', city: 'Novi Sad'},
		{id: 3, title: 'Murad', surname: 'Legend', city: 'SPB'},
		{id: 4, title: 'Oleg', surname: 'Mongol', city: 'Moscow'},
		{id: 5, title: 'Sobaka', surname: 'Mabaka', city: 'Moscow'},
	])


	const SelectUserMemo = React.memo(SelectUser)
	const AccordionMemo = React.memo(Accordion)
	const RatingMemo = React.memo(Rating)
	const UncontrolledOnOfMemo = React.memo(UncontrolledOnOf)
	const ControlledOnOfMemo = React.memo(ControlledOnOf)
	const SelfControlRatingMemo = React.memo(SelfControlRating)

	return (
		<div className="App">
			<SelectUser users = {users} setUserValue={setUserValue} userValue={userValue}/>
			{/*/!*<input/>*!/*/}
			{/*/!*<input type='date'/>*!/*/}
			{/*/!*<PageTitle title={'This is app titleee'}/>*!/*/}
			{/*/!*<PageTitle title={'This is my frends'}/>*!/*/}
			{/*article 1*/}
			{/*/!*<Rating value={3}/>*!/*/}
			{/*<AccordionMemo titleValue={'MENU'} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}
			{/*<Accordion titleValue={'Users'} collapsed = {false}/>*/}
			{/*article 2*/}
			<RatingMemo setValue={setValue} value={value}/>

			<UncontrolledOnOfMemo activeLed = {setActiveLed} defaultValue={true}/>{activeLed.toString()}
			{/*<SelfControlledAccordion titleValue={'AAAAAAAA'} menuItems={users}/>*/}
			{/*<SelfControledAccordion titleValue={'CCCCCCCC'}/>*/}
			<ControlledOnOfMemo activeLed={activeLed} setActiveLed={setActiveLed}/>
			<SelfControlRatingMemo defaultValue={3}/>
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

