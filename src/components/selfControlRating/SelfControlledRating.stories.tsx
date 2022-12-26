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

export const EmptyStarts = () => <SelfControlRating defaultValue={0} onChange={callback}/>
export const TwoStarts = () => <SelfControlRating defaultValue={1} onChange={callback}/>
export const ThreeStarts = () => <SelfControlRating defaultValue={2} onChange={callback}/>
export const FourStarts = () => <SelfControlRating defaultValue={3} onChange={callback}/>
export const FiveStarts = () => <SelfControlRating defaultValue={4} onChange={callback}/>
// export const ChangeRating = () =>{
//     const[ratingValue, setRatingValue]=useState<RatingType>(5)
//     return(
//         <SelfControlRating value={ratingValue} setValue={setRatingValue}/>
//     )



