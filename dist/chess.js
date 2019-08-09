/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bishop.js":
/*!***********************!*\
  !*** ./src/bishop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure.js */ "./src/figure.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Bishop =
/*#__PURE__*/
function (_Figure) {
  _inherits(Bishop, _Figure);

  function Bishop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Bishop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Bishop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sign", 'bishop');

    _defineProperty(_assertThisInitialized(_this), "points", 3);

    return _this;
  }

  _createClass(Bishop, [{
    key: "moves",

    /**
     * Figure moves
     *
     * @return {Array}
     */
    value: function moves() {
      var moves = [];
      moves = moves.concat(this.getMoves(1, 1));
      moves = moves.concat(this.getMoves(1, -1));
      moves = moves.concat(this.getMoves(-1, 1));
      moves = moves.concat(this.getMoves(-1, -1));
      return moves;
    }
  }]);

  return Bishop;
}(_figure_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Bishop);

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * The class mainly draw the interface of the game, inclugind
 * the figures on the board
 */

var Board =
/*#__PURE__*/
function () {
  function Board(p5, theme, direction, mode) {
    _classCallCheck(this, Board);

    _defineProperty(this, "positions", void 0);

    _defineProperty(this, "theme", void 0);

    _defineProperty(this, "game", void 0);

    this.direction = direction;
    this.p5 = p5;
    this.theme = theme;
    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](direction);
    this.game.mode = mode;
    this.historyButtons();
  }
  /**
   * Draw everything on the board
   */


  _createClass(Board, [{
    key: "draw",
    value: function draw() {
      this.drawBoard();
      this.updateButtons();
      this.drawSelectedMoves(this.game);
      this.drawFigures(this.game); //Draw gameover screen

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

  }, {
    key: "historyButtons",
    value: function historyButtons() {
      //to be moves somewhere
      this.buttons = {
        back: this.p5.createButton(' < ').parent('chess').mousePressed(function () {
          this.game.history.back();
          return this;
        }.bind(this)),
        next: this.p5.createButton(' > ').parent('chess').mousePressed(function () {
          this.game.history.forward();
          return this;
        }.bind(this))
      }; //position the buttons

      var top = this.theme.offset / 2 - this.buttons.back.height / 2;
      this.buttons.back.position(this.theme.offset, top);
      this.buttons.next.position(this.buttons.back.x + this.buttons.back.width, top);
    }
    /**
     * Update the buttons
     */

  }, {
    key: "updateButtons",
    value: function updateButtons() {
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

  }, {
    key: "drawBoard",
    value: function drawBoard() {
      //overall background
      this.p5.background(this.theme.background);
      var width = this.theme.tiles.width;
      var black = this.theme.tiles.black;
      var white = this.theme.tiles.white;
      var offset = this.theme.offset;
      var x = 0;
      var y = 0;

      for (var i = 0; i < 64; i++) {
        if (x >= 8) {
          y++;
          x = 0;
        }

        this.p5.fill((x + y) % 2 ? black : white);
        this.p5.square(width * x + offset, width * y + offset, width);
        x++;
      } //Numbers & Letters on the board


      var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      this.p5.push();
      this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
      this.p5.fill(this.theme.labels.color);
      this.p5.textSize(this.theme.labels.size);

      for (var _i = 0; _i < 8; _i++) {
        var row = chars[_i];
        var col = 8 - _i; //set chars at the bottom if the board is reversed

        if (this.direction < 0) {
          row = chars[7 - _i];
          col = _i + 1;
        }

        this.p5.text(row, width * _i + offset, width * 8 + offset, width, width / 2);
        this.p5.text(col, width * 8 + offset, width * _i + offset, width / 2, width);
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

  }, {
    key: "getPosition",
    value: function getPosition() {
      var width = this.theme.tiles.width;
      var x = (this.p5.mouseX / width).toFixed(0) - 1;
      var y = (this.p5.mouseY / width).toFixed(0) - 1;

      if (x < 0 || x > 7) {
        x = -1;
      }

      if (y < 0 || y > 7) {
        y = -1;
      }

      return {
        x: x,
        y: y
      };
    }
    /**
     * Draw game over overlay
     *
     * @param  {String} message
     */

  }, {
    key: "drawGameOver",
    value: function drawGameOver(message) {
      var width = this.theme.tiles.width;
      var offset = this.theme.offset; //

      var backgroundColor = this.theme.over.background;
      var size = this.theme.over.size;
      var reasonSize = this.theme.over.reasonSize;
      var textColor = this.theme.over.color;
      this.p5.push(); //draw overlay

      this.p5.background(this.p5.color(0, 0, 0, 200));
      this.p5.fill(this.p5.color(backgroundColor));
      this.p5.translate(offset + width * 2, offset + width * 2);
      this.p5.rect(0, 0, width * 4, width * 3); //write text gameover

      this.p5.fill(textColor);
      this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
      this.p5.textSize(size);
      this.p5.text('Game Over', 0, 0, width * 4, width * 3);
      this.p5.push();
      this.p5.textSize(reasonSize);
      this.p5.text(message, 0, 0, width * 4, width * 4);
      this.p5.pop();
      this.p5.pop();
    }
    /**
     * Draw all game figures
     */

  }, {
    key: "drawFigures",
    value: function drawFigures() {
      this.game.figures.forEach(function (figure) {
        this.drawFigure(figure);
      }.bind(this));
    }
    /**
     * Draw single figure
     * @param  {Figure} figure
     */

  }, {
    key: "drawFigure",
    value: function drawFigure(figure) {
      this.drawSelectedFigure(figure);
      this.drawSingleFigure(figure);
    }
    /**
     * Draw single figure
     * @param  {[type]} figure [description]
     * @return {[type]}        [description]
     */

  }, {
    key: "drawSingleFigure",
    value: function drawSingleFigure(figure) {
      var width = this.theme.tiles.width;
      var offset = this.theme.offset;
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

  }, {
    key: "drawSelectedFigure",
    value: function drawSelectedFigure(figure) {
      var width = this.theme.tiles.width;
      var offset = this.theme.offset;

      if (!figure.selected) {
        return;
      }

      this.p5.push();
      this.p5.translate(figure.pos.x * width + offset, figure.pos.y * width + offset);
      this.p5.fill(this.theme.tiles.selected.background);
      this.p5.strokeWeight(this.theme.tiles.selected.borderSize);
      this.p5.stroke(this.theme.tiles.selected.borderColor);
      this.p5.square(0, 0, width);
      this.p5.pop();
    }
    /**
     * Draw possible moves of the selected figure
     * @return {[type]} [description]
     */

  }, {
    key: "drawSelectedMoves",
    value: function drawSelectedMoves() {
      if (!this.game.selected) {
        return;
      }

      this.drawPossibleFigureMoves(this.game.selected);
    }
    /**
     * Draw all moves of the selected figure
     * @param  {Figure} figure
     */

  }, {
    key: "drawPossibleFigureMoves",
    value: function drawPossibleFigureMoves(figure) {
      var width = this.theme.tiles.width;
      var offset = this.theme.offset;

      if (!figure.selected) {
        return;
      }

      var moves = figure.moves();
      moves.forEach(function (move) {
        this.p5.push();
        this.p5.translate(move.x * width + offset + width / 2, move.y * width + offset + width / 2); //If there is a figure on the position
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
      }.bind(this));
    }
  }]);

  return Board;
}();

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/figure.js":
/*!***********************!*\
  !*** ./src/figure.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Figure =
/*#__PURE__*/
function () {
  /**
   * Type of the figues e.g. king, queen etc.
   * @type {String}
   */

  /**
   * figure position on the board
   * hold x and y which could be from 0 to 7
   * @type {Object}
   */

  /**
   * figure selected
   * we will indicate that the figure is selected
   * and draw the moves on the board and allow it to move
   * @type {Boolean}
   */

  /**
   * Color of the figure (black or white)
   * @type {String}
   */

  /**
   * how many points the figure counts
   * @type {Number}
   */

  /**
   * how far the figure could go
   * this will determine the active moves of the piece
   * usually the lenght is all pieces in 1 direction e.g. from 0 to 7
   * but there are exceptions for example the king only one place from the
   * initial position
   * @type {Number}
   */

  /**
   * instance of the current game
   * @type {Object}
   */

  /**
   * Class constructor
   *
   * @param  {String} color
   * @param  {Object} pos
   * @param  {Object} game
   */
  function Figure(color, pos, game) {
    _classCallCheck(this, Figure);

    _defineProperty(this, "sign", "n/a");

    _defineProperty(this, "pos", {});

    _defineProperty(this, "selected", false);

    _defineProperty(this, "color", null);

    _defineProperty(this, "points", 0);

    _defineProperty(this, "moveLength", 7);

    _defineProperty(this, "game", {});

    this.color = color;
    this.pos = pos;
    this.game = game;
  }
  /**
   * Close the figure instance
   * @return {Object}
   */


  _createClass(Figure, [{
    key: "clone",
    value: function clone() {
      var pos = {
        x: this.pos.x,
        y: this.pos.y
      };
      return new this.constructor(this.color, pos, this.game);
    }
    /**
     * event listener which will notify the figure that the move is happened
     * so the figure specific can set some parameters.
     * example a pawn can move 2 spaces fron only on it's first move
     *
     * @param {Object} pos
     */

  }, {
    key: "moved",
    value: function moved(pos) {
      var fig = this.game.figureAt(pos);

      if (fig) {
        this.game.score[this.color] += fig.points;
        this.game["delete"](fig);
      }

      this.pos = pos;
      this.selected = false;
    }
    /**
     * show possible moves from the current position
     *
     * @return {Array}
     */

  }, {
    key: "moves",
    value: function moves() {
      return [];
    }
    /**
     * Move selected figure to the new position
     * @param  {Object} pos
     * @return {Boolean}
     */

  }, {
    key: "move",
    value: function move(pos) {
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

  }, {
    key: "canMoveTo",
    value: function canMoveTo(pos) {
      var canMove = false;
      var moves = this.moves();
      moves.forEach(function (move) {
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

  }, {
    key: "getMoves",
    value: function getMoves(h, v) {
      var moves = [];
      var pos;
      var figure;

      for (var i = 1; i <= this.moveLength; i++) {
        pos = {
          x: this.pos.x + h * i,
          y: this.pos.y + v * i
        }; //if the position is not on the board stop

        if (!this.isOnBoard(pos)) {
          break;
        } //there is a figure on the position which is on the same color


        figure = this.game.figureAt(pos);

        if (figure && figure.color == this.color) {
          break;
        } //if the figure is selected and block check go to next field


        if (this.selected == true && this.isKingInCheck(pos)) {
          continue;
        } //Add the position to the possible moves


        moves.push(pos); //there is a figure and the color is not the same as the current one

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

  }, {
    key: "canMoveThere",
    value: function canMoveThere(pos) {
      var figure = this.game.figureAt(pos);

      if ((!figure || figure.color != this.color) && //is the figure on board
      this.isOnBoard(pos) && (this.selected == false || this.selected == true && !this.isKingInCheck(pos))) {
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

  }, {
    key: "isKingInCheck",
    value: function isKingInCheck(pos) {
      var isInCheck = false; //Move the figure from the pos and set it to -1,-1
      //so it doesn't bother when we check

      var opposite_figure = this.game.figureAt(pos);

      if (opposite_figure) {
        opposite_figure.pos = {
          x: -1,
          y: -1
        };
      } //store the original figure position and change the position of the
      //figure to position to check


      var originalPosition = this.pos;
      this.pos = pos; //find the same color king

      isInCheck = this.game.figureByType(this.color, 'king').isInCheck(); //revert to original position and return opposite figure back

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

  }, {
    key: "isOnBoard",
    value: function isOnBoard(pos) {
      if (pos.x >= 0 && pos.x <= 7 && pos.y >= 0 && pos.y <= 7) {
        return true;
      }

      return false;
    }
    /**
     * return opposite color of the color provided
     *
     * @return {String}
     */

  }, {
    key: "getOppositeColor",
    value: function getOppositeColor() {
      return this.color == 'white' ? 'black' : 'white';
    }
    /**
     * Function which accept position on the field like c4 and convert it to pos object
     *
     * @param  {String} field
     * @return {[type]}       [description]
     */

  }, {
    key: "moveOn",
    value: function moveOn(field) {
      return this.move(this.game.convertPosition(field));
    }
  }]);

  return Figure;
}();

/* harmony default export */ __webpack_exports__["default"] = (Figure);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _king_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./king.js */ "./src/king.js");
/* harmony import */ var _queen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queen.js */ "./src/queen.js");
/* harmony import */ var _bishop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bishop.js */ "./src/bishop.js");
/* harmony import */ var _knight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knight.js */ "./src/knight.js");
/* harmony import */ var _rook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rook.js */ "./src/rook.js");
/* harmony import */ var _pawn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pawn.js */ "./src/pawn.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.js */ "./src/history.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * The class responsible for the game containing figures
 * and their moves on the board
 */

var Game =
/*#__PURE__*/
function () {
  /**
   * Direction determine how to draw pieces on the board
   * if "1" - white at the bottom, black at the top
   * if "-1" - opposite
   * @type {Number}
   */

  /**
   * Determine which figures could be selected.
   * if "any" (default) the user could select any figure and make a move
   * if "user" the user could select figures at the bottom of the board
   * the top figures could be moves by a script
   *
   * @type {String} could be "any" or "user"
   */

  /**
   * keep log of the moves in the game
   *
   * @type {Object}
   */

  /**
   * figures on the board
   * @type {Array}
   */

  /**
   * order of the colors
   * @type {Array}
   */

  /**
   * Hold which piece on the board is selected
   * @type {Object}
   */

  /**
   * Game score
   * @type {Object}
   */

  /**
   * Class constructor
   *
   * @param  {Number} direction
   */
  function Game() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _classCallCheck(this, Game);

    _defineProperty(this, "direction", 1);

    _defineProperty(this, "mode", 'any');

    _defineProperty(this, "history", {});

    _defineProperty(this, "figures", []);

    _defineProperty(this, "colors", []);

    _defineProperty(this, "selected", void 0);

    _defineProperty(this, "score", {
      'white': 0,
      'black': 0
    });

    this.direction = direction;
    this.colors = this.direction > 0 ? ['white', 'black'] : ['black', 'white'];
    this.history = new _history_js__WEBPACK_IMPORTED_MODULE_6__["default"](this);
    this.setFigures();
  }
  /**
   * Set figures on the board
   */


  _createClass(Game, [{
    key: "setFigures",
    value: function setFigures() {
      var pos = 7;
      var pawns = 6;

      for (var c in this.colors) {
        if (c % 2) {
          pos = 0;
          pawns = 1;
        }

        this.figures.push(new _king_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.colors[c], {
          x: 4,
          y: pos
        }, this));
        this.figures.push(new _queen_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.colors[c], {
          x: 3,
          y: pos
        }, this));
        this.figures.push(new _bishop_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.colors[c], {
          x: 2,
          y: pos
        }, this));
        this.figures.push(new _bishop_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.colors[c], {
          x: 5,
          y: pos
        }, this));
        this.figures.push(new _knight_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.colors[c], {
          x: 1,
          y: pos
        }, this));
        this.figures.push(new _knight_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.colors[c], {
          x: 6,
          y: pos
        }, this));
        this.figures.push(new _rook_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.colors[c], {
          x: 0,
          y: pos
        }, this));
        this.figures.push(new _rook_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.colors[c], {
          x: 7,
          y: pos
        }, this)); //Draw pawns

        for (var i = 0; i < 8; i++) {
          this.figures.push(new _pawn_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.colors[c], {
            x: i,
            y: pawns
          }, this));
        }
      } //Store the initial state of the board


      this.history.store();
    }
    /**
     * find figure by provided position
     *
     * @param  {Object} pos
     * @return {Object} Figure at the position
     */

  }, {
    key: "figureAt",
    value: function figureAt(pos) {
      return this.figures.filter(function (figure) {
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

  }, {
    key: "convertPosition",
    value: function convertPosition(field) {
      var pos = {
        x: null,
        y: null
      };

      if (field.length != 2) {
        return false;
      }

      var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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

  }, {
    key: "isEmpty",
    value: function isEmpty(pos) {
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

  }, {
    key: "figureByType",
    value: function figureByType(color, figureType) {
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

  }, {
    key: "figuresByType",
    value: function figuresByType(color) {
      var figureClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.figures.filter(function (figure) {
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

  }, {
    key: "canMove",
    value: function canMove(color) {
      //if figure color is the same as the turn color
      return color == this.history.getTurnColor();
    }
    /**
     * set which position is selected
     *
     * @param  {Object} pos
     */

  }, {
    key: "select",
    value: function select(pos) {
      if (!pos) {
        return false;
      } //unselect previous figures


      this.figures.forEach(function (figure) {
        figure.selected = false;
      });
      var figure = this.figureAt(pos);

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

  }, {
    key: "canSelect",
    value: function canSelect(color) {
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

  }, {
    key: "move",
    value: function move(pos) {
      if (!this.selected || !this.selected.canMoveTo(pos)) {
        return false;
      }

      var initialPos = this.selected.pos;
      this.selected.moved(pos); //update history

      this.history.store(initialPos, pos);
      this.selected = null;
      return true;
    }
    /**
     * The figure has been taken from the board
     *
     * @param  {Object} figure
     */

  }, {
    key: "delete",
    value: function _delete(figure) {
      var figures = [];
      this.figures.forEach(function (fig) {
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

  }, {
    key: "gameOver",
    value: function gameOver() {
      if (!this.history.isOnLastPosition()) {
        return false;
      }

      var isGameOver = false;
      var king = this.figureByType(this.history.getTurnColor(), 'king');

      if (king.isInCheck() && king.moves().length == 0 && !king.canBeProtected()) {
        throw king.getOppositeColor() + ' wins'; //return true;
      } //stalemate


      if (king.moves().length == 0 && !king.canBeProtected()) {
        throw 'The game is draw'; //return true;
      } //quirk - only 2 kings left


      if (this.figures.length == 2) {
        throw 'The game is draw'; //return true;
      } //quirk - the history repeats


      if (this.history.isRepeating()) {
        throw 'The game is draw'; //return true;
      }

      return false;
    }
  }, {
    key: "clickedOnBoard",
    value: function clickedOnBoard(pos) {
      if (!pos) {
        return;
      }

      if (!this.selected) {
        this.select(pos);
        return;
      }

      if (this.selected && this.figureAt(pos) && this.selected.color == this.figureAt(pos).color) {
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

  }, {
    key: "figureOn",
    value: function figureOn(field) {
      return this.figureAt(this.convertPosition(field));
    }
    /**
     * Get figures by given color
     * @param  {String} color
     * @return {Array}
     */

  }, {
    key: "getFigures",
    value: function getFigures(color) {
      var figures = [];
      return this.figures.filter(function (figure) {
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

  }, {
    key: "whosTurn",
    value: function whosTurn() {
      return this.history.getTurnColor();
    }
    /**
     * Lock the game so only the user with figures at the bottom can move
     * @return {Game}
     */

  }, {
    key: "lock",
    value: function lock() {
      this.mode = 'user';
      return this;
    }
    /**
     * Unlock the game mode so anyone (at least the computer can move)
     * @return {Game}
     */

  }, {
    key: "unlock",
    value: function unlock() {
      this.mode = 'any';
      return this;
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var History =
/*#__PURE__*/
function () {
  /**
   * game position which hold backward-forward in history
   * @type {Number}
   */

  /**
   * Array of game moves
   * @type {Array}
   */

  /**
   * Game object instance
   * @type {Object}
   */

  /**
   * Class constructor
   *
   * @param  {Object} game
   */
  function History(game) {
    _classCallCheck(this, History);

    _defineProperty(this, "position", 0);

    _defineProperty(this, "moves", []);

    _defineProperty(this, "game", void 0);

    this.game = game;
  }
  /**
   * Clone provided array of figures
   *
   * @param  {Array} figures
   * @return {Array}
   */


  _createClass(History, [{
    key: "cloneFigures",
    value: function cloneFigures(figures) {
      var f = [];
      figures.forEach(function (figure) {
        f.push(figure.clone());
      }.bind(this));
      return f;
    }
    /**
     * Backward in history
     *
     * @return {Boolean}
     */

  }, {
    key: "back",
    value: function back() {
      //there is backward moves
      var direction = this.position - 1;

      if (typeof this.moves[direction] == 'undefined') {
        return false;
      } //Set game figures to the history.move


      this.game.figures = this.cloneFigures(this.moves[direction].figures);
      this.position--;
      return true;
    }
    /**
     * Check whether there is a back move
     *
     * @return {Boolean}
     */

  }, {
    key: "hasBack",
    value: function hasBack() {
      return this.position > 0;
    }
    /**
     * Forward in history
     *
     * @return {Boolean}
     */

  }, {
    key: "forward",
    value: function forward() {
      //there is forward moves
      var direction = this.position + 1;

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

  }, {
    key: "hasForward",
    value: function hasForward() {
      return this.position < this.moves.length - 1;
    }
    /**
     * Store move in history
     *
     * @param  {Object} from
     * @param  {Object} to
     */

  }, {
    key: "store",
    value: function store(from, to) {
      //reset the position in history
      //so if the game is in certain position we remove any future moves
      //and reset the moves from that place
      if (this.position < this.moves.length - 1) {
        this.moves = this.moves.slice(0, this.position + 1);
      } //add figues


      var figures = this.cloneFigures(this.game.figures);
      var figure = this.game.selected ? this.game.selected.clone() : null;
      this.moves.push({
        'figure': figure,
        'figures': figures,
        'from': from ? {
          x: from.x,
          y: from.y
        } : null,
        'to': to ? {
          x: to.x,
          y: to.y
        } : null
      }); //update position

      this.position = this.moves.length - 1;
    }
    /**
     * Get move from the history
     *
     * @param  {Number} index
     * @return {Object}
     */

  }, {
    key: "getMove",
    value: function getMove() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      //if it's negative, use it backwards
      index = index < 0 ? this.moves.length + index : index; //if there is such node

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

  }, {
    key: "getTurnColor",
    value: function getTurnColor() {
      var dir = this.game.direction > 0 ? 0 : 1;
      var index = Math.abs(this.position % 2 - dir);
      return this.game.colors[index];
    }
    /**
     * function which check if the oponents repeat themselves
     * e.g. stalemate
     *
     * @return {Boolean} [description]
     */

  }, {
    key: "isRepeating",
    value: function isRepeating() {
      var repeating = 3;
      var lastMove = this.moves[this.moves.length - 1];
      var rep = 0;

      for (var i = 1; i <= this.moves.length; i = i + 4) {
        if (i <= 1) {
          continue;
        }

        if ( //check if there is to position (initial one is not set)
        this.moves[this.moves.length - i].to && //check x
        lastMove.to.x == this.moves[this.moves.length - i].to.x && //check y
        lastMove.to.y == this.moves[this.moves.length - i].to.y) {
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

  }, {
    key: "isOnLastPosition",
    value: function isOnLastPosition() {
      return this.position == this.moves.length - 1 ? true : false;
    }
  }]);

  return History;
}();

/* harmony default export */ __webpack_exports__["default"] = (History);

/***/ }),

/***/ "./src/king.js":
/*!*********************!*\
  !*** ./src/king.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure.js */ "./src/figure.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var King =
/*#__PURE__*/
function (_Figure) {
  _inherits(King, _Figure);

  function King() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, King);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(King)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sign", 'king');

    _defineProperty(_assertThisInitialized(_this), "moveLength", 1);

    _defineProperty(_assertThisInitialized(_this), "first_move", true);

    return _this;
  }

  _createClass(King, [{
    key: "moves",

    /**
     * Possible moves of the king
     *
     * @return {Array}
     */
    value: function moves() {
      var moves = [];
      moves = moves.concat(this.getMoves(1, 1));
      moves = moves.concat(this.getMoves(1, -1));
      moves = moves.concat(this.getMoves(-1, 1));
      moves = moves.concat(this.getMoves(-1, -1));
      moves = moves.concat(this.getMoves(0, 1));
      moves = moves.concat(this.getMoves(0, -1));
      moves = moves.concat(this.getMoves(1, 0));
      moves = moves.concat(this.getMoves(-1, 0)); //Also add castle moves

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

  }, {
    key: "getMoves",
    value: function getMoves(h, v) {
      //find the moves in the direction (it's one move actually)
      var moves = _get(_getPrototypeOf(King.prototype), "getMoves", this).call(this, h, v); //no possible moves in that direction


      if (!moves.length) {
        return [];
      } //is close to the opponent king.
      //We check against the first move as the king has only one


      if (this.isCloseToOpponent(moves[0])) {
        return [];
      } //Is the figure in check
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

  }, {
    key: "isCloseToOpponent",
    value: function isCloseToOpponent(pos) {
      var o = this.game.figureByType(this.getOppositeColor(), 'king'); //position x and position y are near to other king

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

  }, {
    key: "isInCheck",
    value: function isInCheck(pos) {
      var isInCheck = false; //store original figure position

      var originalPosition = this.pos;
      var opposite_figure; //if position is provided to the function

      if (pos) {
        //find the figure on the checked position and set it
        //outside of the board
        opposite_figure = this.game.figureAt(pos);

        if (opposite_figure) {
          opposite_figure.pos = {
            x: -1,
            y: -1
          };
        }
      } //if no position is provided use the current's figure position


      pos = pos || this.pos;
      this.pos = pos;
      var figures = this.game.figures;
      figures.forEach(function (figure) {
        if (this.color != figure.color && !(figure instanceof King) && figure.canMoveTo(pos)) {
          isInCheck = true;
        }
      }.bind(this)); //revert original positions

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

  }, {
    key: "moved",
    value: function moved(pos) {
      this.castle(pos);
      this.first_move = false;

      _get(_getPrototypeOf(King.prototype), "moved", this).call(this, pos);
    }
    /**
     * Check whether the king can make castle
     *
     * @return {Boolean}
     */

  }, {
    key: "canCastle",
    value: function canCastle() {
      var moves = []; //king is moved already so can't castle

      if (!this.first_move) {
        return [];
      }

      var rook; //rook on the left

      rook = this.game.figureAt({
        x: 0,
        y: this.pos.y
      });

      if (rook && rook.first_move == true && //check if there is any figure in the spaces between rook and the king
      this.game.isEmpty({
        x: rook.pos.x + 1,
        y: rook.pos.y
      }) && this.game.isEmpty({
        x: rook.pos.x + 2,
        y: rook.pos.y
      }) && this.game.isEmpty({
        x: rook.pos.x + 3,
        y: rook.pos.y
      }) && //check those positions are in check
      !this.isInCheck({
        x: rook.pos.x + 1,
        y: rook.pos.y
      }) && !this.isInCheck({
        x: rook.pos.x + 2,
        y: rook.pos.y
      }) && !this.isInCheck({
        x: rook.pos.x + 3,
        y: rook.pos.y
      })) {
        moves.push({
          x: this.pos.x - 2,
          y: this.pos.y
        });
      } //rook on the right


      rook = this.game.figureAt({
        x: 7,
        y: this.pos.y
      });

      if (rook && rook.first_move == true && //check if there is any figure in the spaces between rook and the king
      this.game.isEmpty({
        x: rook.pos.x - 1,
        y: rook.pos.y
      }) && this.game.isEmpty({
        x: rook.pos.x - 2,
        y: rook.pos.y
      }) && //check those positions are in check
      !this.isInCheck({
        x: rook.pos.x - 1,
        y: rook.pos.y
      }) && !this.isInCheck({
        x: rook.pos.x - 2,
        y: rook.pos.y
      })) {
        moves.push({
          x: this.pos.x + 2,
          y: this.pos.y
        });
      }

      return moves;
    }
    /**
     * actual castle action
     *
     * @param  {Object} pos
     */

  }, {
    key: "castle",
    value: function castle(pos) {
      //the king doesn't move 2 positions so no castle
      if (Math.abs(this.pos.x - pos.x) != 2) {
        return;
      } //check which direction the king moved left or right


      if (pos.x > this.pos.x) {
        //Rook
        this.game.figureAt({
          x: 7,
          y: this.pos.y
        }).pos = {
          x: pos.x - 1,
          y: this.pos.y
        };
      } else {
        //Rook
        this.game.figureAt({
          x: 0,
          y: this.pos.y
        }).pos = {
          x: pos.x + 1,
          y: this.pos.y
        };
      }
    }
    /**
     * Check whether the king can be protected by any figure
     *
     * @return {Boolean}
     */

  }, {
    key: "canBeProtected",
    value: function canBeProtected() {
      var king = this;
      var isProtected = false;
      var figures = this.game.figures; //Check all figures of the same color if they have any moves

      figures.forEach(function (figure) {
        figure.selected = true;

        if (figure != king && this.color == figure.color && figure.moves().length > 0) {
          isProtected = true;
        }

        figure.selected = false;
      }.bind(this)); //Because we reset all selected this will make the currently
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

  }, {
    key: "clone",
    value: function clone() {
      var figure = _get(_getPrototypeOf(King.prototype), "clone", this).call(this);

      figure.first_move = this.first_move;
      return figure;
    }
  }]);

  return King;
}(_figure_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (King);

/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure.js */ "./src/figure.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Knight =
/*#__PURE__*/
function (_Figure) {
  _inherits(Knight, _Figure);

  function Knight() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Knight);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Knight)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sign", 'knight');

    _defineProperty(_assertThisInitialized(_this), "points", 3);

    _defineProperty(_assertThisInitialized(_this), "moveLength", 1);

    return _this;
  }

  _createClass(Knight, [{
    key: "moves",

    /**
     * Figure moves
     *
     * @return {Array}
     */
    value: function moves() {
      var moves = [];
      moves = moves.concat(this.getMoves(1, 0));
      moves = moves.concat(this.getMoves(-1, 0));
      moves = moves.concat(this.getMoves(0, 1));
      moves = moves.concat(this.getMoves(0, -1));
      return moves;
    }
    /**
     * rewriting the function as knights has very specific move
     *
     * @param  {Number} h could be -1, 0 or 1
     * @param  {Number} v could be -1, 0 or 1
     * @return {Array}
     */

  }, {
    key: "getMoves",
    value: function getMoves(h, v) {
      var moves = [];
      var pos;
      var figure;
      var i = 2;
      var j = 1; //on one site

      pos = {
        x: this.pos.x + h * i + j * v,
        y: this.pos.y + v * i + j * h
      };

      if (this.canMoveThere(pos)) {
        moves.push(pos);
      } //on another side


      pos = {
        x: this.pos.x + h * i + -1 * j * v,
        y: this.pos.y + v * i + -1 * j * h
      };

      if (this.canMoveThere(pos)) {
        moves.push(pos);
      }

      return moves;
    }
  }]);

  return Knight;
}(_figure_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Knight);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ "./src/board.js");




/**
 * Define images
 * @type {Object}
 */

var pp = new p5(function (p5) {
  /**
   * Chess board
   * @type {Board}
   */
  var board;
  /**
   * what is the direction (white below is 1, black below is -1)
   * @type {Number}
   */

  var direction = Number(attr('direction', 1));
  /**
   * How to handle moves. If mode is:
   * any - the user could move white or black no matter
   * where they are placed (direction)
   * user - if mode is user, then the user could move only figures
   * at the bottom of the board
   *
   * @type {String}
   */

  var mode = attr('mode', 'any');
  /**
   * Theme - colors and sizes
   * @type {Object}
   */

  var theme = {
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
    /**
     * Preload figures
     */

  };

  p5.preload = function () {
    p5.images = {
      white: {},
      black: {}
    };
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
  };
  /**
   * set up the canvas + set instance of game and board
   */


  p5.setup = function () {
    var canvas = p5.createCanvas(theme.tiles.width * 8 + theme.offset * 2, theme.tiles.width * 8 + theme.offset * 2);
    canvas.parent('chess');
    board = new _board_js__WEBPACK_IMPORTED_MODULE_1__["default"](p5, theme, direction, mode); //Give access to the game  instance to the window object

    window.game = board.game; //trigger an event that the game is ready

    window.dispatchEvent(new Event('chess.ready'));
  };
  /**
  * Draw the game
  */


  p5.draw = function () {
    //Set refresh frame rate
    p5.frameRate(10); //Draw the board

    board.draw();
  };
  /**
   * handle mouse pressed over the board
   */


  p5.mousePressed = function () {
    //logic for handling game clicks
    board.game.clickedOnBoard(board.getPosition());
  };
  /**
  * Fetch attribute from dom game element
  *
  * @param  {String} attribute - name without prefix 'data-'
  * @param  {String} defaultValue
  * @return {String}
  */


  function attr(attribute, defaultValue) {
    var el = document.getElementById('chess');

    if (el.getAttribute('data-' + attribute)) {
      return el.getAttribute('data-' + attribute);
    } else if (el.getAttribute(attribute)) {
      return el.getAttribute(attribute);
    } else {
      return defaultValue;
    }
  }
});

/***/ }),

/***/ "./src/pawn.js":
/*!*********************!*\
  !*** ./src/pawn.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure.js */ "./src/figure.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Pawn =
/*#__PURE__*/
function (_Figure) {
  _inherits(Pawn, _Figure);

  function Pawn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pawn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pawn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sign", 'pawn');

    _defineProperty(_assertThisInitialized(_this), "points", 1);

    _defineProperty(_assertThisInitialized(_this), "first_move", true);

    return _this;
  }

  _createClass(Pawn, [{
    key: "moved",

    /**
     * Event listener for the case when the piece has been moved
     *
     * @param  {Object} pos
     */
    value: function moved(pos) {
      this.first_move = false;
      this.overtaken(pos);

      _get(_getPrototypeOf(Pawn.prototype), "moved", this).call(this, pos);

      this.reachEnd();
    }
    /**
     * Case where the pawn is overtaken (initial first 2 space move
     *
     * @param {Object} pos
     */

  }, {
    key: "overtaken",
    value: function overtaken(pos) {
      var figureAtPos = this.game.figureAt(pos);
      var dir = this.getDirection();

      if (this.pos.x == pos.x && this.game.isEmpty({
        x: pos.x,
        y: pos.y + 1 * dir
      })) {
        return;
      }

      var overtaken = this.game.figureAt({
        x: pos.x,
        y: pos.y + 1 * dir
      });

      if (typeof figureAtPos == 'undefined' && overtaken && overtaken.color != this.color && overtaken.sign == this.sign) {
        this.game.score[this.color] += overtaken.points;
        this.game["delete"](overtaken);
      }
    }
    /**
     * Reach end of the board (and become a queen)
     * TODO: Make the user to select the new figure
     */

  }, {
    key: "reachEnd",
    value: function reachEnd() {
      if (this.pos.y == 0 || this.pos.y == 7) {
        var color = this.color;
        var pos = this.pos; //Delete the pawn

        this.game["delete"](this); //assign a queen on the same place

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

  }, {
    key: "getDirection",
    value: function getDirection() {
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

  }, {
    key: "moves",
    value: function moves() {
      var moves = [];
      var dir = this.getDirection(); //single move

      if (this.game.isEmpty({
        x: this.pos.x,
        y: this.pos.y - 1 * dir
      }) && this.canMoveThere({
        x: this.pos.x,
        y: this.pos.y - 1 * dir
      })) {
        moves.push({
          x: this.pos.x,
          y: this.pos.y - 1 * dir
        });
      } //initial move (2 positions jump)


      if (this.first_move == true && this.game.isEmpty({
        x: this.pos.x,
        y: this.pos.y - 2 * dir
      }) && this.game.isEmpty({
        x: this.pos.x,
        y: this.pos.y - 1 * dir
      }) && this.canMoveThere({
        x: this.pos.x,
        y: this.pos.y - 2 * dir
      })) {
        moves.push({
          x: this.pos.x,
          y: this.pos.y - 2 * dir
        });
      } //attack


      if (this.canAttack({
        x: this.pos.x - 1,
        y: this.pos.y - 1 * dir
      }) && this.canMoveThere({
        x: this.pos.x - 1,
        y: this.pos.y - 1 * dir
      })) {
        moves.push({
          x: this.pos.x - 1,
          y: this.pos.y - 1 * dir
        });
      }

      if (this.canAttack({
        x: this.pos.x + 1,
        y: this.pos.y - 1 * dir
      }) && this.canMoveThere({
        x: this.pos.x + 1,
        y: this.pos.y - 1 * dir
      })) {
        moves.push({
          x: this.pos.x + 1,
          y: this.pos.y - 1 * dir
        });
      } //special case when the previous move is pawn and has moved 2 places


      var lastMove = this.game.history.getMove();

      if (lastMove && lastMove.figure instanceof Pawn && //check if previous move has 2 fields
      Math.abs(lastMove.from.y - lastMove.to.y) == 2 && ( //check if this happened next to the current figure
      this.pos.x == lastMove.to.x - 1 || this.pos.x == lastMove.to.x + 1) && //check if the current figure was overtaken by the opposite
      this.pos.y == lastMove.to.y) {
        //detect on which side to move
        if (this.pos.x == lastMove.to.x - 1) {
          moves.push({
            x: this.pos.x + 1,
            y: this.pos.y - 1 * dir
          });
        } else if (this.pos.x == lastMove.to.x + 1) {
          moves.push({
            x: this.pos.x - 1,
            y: this.pos.y - 1 * dir
          });
        } //moves.push(x: this.pos.x)

      }

      return moves;
    }
    /**
     * Determine if there are pieces in the specified position pos
     *
     * @param  {Object} pos
     * @return {Boolean}
     */

  }, {
    key: "canAttack",
    value: function canAttack(pos) {
      var figure = this.game.figureAt(pos);

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

  }, {
    key: "clone",
    value: function clone() {
      var figure = _get(_getPrototypeOf(Pawn.prototype), "clone", this).call(this);

      figure.first_move = this.first_move;
      return figure;
    }
  }]);

  return Pawn;
}(_figure_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Pawn);

/***/ }),

/***/ "./src/queen.js":
/*!**********************!*\
  !*** ./src/queen.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure.js */ "./src/figure.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Queen =
/*#__PURE__*/
function (_Figure) {
  _inherits(Queen, _Figure);

  function Queen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Queen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Queen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sign", 'queen');

    _defineProperty(_assertThisInitialized(_this), "points", 9);

    return _this;
  }

  _createClass(Queen, [{
    key: "moves",

    /**
     * Figure moves
     *
     * @return {Array}
     */
    value: function moves() {
      var moves = [];
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
  }]);

  return Queen;
}(_figure_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Queen);

/***/ }),

/***/ "./src/rook.js":
/*!*********************!*\
  !*** ./src/rook.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _figure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure.js */ "./src/figure.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Rook =
/*#__PURE__*/
function (_Figure) {
  _inherits(Rook, _Figure);

  function Rook() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Rook);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Rook)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sign", 'rook');

    _defineProperty(_assertThisInitialized(_this), "points", 5);

    _defineProperty(_assertThisInitialized(_this), "first_move", true);

    return _this;
  }

  _createClass(Rook, [{
    key: "moved",

    /**
     * Event listener
     *
     * @param  {Object} pos
     */
    value: function moved(pos) {
      this.first_move = false;

      _get(_getPrototypeOf(Rook.prototype), "moved", this).call(this, pos);
    }
    /**
     * Figure moves
     *
     * @return {Array}
     */

  }, {
    key: "moves",
    value: function moves() {
      var moves = [];
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

  }, {
    key: "clone",
    value: function clone() {
      var figure = _get(_getPrototypeOf(Rook.prototype), "clone", this).call(this);

      figure.first_move = this.first_move;
      return figure;
    }
  }]);

  return Rook;
}(_figure_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Rook);

/***/ })

/******/ });
//# sourceMappingURL=chess.js.map