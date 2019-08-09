"use strict";

import Figure from './figure.js';

class Pawn extends Figure {
	sign = 'pawn';
	points = 1;
	first_move = true;

	/**
	 * Event listener for the case when the piece has been moved
	 *
	 * @param  {Object} pos
	 */
	moved(pos) {
		this.first_move = false;
		this.overtaken(pos);
		super.moved(pos);
		this.reachEnd();
	}

	/**
	 * Case where the pawn is overtaken (initial first 2 space move
	 *
	 * @param {Object} pos
	 */
	overtaken(pos) {
		let figureAtPos = this.game.figureAt(pos);
		let dir = this.getDirection();
		if (
			this.pos.x == pos.x &&
			this.game.isEmpty({x: pos.x, y: pos.y + 1 * dir})
		) {
			return;
		}
		let overtaken = this.game.figureAt({x: pos.x, y: pos.y + 1 * dir});
		if (
			typeof figureAtPos == 'undefined' &&
			overtaken &&
			overtaken.color != this.color &&
			overtaken.sign == this.sign
		) {
			this.game.score[this.color] += overtaken.points;
			this.game.delete(overtaken);
		}
	}

	/**
	 * Reach end of the board (and become a queen)
	 * TODO: Make the user to select the new figure
	 */
	reachEnd() {
		if (this.pos.y == 0 || this.pos.y == 7) {
			let color = this.color;
			let pos = this.pos;
			//Delete the pawn
			this.game.delete(this);
			//assign a queen on the same place
			this.game.figures.push(new Queen(color, pos, this.game));
		}
	}

	/**
	 * Set direction which pawns will move
	 * this is unique function as only those figures
	 * can move only in one direction
	 *
	 * @return {Number} 1 or -1
	 */
	getDirection() {
		if (this.game.direction > 0) {
			if (this.color == 'white') {
				return 1;
			} else {
				return -1;
			}
		} else {
			if (this.color == 'white') {
				return -1;
			} else {
				return 1;
			}
		}
	}

	/**
	 * Possible moves of the figure
	 *
	 * @return {Array}
	 */
	moves() {
		let moves = [];
		let dir = this.getDirection();
		//single move
		if (
			this.game.isEmpty({x: this.pos.x, y: this.pos.y - 1 * dir}) &&
			this.canMoveThere({x: this.pos.x, y: this.pos.y - 1 * dir})
		) {
			moves.push({x: this.pos.x, y: this.pos.y - 1 * dir});
		}
		//initial move (2 positions jump)
		if (
			this.first_move == true &&
			this.game.isEmpty({x: this.pos.x, y: this.pos.y - 2 * dir}) &&
			this.game.isEmpty({x: this.pos.x, y: this.pos.y - 1 * dir}) &&
			this.canMoveThere({x: this.pos.x, y: this.pos.y - 2 * dir})
		) {
			moves.push({x: this.pos.x, y: this.pos.y - 2 * dir});
		}
		//attack
		if (
			this.canAttack({x: this.pos.x - 1, y: this.pos.y - 1 * dir}) &&
			this.canMoveThere({x: this.pos.x - 1, y: this.pos.y - 1 * dir})
		) {
			moves.push({x: this.pos.x - 1, y: this.pos.y - 1 * dir});
		}
		if (
			this.canAttack({x: this.pos.x + 1, y: this.pos.y - 1 * dir}) &&
			this.canMoveThere({x: this.pos.x + 1, y: this.pos.y - 1 * dir})
		) {
			moves.push({x: this.pos.x + 1, y: this.pos.y - 1 * dir});
		}
		//special case when the previous move is pawn and has moved 2 places
		let lastMove = this.game.history.getMove();
		if (
			lastMove &&
			lastMove.figure instanceof Pawn &&
			(
				//check if previous move has 2 fields
				Math.abs(lastMove.from.y - lastMove.to.y) == 2 &&
				//check if this happened next to the current figure
				(
					this.pos.x == lastMove.to.x - 1 ||
					this.pos.x == lastMove.to.x + 1
				)
			) &&
			//check if the current figure was overtaken by the opposite
			this.pos.y == lastMove.to.y
		) {
			//detect on which side to move
			if (this.pos.x == lastMove.to.x - 1) {
				moves.push({x: this.pos.x + 1, y: this.pos.y - 1 * dir});
			} else if (this.pos.x == lastMove.to.x + 1) {
				moves.push({x: this.pos.x - 1, y: this.pos.y - 1 * dir});
			}
			//moves.push(x: this.pos.x)
		}
		return moves;
	}

	/**
	 * Determine if there are pieces in the specified position pos
	 *
	 * @param  {Object} pos
	 * @return {Boolean}
	 */
	canAttack(pos) {
		let figure = this.game.figureAt(pos);
		if (figure && figure.color != this.color) {
			return true;
		}
		return false;
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

export default Pawn;