/**
 * Created by Daniela Ruiz - daru015@gmail.com
 * Date: 09/11/2017
 * File: square-function.test.js
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Square from '../src/Components/Square.js';

const i = 0;
const props = { value: 'X', letterClass: "blue-letters", onClick : (x)=>{} };

describe('Square', () => {

    describe('Where the props.letterClass is blue-letters', () => {
        it('should render blue-letters style', () => {

            const component = renderer.create(
                <Square value={props.value} onClick={() => props.onClick(i)} letterClass={props.letterClass} />
            );

            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();

        });
    });

});