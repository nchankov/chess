"use strict";

import Game from './game.js';
import Board from './board.js';

/**
 * Define images
 * @type {Object}
 */
let pp = new p5(function (p5) {
	/**
	 * Chess board
	 * @type {Board}
	 */
	let board;

	/**
	 * what is the direction (white below is 1, black below is -1)
	 * @type {Number}
	 */
	let direction = Number(attr('direction', 1));

	/**
	 * How to handle moves. If mode is:
	 * any - the user could move white or black no matter
	 * where they are placed (direction)
	 * user - if mode is user, then the user could move only figures
	 * at the bottom of the board
	 *
	 * @type {String}
	 */
	let mode = attr('mode', 'any');

	/**
	 * Theme - colors and sizes
	 * @type {Object}
	 */
	const theme = {
		//board offset from the border in px
		offset: Number(attr('offset', 50)),
		//background color arround the board
		background: attr('background', 150),
		//tile settings
		tiles: {
			//black tile color
			black: attr('tiles-black-color', 51),
			//white tile color
			white: attr('tiles-white-color', 255),
			//width of the tile
			width: Number(attr('tiles-width', 100)),
			//height of the tile (usually the same as width)
			height: Number(attr('tiles-width', 100)),
			selected: {
				background: attr('tiles-selected-background', 'green'),
				borderColor: attr('tiles-selected-border-color', 'red'),
				borderSize: Number(attr('tiles-selected-border-size', 3))
			},
			moves: {
				background: attr('tiles-moves-background', 'blue'),
				diameter: Number(attr('tiles-moves-diameter', 20)),
				//if the position has figure
				figure: {
					background: attr('tiles-moves-figure-background', 120),
					diameter: Number(attr('tiles-moves-figure-diameter', 100))
				}
			}
		},
		labels: {
			color: attr('labels-color', 255),
			size: Number(attr('labels-size', 16))
		},
		//game over dialog
		over: {
			background: attr('over-background', 'red'),
			color: attr('over-color', 'white'),
			size: Number(attr('over-size', 40)),
			reasonSize: Number(attr('over-reason-size', 25))
		}
	}

	/**
	 * Preload figures
	 */
	p5.preload = function() {
		p5.images = {white: {}, black: {}};
		p5.images.white.king = p5.loadImage('figures/white.king.png');
		p5.images.white.queen = p5.loadImage('figures/white.queen.png');
		p5.images.white.bishop = p5.loadImage('figures/white.bishop.png');
		p5.images.white.knight = p5.loadImage('figures/white.knight.png');
		p5.images.white.rook = p5.loadImage('figures/white.rook.png');
		p5.images.white.pawn = p5.loadImage('figures/white.pawn.png');

		p5.images.black.king = p5.loadImage('figures/black.king.png');
		p5.images.black.queen = p5.loadImage('figures/black.queen.png');
		p5.images.black.bishop = p5.loadImage('figures/black.bishop.png');
		p5.images.black.knight = p5.loadImage('figures/black.knight.png');
		p5.images.black.rook = p5.loadImage('figures/black.rook.png');
		p5.images.black.pawn = p5.loadImage('figures/black.pawn.png');
	}
	/**
	 * set up the canvas + set instance of game and board
	 */
    p5.setup = function() {
    	let canvas = p5.createCanvas(
			(theme.tiles.width * 8) + theme.offset * 2,
			(theme.tiles.width * 8) + theme.offset * 2
		);
		canvas.parent('chess');
		board = new Board(p5, theme, direction, mode);
		//Give access to the game  instance to the window object
		window.game = board.game;
		//trigger an event that the game is ready
		window.dispatchEvent(new Event('chess.ready'));
    }

    /**
	 * Draw the game
	 */
    p5.draw = function() {
    	//Set refresh frame rate
    	p5.frameRate(10);
    	//Draw the board
    	board.draw();
    }

    /**
     * handle mouse pressed over the board
     */
    p5.mousePressed = function() {
    	//logic for handling game clicks
    	board.game.clickedOnBoard(board.getPosition());
    }

    /**
	 * Fetch attribute from dom game element
	 *
	 * @param  {String} attribute - name without prefix 'data-'
	 * @param  {String} defaultValue
	 * @return {String}
	 */
	function attr(attribute, defaultValue) {
		let el = document.getElementById('chess');
		if (el.getAttribute('data-' + attribute)) {
			return el.getAttribute('data-' + attribute);
		} else if (el.getAttribute(attribute)) {
			return el.getAttribute(attribute);
		} else {
			return defaultValue;
		}
	}
});