import React, { Component } from 'react';
import './Board.css';

import Gap from './Gap';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      gaps: Array(9).fill(null),
      xIsNext: true,
    };
  }

  renderGap(i) {
    return <Gap value={ this.state.gaps[i] } onClick={ () => this.handleClick(i) } />;
  }

  render() {
    const winner = this.calculateWinner();

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.nextMove();
    }
    return (
      <div>
        <div className="status">{ status }</div>
        <div className="board-row">
          { this.renderGap(0) }
          { this.renderGap(1) }
          { this.renderGap(2) }
        </div>
        <div className="board-row">
          { this.renderGap(3) }
          { this.renderGap(4) }
          { this.renderGap(5) }
        </div>
        <div className="board-row">
          { this.renderGap(6) }
          { this.renderGap(7) }
          { this.renderGap(8) }
        </div>
      </div>
    );
  }

  handleClick(i) {
    const gaps = this.state.gaps.slice();

    if (this.calculateWinner() || gaps[i]) return;

    gaps[i] = this.nextMove();

    this.setState({
      gaps: gaps,
      xIsNext: !this.state.xIsNext,
    });
  }

  nextMove() {
    if (this.state.xIsNext) return 'X';
    return 'O';
  }

  calculateWinner() {
    const gaps = this.state.gaps;

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gaps[a] && gaps[a] === gaps[b] && gaps[a] === gaps[c]) {
        return gaps[a];
      }
    }
  }
}

export default Board;
