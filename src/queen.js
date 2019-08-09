"use strict";

import Figure from './figure.js';

class Queen extends Figure {
	sign = 'queen';
	points = 9;

	/**
	 * Figure moves
	 *
	 * @return {Array}
	 */
	moves() {
		let moves = [];
		moves = moves.concat(this.getMoves(1, 1));
		moves = moves.concat(this.getMoves(1, -1));
		moves = moves.concat(this.getMoves(-1, 1));
		moves = moves.concat(this.getMoves(-1, -1));
		moves = moves.concat(this.getMoves(0, 1));
		moves = moves.concat(this.getMoves(0, -1));
		moves = moves.concat(this.getMoves(1, 0));
		moves = moves.concat(this.getMoves(-1, 0));
		return moves;
	}
}

export default Queen;