import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {SelfControlRating} from "./SelfControlRating";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'SelfControlRating',
    component: SelfControlRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SelfControlRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const callback = action('action');

export const qwertyTitle = () => <SelfControlRating/>



