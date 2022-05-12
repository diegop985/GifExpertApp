import { render } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import { getGifs } from "../../helpers/getGifs";


describe('tests on getGifs Fetch', () => { 




    test('should bring 10 elements', async() => { 


        const gifs = await getGifs('Sekiro')

        expect(gifs.length).toBe( 10 )
        
    })


    test('testing tbh', async() => { 


        const gifs = await getGifs('')

        console.log(gifs)

        expect(gifs.length).toBe( 0 )
        
    })



















})