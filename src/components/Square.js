/**
 * Created by Daniela Ruiz - daru015@gmail.com
 * Date: 09/11/2017
 * File: Square.js
 */

import React from 'react';

export default class Board extends React.Component {
    render () {
        return (
        <button className={this.props.letterClass} onClick={this.props.onClick}>
            {this.props.value}
        </button>
        )
    }
}