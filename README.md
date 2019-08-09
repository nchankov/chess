# Chess game

Simple chess game created with P5JS Library. Tried to create as many rules as possible, but if you notice something is missing, do let me 
know and I will try to implement it.

## Installation

You need to include p5js and p5.dom scripts as well as dist/app.js in your html document. See index.html for reference

## Configuration

The chess board is generated within the element with id #chess

The board style could be configured by using html attributes like so:

```html
<div id="chess" tiles-width="100"></div>
```

or

```html
<div id="chess" data-tiles-width="100"></div>
```

Here is the full list of parameters which could be passed:

| Parameter                        | Default Value | Description                                                                 |
|----------------------------------|---------------|-----------------------------------------------------------------------------|
| direction                        | 1             | If it's 1 means whites at the bottom or if it's -1 it's black at the bottom |
| offset                           | 50            | Offset arround the board in pixels                                          |
| background                       | #888888       | Background of the canvas                                                    |
| tiles-black-color                | #AAAAAA       | Background color of the black tiles                                         |
| tiles-white-color                | #FFFFFF       | Background color of the white tiles                                         |
| tiles-width                      | 100           | Width in pixels of single tile                                              |
| tiles-selected-background        | #158000       | Background color of the tile when the figure is selected                    |
| tiles-selected-border-color      | #FB1900       | Border color around the selected figure                                     |
| tiles-selected-border-size       | 3             | Border size in pixels                                                       |
| tiles-moves-background           | #0512FF       | Possible moves indicator color, a dot on the empty square                   |
| tiles-moves-diameter             | 20            | Diameter of the dot                                                         |
| tiles-moves-figure-background    | #787878       | Background of the indicator when on the tile there is a figure              |
| tiles-moves-figure-diameter      | 100           | Diameter of the square                                                      |
| labels-color                     | #FFFFFF       | Text color of the labels around the board                                   |
| over-background                  | #FB1900       | Background of the gameover popup                                            |
| over-color                       | #FFFFFF       | Text color of the labels in the gameover popup                              |
| over-size                        | 40            | Font size of the Game Over text                                             |
| over-reason-size                 | 25            | Font size of the Game over reason                                           |

## How to access the game object

You could access the game object like this:

```javascript
window.addEventListener('chess.ready', function() {
	//Do something with this
	window.game;
}, false);
console.log(window.game);
```

or just

```javascript
window.addEventListener('chess.ready', function() {
	//Do something with this
	game;
}, false);
```

## Here are some usefull functions of the game object

### Get figures of a particular color

```javascript
let figures = game.getFigures('white');
```

### Get who's turn is it return "white" or "black"

```javascript
let figures = game.whosTurn();
```

### Get figure on particular field by using X and Y coordinates

X and Y could be value between 0 and 7

```javascript
let figures = game.figureAt({x: 1, y: 4});
```

### Move figure by using X and Y coordinates

```javascript
let figures = game.figureAt({x: 1, y: 4}).move({x: 3, y: 4});
```

### Get figure on particular field by using field chess coordinate

```javascript
let figures = game.figureOn('D2');
```

### Move figure with chess coordinates

```javascript
let figures = game.figureOn('D2').moveOn('D4');
```

### Get figure moves

```javascript
let figures = game.figureOn('D2').moves();
```

## Useful game attributes

### game.figures

List of all figures on the board

### game.score

not used on the board but will count the points of the two players

### game.history

list of moves so far

## Useful history functions

History object could be accessed like this

```javascript
let history = game.history
```

### moves

get moves so far

```javascript
game.history.moves
```

### Back

go back 1 move in history. Before using this it could be checked if there is more moves in back with ```game.history.hasBack()```

```javascript
game.history.back()
```

### Forward

go forward 1 move in history. Before using this it could be checked if there is more moves in forward with ```game.history.hasForward()```

```javascript
game.history.forward()
```