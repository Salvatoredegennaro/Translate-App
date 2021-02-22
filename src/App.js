import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is react?',
        content: 'react is a library'
    },
    {
        title: 'what is javascript',
        content: 'very useful for dinamic content'
    },
    {
        title: 'what is jquery',
        content: 'is a javascript framework'
    }
]

const options = [

    {
        label: 'The Color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    
    return(
        <div> 
           <Translate/>
            
        </div>)
}

