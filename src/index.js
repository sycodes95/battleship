const shipFactory = require('./shipFactory')
const gameBoard = require('./gameBoard')
//const player = require('./player')
//const cpu = require('./player')
const playerDOM = require('./leftDOM')
const cpuDOM = require('./rightDOM')


function gameLoop(){
    player()
    cpu()

}
gameLoop()

function player(){
    let playerName = 'Player'
    const carrier = shipFactory(5, 'carrier')
    const battleship = shipFactory(4, 'battleship')
    const destroyer = shipFactory(3, 'destroyer')
    const submarine = shipFactory(3, 'submarine')
    const patrolboat = shipFactory(2, 'patrolboat')
    const playerGameBoard = gameBoard()
    playerGameBoard.createBoard()
    playerGameBoard.placeShip(carrier, [5,4])
    playerGameBoard.placeShip(battleship, [2,6])
    playerGameBoard.placeShip(destroyer, [1,5])
    playerGameBoard.placeShip(submarine, [4,4])
    playerGameBoard.placeShip(patrolboat, [5,4])
    playerDOM(playerGameBoard.board)
   
    

}
function cpu(){
    let playerName = 'CPU'
    const carrier = shipFactory(5, 'carrier')
    const battleship = shipFactory(4, 'battleship')
    const destroyer = shipFactory(3, 'destroyer')
    const submarine = shipFactory(3, 'submarine')
    const patrolboat = shipFactory(2, 'patrolboat')
    const cpuGameBoard = gameBoard()
    cpuGameBoard.createBoard()
    cpuGameBoard.placeShip(carrier, [5,4])
    cpuGameBoard.placeShip(battleship, [2,6])
    cpuGameBoard.placeShip(destroyer, [1,5])
    cpuGameBoard.placeShip(submarine, [4,4])
    cpuGameBoard.placeShip(patrolboat, [5,4])
    const shipsArray = [cpuGameBoard.carrierHitbox, cpuGameBoard.battleshipHitbox,
    cpuGameBoard.destroyerHitbox, cpuGameBoard.submarineHitbox, cpuGameBoard.patrolboatHitbox]
    cpuDOM(cpuGameBoard.board, shipsArray, cpuGameBoard.overallHitbox)

}
