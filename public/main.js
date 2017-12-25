
const DIRECTION = {
    north: 'A', east: '->', south: 'V', west: '<-'
};
var state = {
    robotPosition: {
        x: 0, y: 0,
    },
    mapSize: {
        x: 4, y: 4
    },
    toIndex: function () {
        return this.robotPosition.x + this.robotPosition.y * this.mapSize.y;
    },
    move: function (newPosition) {
        availablePosition = (newPosition) => {
            if (newPosition.x >= 0 && newPosition.x < this.mapSize.x
                && newPosition.y >= 0 && newPosition.y < this.mapSize.y
            ) {
                return true;
            } else {
                return false;
            }
        }
        if (availablePosition(newPosition)) {
            state.robotPosition = newPosition;
            render();
            return true;
        } else {
            return false;
        }
    }
}
function init() {
    state.robotPosition.y = 3;
}
function onCommandUp() {
    var newPosition = { x: state.robotPosition.x, y: state.robotPosition.y - 1 };
    var successful = state.move(newPosition);
    if (!successful) {
        // alert('Position [' + newPosition.x + ', ' + newPosition.y + '] is not invalid.');
        alert(`Position [${newPosition.x}, ${newPosition.y}] is not invalid.`);
    }
}
function render() {
    let gameBoardHtml = `
        <div class="game-map">
    `;
    for (let row = 0; row < state.mapSize.y; row++) {
        gameBoardHtml += `
            <div class="map-row">
        `;
        for (let column = 0; column < state.mapSize.x; column++) {
            let cellText = ''
            if (state.robotPosition.x === column && state.robotPosition.y === row) {
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
}
init();
render();