
ReactDOM.render(
    React.createElement('h1', null, 'Hello Hi'),
    document.getElementById('root')
);

class Component {
    constructor(props) {
        this.props = props;
    }
    render() {
        return null;
    }
}

class GameMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gameMap = document.createElement('div');
        gameMap.setAttribute('class', 'game-map');
        for (let row = 0; row < this.props.state.mapSize.y; row++) {
            let aRow = document.createElement('div');
            aRow.setAttribute('class', 'map-row');
            for (let column = 0; column < this.props.state.mapSize.x; column++) {
                let cellText = ''
                if (this.props.state.robotPosition.x === column && this.props.state.robotPosition.y === row) {
                    cellText = 'A'
                }
                let aCell = document.createElement('div');
                aCell.setAttribute('class', 'map-cell');
                aCell.innerText = cellText;
                aRow.appendChild(aCell);
            }
            gameMap.appendChild(aRow);
        }
        return gameMap;
    }
}

const DIRECTION = {
    north: 'A', east: '->', south: 'V', west: '<-'
};
var state = {
    robotPosition: {
        x: 0, y: 3,
    },
    mapSize: {
        x: 4, y: 4
    },
    toIndex: function () {
        return this.robotPosition.x + this.robotPosition.y * this.mapSize.y;
    },
    history: [{ x: 0, y: 3 }]
};
availablePosition = (newPosition, mapSize) => {
    if (newPosition.x >= 0 && newPosition.x < mapSize.x
        && newPosition.y >= 0 && newPosition.y < mapSize.y
    ) {
        return true;
    } else {
        return false;
    }
}
function move(theState, newPosition) {
    // let newState = Object.assign({}, theState, {robotPosition: newPosition});
    let newState = {
        ...theState, ...{
            robotPosition: newPosition,
            history: [...theState.history, newPosition]
        }
    };
    return newState;
}

function init() {
    // state.robotPosition.y = 3;
}
function onCommandUp(distance = 1) {
    var { x: currentX, y:
        currentY } = state.robotPosition;
    var newPosition = { x: currentX, y: currentY - distance };
    var available = availablePosition(newPosition, state.mapSize);
    if (!available) {
        // alert('Position [' + newPosition.x + ', ' + newPosition.y + '] is not invalid.');
        alert(`Position [${newPosition.x}, ${newPosition.y}] is not invalid.`);
        return;
    }
    state = move(state, newPosition);
    render(state);
}
function render(theState) {
    let gameMap = new GameMap({ state: theState });
    let rootElement = document.querySelector('#game-board');
    rootElement.innerHTML = '';
    rootElement.appendChild(gameMap.render());
}
// init();
// render(state);