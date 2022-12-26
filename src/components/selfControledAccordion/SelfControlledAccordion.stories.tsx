import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SelfControlledAccordion} from "./selfControlledAccordion";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'SelfControlledAccordion',
    component: SelfControlledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SelfControlledAccordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const users = [{id:1, title:'Oleg'}, {id:2, title:'Hasbik'},{id:3, title:'Abdurosik'},{id:4, title:'QQQQ'},]


export const qwertyTitle = () => <SelfControlledAccordion titleValue={'Menu'} menuItems={users}/>
export const MenuTitle = () => <SelfControlledAccordion titleValue={'qwerty'} menuItems={users}/>


