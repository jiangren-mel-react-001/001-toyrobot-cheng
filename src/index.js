import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function Cell(props) {
    return React.createElement('div', {className: 'map-cell'}, props.value);
}

class GameMap extends React.Component {
    render() {
        return React.createElement(
            'div', {className: 'game-map'},
            React.createElement(
                'div', {className: 'map-row'},
                React.createElement(Cell, {value: 'A'}),
                React.createElement(Cell),
                React.createElement(Cell),
                React.createElement(Cell)
            ),
            React.createElement(
                'div', {className: 'map-row'},
                React.createElement(Cell),
                React.createElement(Cell),
                React.createElement(Cell),
                React.createElement(Cell)
            ),
            React.createElement(
                'div', {className: 'map-row'},
                React.createElement(Cell),
                React.createElement(Cell),
                React.createElement(Cell),
                React.createElement(Cell)
            ),
            React.createElement(
                'div', {className: 'map-row'},
                React.createElement(Cell),
                React.createElement(Cell),
                React.createElement(Cell),
                React.createElement(Cell)
            )
        );
    }
}

class GameControl extends React.Component {
    render() {
        return React.createElement(
            'div', {className: 'game-control'},
            React.createElement('button', {id: 'command-up'}, '^')
        )
    }
}

class Game extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: 'game'},
            React.createElement(GameMap),
            React.createElement(GameControl)
        );
    }
}

// ========================================

ReactDom.render(
    React.createElement(Game),
    document.getElementById('root')
);
