(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Game {
    constructor (elements, model) {
        this.elements = elements
        this.model = model
    }

    start_turn (player) {
        console.log(`${player} turn`)
    }
}


module.exports = {
    create: (elements, model) => { return new Game(elements, model) }
}
},{}],2:[function(require,module,exports){
//
// Copyright (c) 2021, Matthew Voss
//
// Permission to use, copy, modify, and/or distribute this software for
// any purpose with or without fee is hereby granted, provided that the
// above copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

const create_game = require('./game.js').create
const create_model = require('./model').create

// Return a map of simple element names and all corresponding html elements from the page that are needed to
// run the game.
//
// {
//   board: <html_board_element>
//   zoom_in: <html_zoom_in_button>
//   ...
// }
function html_elements () {
    let selectors = {
        board: 'board',
        board_canvas: 'board canvas',
        select_next: 'button[name="select_next"]',
        select_prev: 'button[name="select_prev"]',
    }

    let ret = Object.keys(selectors).reduce((m, k) => {
        m[k] = window.document.querySelector(selectors[k])
        if (m[k] == null) {
            throw Error('Missing html element: ' + k)
        }
        return m
    }, {})

    ret.bg_canvas = window.document.createElement('canvas')
    return ret
}

function post_load () {
    let model = create_model('dummy_variable')
    let game = create_game(html_elements(), model)
    game.start_turn('PLAYER 1')
}

window.addEventListener('load', () => { post_load()})
},{"./game.js":1,"./model":3}],3:[function(require,module,exports){
class GameModel {
    constructor (input) {
        this.cards = []
        this.lanes = []
    }
}

module.exports = {
    create: (input) => { return new GameModel(input) }
}
},{}]},{},[2]);
