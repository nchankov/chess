"use strict";

import King from './king.js';
import Queen from './queen.js';
import Bishop from './bishop.js';
import Knight from './knight.js';
import Rook from './rook.js';
import Pawn from './pawn.js';
import History from './history.js';

/**
 * The class responsible for the game containing figures
 * and their moves on the board
 */
class Game {
	/**
	 * Direction determine how to draw pieces on the board
	 * if "1" - white at the bottom, black at the top
	 * if "-1" - opposite
	 * @type {Number}
	 */
	direction = 1;

	/**
	 * Determine which figures could be selected.
	 * if "any" (default) the user could select any figure and make a move
	 * if "user" the user could select figures at the bottom of the board
	 * the top figures could be moves by a script
	 *
	 * @type {String} could be "any" or "user"
	 */
	mode = 'any';

	/**
	 * keep log of the moves in the game
	 *
	 * @type {Object}
	 */
	history = {};

	/**
	 * figures on the board
	 * @type {Array}
	 */
	figures = [];

	/**
	 * order of the colors
	 * @type {Array}
	 */
	colors = [];

	/**
	 * Hold which piece on the board is selected
	 * @type {Object}
	 */
	selected;

	/**
	 * Game score
	 * @type {Object}
	 */
	score = {'white': 0, 'black': 0};

	/**
	 * Class constructor
	 *
	 * @param  {Number} direction
	 */
	constructor(direction = 1) {
		this.direction = direction;
		this.colors = (this.direction > 0) ?
			['white', 'black'] :
			['black', 'white'];
		this.history = new History(this);
		this.setFigures();
	}

	/**
	 * Set figures on the board
	 */
	setFigures() {
		let pos = 7;
		let pawns = 6;
		for (let c in this.colors) {
			if (c % 2) {
				pos = 0;
				pawns = 1;
			}
			this.figures.push(new King(this.colors[c], {x: 4, y: pos}, this));
			this.figures.push(new Queen(this.colors[c], {x: 3, y: pos}, this));
			this.figures.push(new Bishop(this.colors[c], {x: 2, y: pos}, this));
			this.figures.push(new Bishop(this.colors[c], {x: 5, y: pos}, this));
			this.figures.push(new Knight(this.colors[c], {x: 1, y: pos}, this));
			this.figures.push(new Knight(this.colors[c], {x: 6, y: pos}, this));
			this.figures.push(new Rook(this.colors[c], {x: 0, y: pos}, this));
			this.figures.push(new Rook(this.colors[c], {x: 7, y: pos}, this));
			//Draw pawns
			for (let i = 0; i < 8; i++) {
				this.figures.push(new Pawn(this.colors[c], {x: i, y: pawns}, this));
			}
		}
		//Store the initial state of the board
		this.history.store();
	}

	/**
	 * find figure by provided position
	 *
	 * @param  {Object} pos
	 * @return {Object} Figure at the position
	 */
	figureAt(pos) {
		return this.figures.filter(function(figure) {
			if (figure.pos.x == pos.x && figure.pos.y == pos.y) {
				return figure;
			}
		})[0];
	}

	/**
	 * Convert check position to coordinate
	 * e.g. a2 is {x: 7, y: 1}
	 *
	 * @param  {String} field
	 * @return {Object}
	 */
	convertPosition(field) {
		let pos = {x: null, y: null};
		if (field.length != 2) {
			return false;
		}
		let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		if (this.direction < 0) {
			pos.x = 7 - chars.indexOf(field.charAt(0));
			pos.y = Number(field.charAt(1)) - 1;
		} else {
			pos.x = chars.indexOf(field.charAt(0));
			pos.y = 8 - Number(field.charAt(1)) - 1;
		}
		return pos;
	}

	/**
	 * Check whether the position pos is empty
	 *
	 * @param  {Object} pos
	 * @return {Boolean}     [description]
	 */
	isEmpty(pos) {
		return !this.figureAt(pos) ? true : false;
	}

	/**
	 * Find figure by color and type.
	 * it's useful for single figure e.g. king or queen
	 *
	 * @param  {String} color
	 * @param  {string} figureType
	 * @return {Object}
	 */
	figureByType(color, figureType) {
		return this.figuresByType(color, figureType).pop();
	}

	/**
	 * Find all figure by color and type.
	 * it's useful to find all figures by given criterias
	 *
	 * @param  {String} color
	 * @param  {string} figureClass
	 * @return {Object}
	 */
	figuresByType(color, figureClass = null) {
		return this.figures.filter(function(figure) {
			if (figure.color != color) {
				return;
			}
			if (figureClass != null && figure.sign != figureClass) {
				return;
			}
			return figure;
		});
	}

	/**
	 * Check if the figure can be moved
	 *
	 * @param  {String} color
	 * @return {Boolean}
	 */
	canMove(color) {
		//if figure color is the same as the turn color
		return (color == this.history.getTurnColor());
	}

	/**
	 * set which position is selected
	 *
	 * @param  {Object} pos
	 */
	select(pos) {
		if (!pos) {
			return false;
		}
		//unselect previous figures
		this.figures.forEach(function(figure) {
			figure.selected = false;
		});
		let figure = this.figureAt(pos);
		if (!figure) {
			return false;
		}
		if (!this.canSelect(figure.color) || !this.canMove(figure.color)) {
			return false;
		}
		figure.selected = true;
		this.selected = figure;
		return true;
	}

	/**
	 * Determine of the user can select the figure.
	 * This is determined by the game mode.
	 * If the mode is 'user' then the user could select only the figures
	 * at the bottom of the screen
	 * If the mode is 'any' then the user could select both colors 
	 * (over the board)
	 *
	 * @param  {String} color
	 * @return {Boolean}
	 */
	canSelect(color) {
		//if it's both doesn't matter what the user can select
		if (this.mode == 'any') {
			return true;
		}

		if (this.direction == 1 && color == 'white') {
			return true;
		}

		if (this.direction == -1 && color == 'black') {
			return true;
		}
		return false;
	}

	/**
	 * The function which will make the move from X to Y field
	 *
	 * @param  {Object} pos
	 */
	move(pos) {
		if (!this.selected || !this.selected.canMoveTo(pos)) {
			return false;
		}
		let initialPos = this.selected.pos;
		this.selected.moved(pos);
		//update history
		this.history.store(initialPos, pos);
		this.selected = null;
		return true;
	}

	/**
	 * The figure has been taken from the board
	 *
	 * @param  {Object} figure
	 */
	delete(figure) {
		let figures = [];
		this.figures.forEach(function(fig) {
			if (fig.pos.x != figure.pos.x || fig.pos.y != figure.pos.y) {
				figures.push(fig);
			}
		});
		this.figures = figures;
	}

	/**
	 * Handle the game over functionality. Usually this should show a popup
	 * with message. Game over and restart
	 *
	 * @return {[type]} [description]
	 */
	gameOver() {
		if (!this.history.isOnLastPosition()) {
			return false;
		}
		let isGameOver = false;
		let king = this.figureByType(this.history.getTurnColor(), 'king');
		if (king.isInCheck() && king.moves().length == 0 && !king.canBeProtected()) {
			throw king.getOppositeColor() + ' wins';
			//return true;
		}
		//stalemate
		if (king.moves().length == 0 && !king.canBeProtected()) {
			throw 'The game is draw';
			//return true;
		}
		//quirk - only 2 kings left
		if (this.figures.length == 2) {
			throw 'The game is draw';
			//return true;
		}
		//quirk - the history repeats
		if (this.history.isRepeating()) {
			throw 'The game is draw';
			//return true;
		}
		return false;
	}

	clickedOnBoard(pos) {
		if (!pos) {
			return;
		}
		if (!this.selected) {
			this.select(pos);
			return;
		}
		if (
			this.selected &&
			this.figureAt(pos) &&
			this.selected.color == this.figureAt(pos).color
		) {
			this.select(pos);
			return;
		}
		this.move(pos);
	}

	/**
	 * Get figure on the board based on the letters
	 * @param  {String} pos position based on letter and number e.g. "c1"
	 * @return {Figure}
	 */
	figureOn(field) {
		return this.figureAt(this.convertPosition(field));
	}

	/**
	 * Get figures by given color
	 * @param  {String} color
	 * @return {Array}
	 */
	getFigures(color) {
		let figures = [];
		return this.figures.filter(function(figure) {
			if (figure.color == color) {
				return figure;
			}
		});
	}

	/**
	 * Get the color which could move
	 *
	 * @param  {String} color
	 * @return {Boolean}
	 */
	whosTurn() {
		return this.history.getTurnColor();
	}

	/**
	 * Lock the game so only the user with figures at the bottom can move
	 * @return {Game}
	 */
	lock() {
		this.mode = 'user';
		return this;
	}

	/**
	 * Unlock the game mode so anyone (at least the computer can move)
	 * @return {Game}
	 */
	unlock() {
		this.mode = 'any';
		return this;
	}
}

export default Game;