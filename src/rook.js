"use strict";

import Figure from './figure.js';

class Rook extends Figure {
	sign = 'rook';
	points = 5;
	first_move = true;

	/**
	 * Event listener
	 *
	 * @param  {Object} pos
	 */
	moved(pos) {
		this.first_move = false;
		super.moved(pos);
	}

	/**
	 * Figure moves
	 *
	 * @return {Array}
	 */
	moves() {
		let moves = [];
		moves = moves.concat(this.getMoves(0, 1));
		moves = moves.concat(this.getMoves(0, -1));
		moves = moves.concat(this.getMoves(1, 0));
		moves = moves.concat(this.getMoves(-1, 0));
		return moves;
	}

	/**
	 * cloning figure and having first move copied as well
	 *
	 * @return {Object}
	 */
	clone() {
		let figure = super.clone();
		figure.first_move = this.first_move;
		return figure;
	}
}

export default Rook;