const shipFactory = require('./shipFactory')
const gameBoard = require('./gameBoard')
//const player = require('./player')
//const cpu = require('./player')
const playerDOM = require('./leftDOM')
const cpuDOM = require('./rightDOM.js')


function gameLoop(){
    player()
    cpu()

}
gameLoop()

function player(){
    console.log('pppp');
    let testCoord = [5,4]
    let domBoard = document.querySelector('.leftGrid')
    let playerName = 'Player'
    const carrier = shipFactory(5, 'carrier', 0)
    const battleship = shipFactory(4, 'battleship', 0)
    const destroyer = shipFactory(3, 'destroyer', 0)
    const submarine = shipFactory(3, 'submarine', 0)
    const patrolboat = shipFactory(2, 'patrolboat', 0)
    const playerGameBoard = gameBoard()
    playerGameBoard.createBoard(domBoard)
    playerGameBoard.placeShip(carrier, [5,4])
    playerGameBoard.placeShip(battleship, [2,6])
    playerGameBoard.placeShip(destroyer, [1,5])
    playerGameBoard.placeShip(submarine, [4,4])
    playerGameBoard.placeShip(patrolboat, [6,4])
    const ships = [carrier, battleship, destroyer, submarine, patrolboat];
    const shipHitbox = []
    let cpuAttackCoord = [Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)]
    let attackedCoord = playerGameBoard.receiveAttack(testCoord, ships)
    ships[attackedCoord].gotHit()
    

}
function cpu(){
    const domBoard = document.querySelector('.rightGrid')
    let playerName = 'CPU'
    const carrier = shipFactory(5, 'carrier')
    const battleship = shipFactory(4, 'battleship')
    const destroyer = shipFactory(3, 'destroyer')
    const submarine = shipFactory(3, 'submarine')
    const patrolboat = shipFactory(2, 'patrolboat')
    const cpuGameBoard = gameBoard()
    cpuGameBoard.createBoard(domBoard)
    cpuGameBoard.placeShip(carrier, [5,4])
    cpuGameBoard.placeShip(battleship, [2,6])
    cpuGameBoard.placeShip(destroyer, [1,5])
    cpuGameBoard.placeShip(submarine, [4,4])
    cpuGameBoard.placeShip(patrolboat, [5,4])
    cpuGameBoard.cpuEventListener()
   

}
