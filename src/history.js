"use strict";

class History {
	/**
	 * game position which hold backward-forward in history
	 * @type {Number}
	 */
	position = 0;

	/**
	 * Array of game moves
	 * @type {Array}
	 */
	moves = [];

	/**
	 * Game object instance
	 * @type {Object}
	 */
	game;

	/**
	 * Class constructor
	 *
	 * @param  {Object} game
	 */
	constructor(game) {
		this.game = game;
	}

	/**
	 * Clone provided array of figures
	 *
	 * @param  {Array} figures
	 * @return {Array}
	 */
	cloneFigures(figures) {
		let f = [];
		figures.forEach((function(figure) {
			f.push(figure.clone());
		}).bind(this));
		return f;
	}

	/**
	 * Backward in history
	 *
	 * @return {Boolean}
	 */
	back() {
		//there is backward moves
		let direction = this.position - 1;
		if (typeof this.moves[direction] == 'undefined') {
			return false;
		}
		//Set game figures to the history.move
		this.game.figures = this.cloneFigures(
			this.moves[direction].figures
		);
		this.position--;
		return true;
	}

	/**
	 * Check whether there is a back move
	 *
	 * @return {Boolean}
	 */
	hasBack() {
		return this.position > 0;
	}

	/**
	 * Forward in history
	 *
	 * @return {Boolean}
	 */
	forward() {
		//there is forward moves
		let direction = this.position + 1;
		if (typeof this.moves[direction] == 'undefined') {
			return false;
		}
		this.game.figures = this.cloneFigures(this.moves[direction].figures);
		this.position++;
		return true;
	}

	/**
	 * Check whether there is a forward move
	 *
	 * @return {Boolean}
	 */
	hasForward() {
		return this.position < this.moves.length - 1;
	}

	/**
	 * Store move in history
	 *
	 * @param  {Object} from
	 * @param  {Object} to
	 */
	store(from, to) {
		//reset the position in history
		//so if the game is in certain position we remove any future moves
		//and reset the moves from that place
		if (this.position < this.moves.length - 1) {
			this.moves = this.moves.slice(0, this.position + 1);
		}
		//add figues
		let figures = this.cloneFigures(this.game.figures);
		let figure = (this.game.selected ? this.game.selected.clone() : null);
		this.moves.push({
			'figure': figure,
			'figures': figures,
			'from': (from ? {x: from.x, y: from.y} : null),
			'to': (to ? {x: to.x, y: to.y} : null)
		});
		//update position
		this.position = this.moves.length - 1;
	}

	/**
	 * Get move from the history
	 *
	 * @param  {Number} index
	 * @return {Object}
	 */
	getMove(index = -1) {
		//if it's negative, use it backwards
		index = (index < 0) ? (this.moves.length + index) : index;
		//if there is such node
		if (!this.moves[index]) {
			return false;
		}
		return this.moves[index];
	}

	/**
	 * Return which turn is it
	 *
	 * @return {[type]} [description]
	 */
	getTurnColor() {
		let dir = (this.game.direction > 0 ? 0 : 1);
		let index = Math.abs(((this.position) % 2) - dir);
		return this.game.colors[index];
	}

	/**
	 * function which check if the oponents repeat themselves
	 * e.g. stalemate
	 *
	 * @return {Boolean} [description]
	 */
	isRepeating() {
		let repeating = 3;
		let lastMove = this.moves[this.moves.length - 1];
		let rep = 0;
		for (let i = 1; i <= this.moves.length; i = i + 4) {
			if (i <= 1) {
				continue;
			}
			if (
				//check if there is to position (initial one is not set)
				this.moves[this.moves.length - i].to &&
				//check x
				lastMove.to.x == this.moves[this.moves.length - i].to.x &&
				//check y
				lastMove.to.y == this.moves[this.moves.length - i].to.y
			) {
				rep++;
			}
			if (rep == repeating) {
				return true;
			}
		}
		return false;
	}

	/**
	 * check if the history position is on the last move
	 * this is used to determine if we should call the game over or not
	 * @return {Boolean}
	 */
	isOnLastPosition() {
		return (this.position == this.moves.length - 1) ? true : false;
	}
}

export default History;