import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingType} from "./Rating";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStarts = () => <Rating setValue={x=>x} value={0}/>
export const TwoStarts = () => <Rating setValue={x=>x} value={1}/>
export const ThreeStarts = () => <Rating setValue={x=>x} value={2}/>
export const FourStarts = () => <Rating setValue={x=>x} value={3}/>
export const FiveStarts = () => <Rating setValue={x=>x} value={4}/>
export const ChangeRating = () =>{
    const[ratingValue, setRatingValue]=useState<RatingType>(5)
    return(
    <Rating value={ratingValue} setValue={setRatingValue}/>
    )
}


