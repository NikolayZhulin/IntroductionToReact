import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ControlledOnOf, OnOffType} from "./ControlledOnOf";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'onOff',
    component: ControlledOnOf,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ControlledOnOf>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

const onOffAction = action('on or off clicked')

export const On = () => <ControlledOnOf activeLed={true} setActiveLed={onOffAction}/>
export const Off = () => <ControlledOnOf activeLed={false} setActiveLed={onOffAction}/>
export const ChangeOnOff = () =>{
    const[onOff, setonOff]=useState<any>(true)
    return(
    <ControlledOnOf activeLed={onOff} setActiveLed={setonOff}/>
    )
}


