
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
    history: [{x: 0, y: 3}]
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
    let newState = {...theState, ...{
        robotPosition: newPosition,
        history: [...theState.history, newPosition]
    }};
    return newState;
}

function init() {
    // state.robotPosition.y = 3;
}
function onCommandUp(distance = 1) {
    var {x: currentX, y: 
        currentY} = state.robotPosition;
    var newPosition = { x: currentX, y: currentY - distance };
    var available = availablePosition(newPosition, state.mapSize);
    if (!available) {
        // alert('Position [' + newPosition.x + ', ' + newPosition.y + '] is not invalid.');
        alert(`Position [${newPosition.x}, ${newPosition.y}] is not invalid.`);
    }
    state = move(state, newPosition);
    render(state);
}
function render(theState) {
    let gameBoardHtml = `
        <div class="game-map">
    `;
    for (let row = 0; row < theState.mapSize.y; row++) {
        gameBoardHtml += `
            <div class="map-row">
        `;
        for (let column = 0; column < theState.mapSize.x; column++) {
            let cellText = ''
            if (theState.robotPosition.x === column && theState.robotPosition.y === row) {
                cellText = 'A'
            }
            gameBoardHtml += `
                <div class="map-cell">${cellText}</div>
            `;
        }
        gameBoardHtml += `
            </div>
        `;
    }
    gameBoardHtml += `
        </div>
        <div class="control-panel">
            <button onclick="onCommandUp()">A</button>
        </div>
    `;

    let rootElement = document.querySelector('#game-board');
    rootElement.innerHTML = gameBoardHtml;
    console.log(`history: ${state.history}`);
}
init();
render(state);