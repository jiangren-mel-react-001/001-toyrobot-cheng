import React from 'react';

export function Cell(props) {
    return React.createElement('div', {className: 'map-cell'}, props.value);
}

export function GameMap(props) {
    let rows = [];
    for (let y = 0; y < props.mapSize.y; y++) {
        let cells = [];
        for (let x = 0; x < props.mapSize.x; x++) {
            let text = '';
            if (x === props.robotPosition.x && y === props.robotPosition.y) {
                text = props.robotPosition.direction;
            }

            cells.push(React.createElement(Cell, {value: text, key: x}));
        }
        rows.push(React.createElement('div', {className: 'map-row', key: y}, cells));
    }
    return React.createElement('div', {className: 'game-map'}, rows);
}

export function GameControl(props) {
    return React.createElement(
        'div', {className: 'game-control'},
        React.createElement('button', {onClick: props.onCommandUp}, '^')
    );
}

export function History(props) {
    let stepList = [];
    for (let i = 0; i < props.steps; i++) {
        stepList.push(React.createElement(
            'button',
            {onClick: () => props.onClick(i), key: i},
            `step ${i}`
        ));
    }
    return React.createElement('div', {className: 'history'}, stepList);
}