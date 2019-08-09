"use strict";

class Figure {
	/**
	 * Type of the figues e.g. king, queen etc.
	 * @type {String}
	 */
	sign = "n/a";

	/**
	 * figure position on the board
	 * hold x and y which could be from 0 to 7
	 * @type {Object}
	 */
	pos = {};

	/**
	 * figure selected
	 * we will indicate that the figure is selected
	 * and draw the moves on the board and allow it to move
	 * @type {Boolean}
	 */
	selected = false;

	/**
	 * Color of the figure (black or white)
	 * @type {String}
	 */
	color = null;

	/**
	 * how many points the figure counts
	 * @type {Number}
	 */
	points = 0;

	/**
	 * how far the figure could go
	 * this will determine the active moves of the piece
	 * usually the lenght is all pieces in 1 direction e.g. from 0 to 7
	 * but there are exceptions for example the king only one place from the
	 * initial position
	 * @type {Number}
	 */
	moveLength = 7;

	/**
	 * instance of the current game
	 * @type {Object}
	 */
	game = {};

	/**
	 * Class constructor
	 *
	 * @param  {String} color
	 * @param  {Object} pos
	 * @param  {Object} game
	 */
	constructor(color, pos, game) {
		this.color = color;
		this.pos = pos;
		this.game = game;
	}

	/**
	 * Close the figure instance
	 * @return {Object}
	 */
	clone() {
		let pos = {x: this.pos.x, y: this.pos.y};
		return new this.constructor(this.color, pos, this.game);
	}

	/**
	 * event listener which will notify the figure that the move is happened
	 * so the figure specific can set some parameters.
	 * example a pawn can move 2 spaces fron only on it's first move
	 *
	 * @param {Object} pos
	 */
	moved(pos) {
		let fig = this.game.figureAt(pos);
		if (fig) {
			this.game.score[this.color] += fig.points;
			this.game.delete(fig);
		}
		this.pos = pos;
		this.selected = false;
	}

	/**
	 * show possible moves from the current position
	 *
	 * @return {Array}
	 */
	moves() {
		return [];
	}

	/**
	 * Move selected figure to the new position
	 * @param  {Object} pos
	 * @return {Boolean}
	 */
	move(pos) {
		game.select(this.pos);
		if (this.canMoveTo(pos) && game.move(pos)) {
			return true;
		}
		return false;
	}

	/**
	 * Check if the figure could move to the specified position
	 * based on it's moves
	 *
	 * @param  {Object} pos
	 * @return {Boolean}
	 */
	canMoveTo(pos) {
		let canMove = false;
		let moves = this.moves();
		moves.forEach(function(move) {
			if (move.x == pos.x && move.y == pos.y) {
				canMove = true;
			}
		});
		return canMove;
	}

	/**
	 * Explore directional moves e.g. with horizontal and vertical
	 * you could determine which direction
	 * to explore. e.g.
	 * horizontal = 1|-1 and vertival = 0 horizontal
	 * horizontal = 0 and vertical = 1|-1 will explore vertival direction
	 * horizontal = 1|-1 and vertival = 1|-1 will explore diagonals
	 *
	 * @param  {Number} h could be -1, 0, 1
	 * @param  {Number} v could be -1, 0, 1
	 * @return {Array}
	 */
	getMoves(h, v) {
		let moves = [];
		let pos;
		let figure;
		for(let i = 1; i <= this.moveLength; i++) {
			pos = {x: this.pos.x + h * i, y: this.pos.y + v * i};
			//if the position is not on the board stop
			if (!this.isOnBoard(pos)) {
				break;
			}
			//there is a figure on the position which is on the same color
			figure = this.game.figureAt(pos);
			if(figure && figure.color == this.color) {
				break;
			}
			//if the figure is selected and block check go to next field
			if (this.selected == true && this.isKingInCheck(pos)) {
				continue;
			}
			//Add the position to the possible moves
			moves.push(pos);
			//there is a figure and the color is not the same as the current one
			if (figure && figure.color != this.color) {
				break;
			}
		}
		return moves;
	}

	/**
	 * Check if the figure can move the the specified position
	 *
	 * @param {Object} pos
	 * @return {Boolean}
	 */
	canMoveThere(pos) {
		let figure = this.game.figureAt(pos);
		if (
			(!figure || figure.color != this.color) &&
			//is the figure on board
			this.isOnBoard(pos) &&
			(
				this.selected == false ||
				(
					this.selected == true &&
					!this.isKingInCheck(pos)
				)
			)
		) {
			return true;
		}
		return false;
	}

	/**
	 * function which check if the figure which is intended to move is in a
	 * place preventing check
	 *
	 * @param {Object} pos
	 * @return {Boolean}
	 */
	isKingInCheck(pos) {
		let isInCheck = false;
		//Move the figure from the pos and set it to -1,-1
		//so it doesn't bother when we check
		let opposite_figure = this.game.figureAt(pos);
		if (opposite_figure) {
			opposite_figure.pos = {x: -1, y: -1};
		}
		//store the original figure position and change the position of the
		//figure to position to check
		let originalPosition = this.pos;
		this.pos = pos;
		//find the same color king
		isInCheck = this.game.figureByType(this.color, 'king').isInCheck();
		//revert to original position and return opposite figure back
		this.pos = originalPosition;
		if (opposite_figure) {
			opposite_figure.pos = pos;
		}

		return isInCheck;
	}

	/**
	 * Check if the position is not outside of the board
	 *
	 * @param  {Object} pos
	 * @return {Boolean}
	 */
	isOnBoard(pos) {
		if (pos.x >= 0 && pos.x <=7 && pos.y >= 0 && pos.y <= 7) {
			return true;
		}
		return false;
	}

	/**
	 * return opposite color of the color provided
	 *
	 * @return {String}
	 */
	getOppositeColor() {
		return this.color == 'white' ? 'black' : 'white';
	}

	/**
	 * Function which accept position on the field like c4 and convert it to pos object
	 *
	 * @param  {String} field
	 * @return {[type]}       [description]
	 */
	moveOn(field) {
		return this.move(this.game.convertPosition(field));
	}
}

export default Figure;