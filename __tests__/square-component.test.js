/**
 * Created by Daniela Ruiz - daru015@gmail.com
 * Date: 09/11/2017
 * File: square-function.test.js
 */

import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Square from '../src/Components/Square.js';

const EnzymeAdapter = require('enzyme-adapter-react-16');

const Enzyme = require('enzyme');
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Square', () => {

    const i = 0;
    const props = { value: 'X', letterClass: "blue-letters", onClick : (x)=>{} };

    describe('Where the props.letterClass is blue-letters', () => {

        it('should render blue-letters style', () => {
            const square = mount(<Square value={props.value} onClick={() => props.onClick(i)} letterClass={props.letterClass} />);

            expect(square.props().letterClass).to.equal('blue-letters');
        });

        it('should not render red-letters style', () => {
            const square = mount(<Square value={props.value} onClick={() => props.onClick(i)} letterClass={props.letterClass} />);

            assert.notEqual(square.props().letterClass, 'red-letters');
        });

        it('should have value X', () => {
            const square = mount(<Square value={props.value} onClick={() => props.onClick(i)} letterClass={props.letterClass} />);

            assert.equal(square.props().value, 'X');
        });

        it('should not have value O', () => {
            const square = mount(<Square value={props.value} onClick={() => props.onClick(i)} letterClass={props.letterClass} />);

            assert.notEqual(square.props().value, 'O');
        });

    });



});