"use strict";

import Figure from './figure.js';

class King extends Figure {
	sign = 'king';
	moveLength = 1;
	first_move = true;

	/**
	 * Possible moves of the king
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
		//Also add castle moves
		moves = moves.concat(this.canCastle());
		return moves;
	}

	/**
	 * rewriting the function as the kings can't be next to each other
	 * nor move to a field which is in check
	 *
	 * @param  {Number} h could be -1, 0 or 1
	 * @param  {[type]} v could be -1, 0 or 1
	 * @return {Array}
	 */
	getMoves(h, v) {
		//find the moves in the direction (it's one move actually)
		let moves = super.getMoves(h, v);

		//no possible moves in that direction
		if (!moves.length) {
			return [];
		}

		//is close to the opponent king.
		//We check against the first move as the king has only one
		if (this.isCloseToOpponent(moves[0])) {
			return [];
		}

		//Is the figure in check
		//We check against the first move as the king has only one
		if (this.isInCheck(moves[0])) {
			return [];
		}
		return moves;
	}

	/**
	 * Check whether the other king is close
	 * kings can't be next to each other on the field
	 *
	 * @param {Object} pos
	 * @return {Boolean}
	 */
	isCloseToOpponent(pos) {
		let o = this.game.figureByType(this.getOppositeColor(), 'king');
		//position x and position y are near to other king
		if (Math.abs(o.pos.x - pos.x) <= 1 && Math.abs(o.pos.y - pos.y) <= 1) {
			return true;
		}
		return false;
	}

	/**
	 * check if the king could move on the selected field
	 * if pos is not provided, use the current figure's position
	 *
	 * @param  {Object} pos
	 * @return {Boolean}
	 */
	isInCheck(pos) {
		let isInCheck = false;
		//store original figure position
		let originalPosition = this.pos;
		let opposite_figure;
		//if position is provided to the function
		if (pos) {
			//find the figure on the checked position and set it
			//outside of the board
			opposite_figure = this.game.figureAt(pos);
			if (opposite_figure) {
				opposite_figure.pos = {x: -1, y: -1};
			}
		}
		//if no position is provided use the current's figure position
		pos = pos || this.pos;
		this.pos = pos;
		let figures = this.game.figures;
		figures.forEach((function(figure) {
			if (
				this.color != figure.color &&
				!(figure instanceof King) &&
				figure.canMoveTo(pos)
			) {
				isInCheck = true;
			}
		}).bind(this));
		//revert original positions
		this.pos = originalPosition;
		if (opposite_figure) {
			opposite_figure.pos = pos;
		}
		return isInCheck;
	}

	/**
	 * Event handler
	 *
	 * @param  {Object} pos
	 */
	moved(pos) {
		this.castle(pos);
		this.first_move = false;
		super.moved(pos);
	}

	/**
	 * Check whether the king can make castle
	 *
	 * @return {Boolean}
	 */
	canCastle() {
		let moves = [];
		//king is moved already so can't castle
		if (!this.first_move) {
			return [];
		}
		let rook;

		//rook on the left
		rook = this.game.figureAt({x: 0, y: this.pos.y});
		if (
			rook &&
			rook.first_move == true &&
			//check if there is any figure in the spaces between rook and the king
			this.game.isEmpty({x: rook.pos.x + 1, y: rook.pos.y}) &&
			this.game.isEmpty({x: rook.pos.x + 2, y: rook.pos.y}) &&
			this.game.isEmpty({x: rook.pos.x + 3, y: rook.pos.y}) &&
			//check those positions are in check
			!this.isInCheck({x: rook.pos.x + 1, y: rook.pos.y}) &&
			!this.isInCheck({x: rook.pos.x + 2, y: rook.pos.y}) &&
			!this.isInCheck({x: rook.pos.x + 3, y: rook.pos.y})
		) {
			moves.push({x: this.pos.x - 2, y: this.pos.y});
		}

		//rook on the right
		rook = this.game.figureAt({x: 7, y: this.pos.y});
		if (
			rook &&
			rook.first_move == true &&
			//check if there is any figure in the spaces between rook and the king
			this.game.isEmpty({x: rook.pos.x - 1, y: rook.pos.y}) &&
			this.game.isEmpty({x: rook.pos.x - 2, y: rook.pos.y}) &&
			//check those positions are in check
			!this.isInCheck({x: rook.pos.x - 1, y: rook.pos.y}) &&
			!this.isInCheck({x: rook.pos.x - 2, y: rook.pos.y})
		) {
			moves.push({x: this.pos.x + 2, y: this.pos.y});
		}
		return moves;
	}

	/**
	 * actual castle action
	 *
	 * @param  {Object} pos
	 */
	castle(pos) {
		//the king doesn't move 2 positions so no castle
		if (Math.abs(this.pos.x - pos.x) != 2) {
			return;
		}
		//check which direction the king moved left or right
		if (pos.x > this.pos.x) {
			//Rook
			this.game.figureAt(
				{x: 7, y: this.pos.y}
			).pos = {x: pos.x - 1, y: this.pos.y};
		} else {
			//Rook
			this.game.figureAt(
				{x: 0, y: this.pos.y}
			).pos = {x: pos.x + 1, y: this.pos.y};
		}
	}

	/**
	 * Check whether the king can be protected by any figure
	 *
	 * @return {Boolean}
	 */
	canBeProtected() {
		let king = this;
		let isProtected = false;
		let figures = this.game.figures;
		//Check all figures of the same color if they have any moves
		figures.forEach((function(figure) {
			figure.selected = true;
			if (
				figure != king &&
				this.color == figure.color &&
				figure.moves().length > 0
			) {
				isProtected = true;
			}
			figure.selected = false;
		}).bind(this));

		//Because we reset all selected this will make the currently
		//selected figure selected again
		if (this.game.selected) {
			this.game.selected.selected = true;
		}
		return isProtected;
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

export default King;