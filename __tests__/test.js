/**
 * Created by Daniela Ruiz - daru015@gmail.com
 * Date: 09/11/2017
 * File: Square-test.js
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Square from '../components/Square';


test('Square renders X value', () => {

    const component = renderer.create(
        <Square value="X"
                className=""
                onClick={() => {}} />
    );

    expect(component.text()).toEqual('X');

});