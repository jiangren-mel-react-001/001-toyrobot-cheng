import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function Cell(props) {
    return React.createElement('div', {className: 'map-cell'}, props.value);
}

function GameMap(props) {
    let rows = [];
    for (let y = 0; y < props.value.mapSize.y; y++) {
        let cells = [];
        for (let x = 0; x < props.value.mapSize.x; x++) {
            let text = '';
            if (x === props.value.robotPosition.x && y === props.value.robotPosition.y) {
                text = props.value.robotPosition.direction;
            }

            cells.push(React.createElement(Cell, {value: text, key: x}));
        }
        rows.push(React.createElement('div', {className: 'map-row', key: y}, cells));
    }
    return React.createElement('div', {className: 'game-map'}, rows);
}

function GameControl(props) {
    return React.createElement(
        'div', {className: 'game-control'},
        React.createElement('button', {onClick: props.onCommandUp}, '^')
    )
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapSize: {x: 4, y: 4},
            robotPosition: {x: 0, y: 3, direction: 'A'}
        }
    }
    availablePosition(position, mapSize) {
        if (position.x >=0 && position.x < mapSize.x && position.y >=0 && position.y < mapSize.y) {
            return true;
        } else {
            return false;
        }
    }
    onCommandUp = () => {
        let targetPosition = {...this.state.robotPosition, ...{y: this.state.robotPosition.y - 1}};
        if (this.availablePosition(targetPosition, this.state.mapSize)) {
            this.setState({...this.state, ...{robotPosition: targetPosition}});
        } else {
            alert('Could not move.')
        }
    }
    render() {
        return React.createElement(
            'div',
            {className: 'game'},
            React.createElement(GameMap, {value: this.state}),
            React.createElement(GameControl, {onCommandUp: this.onCommandUp}
            )
        );
    }
}

// ========================================

ReactDom.render(
    React.createElement(Game),
    document.getElementById('root')
);
