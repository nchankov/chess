"use strict";

import Figure from './figure.js';

class Knight extends Figure {
	sign = 'knight';
	points = 3;
	moveLength = 1;

	/**
	 * Figure moves
	 *
	 * @return {Array}
	 */
	moves() {
		let moves = [];
		moves = moves.concat(this.getMoves(1, 0));
		moves = moves.concat(this.getMoves(-1, 0));
		moves = moves.concat(this.getMoves(0, 1));
		moves = moves.concat(this.getMoves(0, -1));
		return moves;
	}

	/**
	 * rewriting the function as knights has very specific move
	 *
	 * @param  {Number} h could be -1, 0 or 1
	 * @param  {Number} v could be -1, 0 or 1
	 * @return {Array}
	 */
	getMoves(h, v) {
		let moves = [];
		let pos;
		let figure;
		let i = 2;
		let j = 1;
		//on one site
		pos = {
			x: this.pos.x + h * i + j * v,
			y: this.pos.y + v * i + j * h
		};
		if (this.canMoveThere(pos)) {
			moves.push(pos);
		}
		//on another side
		pos = {
			x: this.pos.x + h * i + (-1 * j * v),
			y: this.pos.y + v * i + (-1 * j * h)
		};
		if (this.canMoveThere(pos)) {
			moves.push(pos);
		}
		return moves;
	}
}

export default Knight;