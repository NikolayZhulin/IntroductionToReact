import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledOnOf} from "./UncontrolledOnOf";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOf',
    component: UncontrolledOnOf,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledOnOf>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const callback = action('change')

export const EmptyStarts = () =><UncontrolledOnOf activeLed={callback}/>
