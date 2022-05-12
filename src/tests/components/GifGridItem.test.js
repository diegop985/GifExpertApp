import { render } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import { GifGridItem } from "../../components/GifGridItem";


describe('Tests on <GifGridItem/>', () => { 

    
    let wrapper = shallow( <GifGridItem/> )
    
    
    test('should render <GifGridItem/> correctly', () => { 
        
        
        expect( wrapper ).toMatchSnapshot()


    })






})