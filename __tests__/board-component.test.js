/**
 * Created by Daniela Ruiz - daru015@gmail.com
 * Date: 09/11/2017
 * File: board-component.test.js
 */

import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Square from '../src/Components/Board.js';

const EnzymeAdapter = require('enzyme-adapter-react-16');

const Enzyme = require('enzyme');
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
