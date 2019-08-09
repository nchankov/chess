"use strict";

import Figure from './figure.js';

class Bishop extends Figure {
	sign = 'bishop';
	points = 3;

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
		return moves;
	}
}

export default Bishop;