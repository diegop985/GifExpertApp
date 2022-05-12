import { render } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import { GifGridItem } from "../../components/GifGridItem";


describe('Tests on <GifGridItem/>', () => { 

    const title = "Un titulo"
    const url = "https://localhost/thisreactapp.jsx"
    
    const wrapper = shallow(
        <GifGridItem
            title={title}
            img_url={url}
        />
    )
    
    test('should render <GifGridItem/> correctly', () => { 
        
        
        expect( wrapper ).toMatchSnapshot()


    })

    test('should check for proptypes', () => {

        expect( wrapper ).toMatchSnapshot()


    })

    test('should have a paragraph with the title', () => { 

        const p = wrapper.find('p')

        expect( p.text().trim()).toBe( title )

    })

    test('should obtain an img with url and alt from props', () => { 

        const img = wrapper.find('img')

        expect( img.prop('src') ).toBe(url)
        expect( img.prop('alt') ).toBe(title)

    })

    test('should have "animate__bounceIn" className', () => { 
        

        const div = wrapper.find('div')

        expect( div.hasClass('animate__bounceIn')).toBe(true)
    })
})


