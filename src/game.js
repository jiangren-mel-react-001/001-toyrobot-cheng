import React from 'react';
import { GameMap, GameControl, History } from './game-map';


export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapSize: {x: 4, y: 4},
            history: [{x: 0, y: 3, direction: 'A'}],
            step : 0
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
        const current = this.state.history[this.state.history.length - 1];
        let targetPosition = {...current, ...{y: current.y - 1}};
        if (this.availablePosition(targetPosition, this.state.mapSize)) {
            this.setState({...this.state, ...{
                history: [...this.state.history, targetPosition],
                step: this.state.history.length
            }});
        } else {
            alert('Could not move.')
        }
    }
    onStep = (index) => {
        this.setState({...this.state, ...{step: index}});
    }
    render() {
        const current = this.state.history[this.state.step];
        return React.createElement(
            'div',
            {className: 'game'},
            React.createElement(GameMap, {mapSize: this.state.mapSize, robotPosition: current}),
            React.createElement(GameControl, {onCommandUp: this.onCommandUp}),
            React.createElement(History, {
                steps: this.state.history.length,
                onClick: this.onStep
            }
        ));
    }
}