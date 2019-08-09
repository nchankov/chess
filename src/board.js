"use strict";

import Game from './game.js';
/**
 * The class mainly draw the interface of the game, inclugind
 * the figures on the board
 */
class Board {
	positions;
	theme;
	game;

	constructor(p5, theme, direction, mode) {
		this.direction = direction;
		this.p5 = p5;
		this.theme = theme;
		this.game = new Game(direction);
		this.game.mode = mode;
		this.historyButtons();
	}

	/**
	 * Draw everything on the board
	 */
	draw() {
		this.drawBoard();
		this.updateButtons();
		this.drawSelectedMoves(this.game)
		this.drawFigures(this.game);
		//Draw gameover screen
		try {
			this.game.gameOver();
		} catch (message) {
			this.drawGameOver(message);
		}
	}

	/**
	 * Construct history buttons
	 * @return {[type]} [description]
	 */
	historyButtons() {
		//to be moves somewhere
		this.buttons = {
			back: this.p5.createButton(' < ').parent('chess').mousePressed((function() {
				this.game.history.back();
				return this;
			}).bind(this)),
			next: this.p5.createButton(' > ').parent('chess').mousePressed((function() {
				this.game.history.forward();
				return this;
			}).bind(this))
		};
		//position the buttons
		let top = (this.theme.offset / 2 - this.buttons.back.height / 2);
		this.buttons.back.position(
			this.theme.offset, 
			top
		);
		this.buttons.next.position(
			this.buttons.back.x + this.buttons.back.width, 
			top
		);
	}

	/**
	 * Update the buttons
	 */
	updateButtons() {
		//enable/disble buttons
		if (!this.game.history.hasBack()) {
			this.buttons.back.attribute('disabled', true);
		} else {
			this.buttons.back.removeAttribute('disabled');
		}
		if (!this.game.history.hasForward()) {
			this.buttons.next.attribute('disabled', true);
		} else {
			this.buttons.next.removeAttribute('disabled');
		}
	}

	/**
	 * Draw the board and tiles on it
	 *
	 * @param  {Number} direction
	 */
	drawBoard() {
		//overall background
		this.p5.background(this.theme.background);

		let width = this.theme.tiles.width;
		let black = this.theme.tiles.black;
		let white = this.theme.tiles.white;
		let offset = this.theme.offset;

		let x = 0;
		let y = 0;
		for (let i = 0; i < 64; i++) {
			if (x >= 8) {
				y++;
				x = 0;
			}
			this.p5.fill(((x + y)%2) ? black : white);
			this.p5.square((width * x) + offset, (width * y) + offset, width);
			x ++;
		}
		//Numbers & Letters on the board
		let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		this.p5.push();
			this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
			this.p5.fill(this.theme.labels.color);
			this.p5.textSize(this.theme.labels.size);
			for (let i = 0; i < 8; i++) {
				let row = chars[i];
				let col = 8 - i;
				//set chars at the bottom if the board is reversed
				if (this.direction < 0) {
					row = chars[7 - i];
					col = i + 1;
				}
				this.p5.text(
					row,
					(width * i + offset),
					(width * 8) + offset,
					width,
					width / 2
				);
				this.p5.text(
					col,
					((width * 8) + offset),
					(width * i + offset),
					width / 2,
					width
				);
				/*For debugging purposes*/
				//this.p5.text(('x' + i), (width * i + offset), 0, width, width / 2);
				//this.p5.text(('y' + i), 0, (width * i + offset), width / 2, width);
				/*For debugging purposes*/
			}
		this.p5.pop();
	}

	/**
	 * determine position based on the mouse click
	 * e.g. it would return object with x and y
	 */
	getPosition() {
		let width = this.theme.tiles.width;
		let x = ((this.p5.mouseX) / width).toFixed(0) - 1;
		let y = ((this.p5.mouseY) / width).toFixed(0) - 1;

		if (x < 0 || x > 7) {
			x = -1;
		}
		if (y < 0 || y > 7) {
			y = -1;
		}
		return {x, y};
	}

	/**
	 * Draw game over overlay
	 *
	 * @param  {String} message
	 */
	drawGameOver(message) {
		let width = this.theme.tiles.width;
		let offset = this.theme.offset;
		//
		let backgroundColor = this.theme.over.background;
		let size = this.theme.over.size;
		let reasonSize = this.theme.over.reasonSize;
		let textColor = this.theme.over.color;
		this.p5.push();
			//draw overlay
			this.p5.background(this.p5.color(0, 0, 0, 200));
			this.p5.fill(this.p5.color(backgroundColor));
			this.p5.translate(offset + width * 2, offset + width * 2);
			this.p5.rect(0, 0, width * 4, width * 3);
			//write text gameover
			this.p5.fill(textColor);
			this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
			this.p5.textSize(size);
			this.p5.text(
				'Game Over',
				0,
				0,
				width * 4,
				width * 3
			);
			this.p5.push();
				this.p5.textSize(reasonSize);
				this.p5.text(
					message,
					0,
					0,
					width * 4,
					width * 4
				);
			this.p5.pop();
		this.p5.pop();
	}

	/**
	 * Draw all game figures
	 */
	drawFigures() {
		this.game.figures.forEach((function(figure) {
			this.drawFigure(figure);
		}).bind(this));
	}

	/**
	 * Draw single figure
	 * @param  {Figure} figure
	 */
	drawFigure(figure) {
		this.drawSelectedFigure(figure);
		this.drawSingleFigure(figure);
	}

	/**
	 * Draw single figure
	 * @param  {[type]} figure [description]
	 * @return {[type]}        [description]
	 */
	drawSingleFigure(figure) {
		let width = this.theme.tiles.width;
		let offset = this.theme.offset;
		this.p5.push();
			this.p5.fill(figure.color);
			this.p5.textSize(28);
			this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
			this.p5.translate(figure.pos.x * width + offset, figure.pos.y * width + offset);
			this.p5.image(this.p5.images[figure.color][figure.sign], 0, 0, width, width);
		this.p5.pop();
	}

	/**
	 * Draw selected figure overlay
	 *
	 * @param  {Figure} figure
	 * @return {[type]}        [description]
	 */
	drawSelectedFigure(figure) {
		let width = this.theme.tiles.width;
		let offset = this.theme.offset;
		if (!figure.selected) {
			return;
		}
		this.p5.push();
			this.p5.translate(
				figure.pos.x * width + offset,
				figure.pos.y * width + offset
			);
			this.p5.fill(this.theme.tiles.selected.background);
			this.p5.strokeWeight(this.theme.tiles.selected.borderSize);
			this.p5.stroke(this.theme.tiles.selected.borderColor);
			this.p5.square(0,0,width);
		this.p5.pop();
	}

	/**
	 * Draw possible moves of the selected figure
	 * @return {[type]} [description]
	 */
	drawSelectedMoves() {
		if (!this.game.selected) {
			return;
		}
		this.drawPossibleFigureMoves(this.game.selected);
	}

	/**
	 * Draw all moves of the selected figure
	 * @param  {Figure} figure
	 */
	drawPossibleFigureMoves(figure) {
		let width = this.theme.tiles.width;
		let offset = this.theme.offset;
		if (!figure.selected) {
			return;
		}
		let moves = figure.moves();
		moves.forEach((function(move) {
			this.p5.push();
				this.p5.translate(move.x * width + offset + width / 2, move.y * width + offset + width / 2);
				//If there is a figure on the position
				//make big circle
				if (this.game.figureAt(move)) {
					this.p5.fill(this.theme.tiles.moves.figure.background);
					this.p5.noStroke();
					this.p5.circle(0, 0, this.theme.tiles.moves.figure.diameter);
				} else {
					//this is the possible move marked as dot
					this.p5.fill(this.theme.tiles.moves.background);
					this.p5.noStroke();
					this.p5.circle(0, 0, this.theme.tiles.moves.diameter);
				}
			this.p5.pop();
		}).bind(this));
	}
}

export default Board;