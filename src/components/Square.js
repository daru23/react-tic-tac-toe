/**
 * Created by Daniela Ruiz - daru015@gmail.com
 * Date: 09/11/2017
 * File: Square.js
 */

import React from 'react';

export default function Square (props) {
    return (
        <button className={props.letterClass} onClick={props.onClick}>
            {props.value}
        </button>
    )
}