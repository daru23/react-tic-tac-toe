/**
 * Created by Daniela Ruiz - daru015@gmail.com
 * Date: 09/11/2017
 * File: Board.js
 */

import React from 'react';
import Square from './Square';

export default class Board extends React.Component {

    setColor(i) {
        if (this.props.squares[i] === 'X') {
            return "square blue-letters"
        } else {
            return "square red-letters"
        }
    }

    renderSquare(i) {
        return <Square value={this.props.squares[i]}
                       onClick={() => this.props.onClick(i)}
                       letterClass={this.setColor(i)}
        />;
    }

    renderBoardItems() {

        let lines = [];

        for (let i=0; i < 9; i++) {
            lines.push(this.renderSquare(i));
        }

        return lines;
    }

    render() {

        let lines = this.renderBoardItems();

        return (
            <div>
                <div className="board-row">
                    {lines.slice(0,3)}
                </div>
                <div className="board-row">
                    {lines.slice(3,6)}
                </div>
                <div className="board-row">
                    {lines.slice(6,9)}
                </div>
            </div>
        );
    }
}
