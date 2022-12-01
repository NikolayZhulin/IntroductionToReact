import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SelfControledAccordion} from "./selfControledAccordion";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'SelfControledAccordion',
    component: SelfControledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SelfControledAccordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const qwertyTitle = () => <SelfControledAccordion titleValue={'Menu'}/>
export const MenuTitle = () => <SelfControledAccordion titleValue={'qwerty'}/>


