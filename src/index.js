const shipFactory = require('./shipFactory')
const gameBoard = require('./gameBoard')
//const player = require('./player')
//const cpu = require('./player')
const playerDOM = require('./leftDOM')
const enemyDOM = require('./rightDOM');

class Player{
    constructor(board,enemyBoard){
        this.name = 'player';
        this.board = board; 

        this.carrier = this.createCarrier()
        this.battleship = this.createBattleship()
        this.destroyer = this.createDestroyer()
        this.submarine = this.createSubmarine()
        this.patrolboat = this.createPatrolboat()

        this.ships = [this.carrier, this.battleship, this.destroyer, this.submarine, this.patrolboat]

        this.enemy = 'enemy'
        this.enemyBoard = enemyBoard;

        this.enemyCarrier = this.createCarrier()
        this.enemyBattleship = this.createBattleship()
        this.enemyDestroyer = this.createDestroyer()
        this.enemySubmarine = this.createSubmarine()
        this.enemyPatrolboat = this.createPatrolboat()

        this.enemyShips = [this.enemyCarrier, this.enemyBattleship, this.enemyDestroyer,
        this.enemySubmarine, this.enemyPatrolboat]
        
        this.enemyHitboxes = [this.enemyBoard.carrierHitbox, this.enemyBoard.battleshipHitbox,
            this.enemyBoard.destroyerHitbox, this.enemyBoard.submarineHitbox,
            this.enemyBoard.patrolboatHitbox]
    }
    attack(){
        if(this.name == 'player'){
            const cpuCells = document.querySelectorAll('.rightCells');
            cpuCells.forEach(cell =>{
                cell.addEventListener('click', ()=>{
                    let cellCoord = this.convertIdToCoord(cell)
                    for(let att of this.enemyBoard.attacked){
                        console.log(att);
                        if(cellCoord[0] == att[0] && cellCoord[1] == att[1]){
                            console.log('exist');
                        } else {
                            console.log('nope');
                        
                        }
                    }
                    /*
                    this.enemyBoard.attacked.some(cd => {
                        if(cellCoord[0] == cd[0] && cellCoord[1] == cd[1]){
                            return;
                        } else {
                            
                        }
                    })
                    */
                    
                    const overallHitboxes = this.enemyHitboxes.reduce((acc, arr) => acc.concat(arr), []);
                    for(let hb of overallHitboxes){
                        if(hb[0] == cellCoord[0] && hb[1] == cellCoord[1]){
                            enemyDOM(cellCoord, 'red')
                            this.findAttackedShip(cellCoord)
                            break;
                        } else {
                            enemyDOM(cellCoord, 'white')
                        }
                    }
                    
                    console.log(overallHitboxes);
                    setTimeout(()=>{
                        this.board.receiveAttack(this.cpuAttackCoord())
                    }, 200)
                    
                })
            })
        }
    }
    cpuAttackCoord(){
        let gen = this.generateCoord();
        while (this.board.attacked.some(e => e[0] == gen[0] && e[1] == gen[1])) {
            gen = this.generateCoord()
        }
        return gen
    }
    generateCoord(){
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }
    generateShipCoord(ship){
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * (10 - ship.length))]
    }
    convertIdToCoord(el){
        return [parseInt(el.id.charAt(5)), parseInt(el.id.charAt(7))]
    }
    findAttackedShip(coord){
        this.enemyHitboxes.some((ship, index) =>{
            for(let hb of ship){
                if(hb[0] == coord[0] && hb[1] == coord[1]){
                    this.enemyShips[index].gotHit()
                    console.log('meow')
                    console.log(this.enemyBoard.attacked)
                }
            }
        })
    }
    checkAttackedCoord(coord){
        
    }
    
    placeCpuShips(){
        let enemyShips = [this.enemyCarrier, this.enemyBattleship, this.enemyDestroyer,
        this.enemySubmarine, this.enemyPatrolboat]
        
        
        for(let ship of enemyShips){
            let occupied = [this.enemyBoard.carrierHitbox, this.enemyBoard.battleshipHitbox,
                this.enemyBoard.destroyerHitbox, this.enemyBoard.submarineHitbox, 
                this.enemyBoard.patrolboatHitbox]
            let occupiedTotal = [].concat(...occupied)
            let gen = this.generateShipCoord(ship)
            
            while(occupiedTotal.some(occ => occ[0] == gen[0] && occ[1] == (gen[1] + ship.length) ||
            occ[0] == gen[0] && occ[1] == gen[1])){
                gen = this.generateShipCoord(ship)
            }
            
            this.enemyBoard.placeShip(ship, gen, 'enemy')
            
        }
        
    }
    checkGameOver(){
        if(this.board.allShipsSunk(this.ships)){
            alert('You lost u fkn noob')
        }
    }
    createPlayerBoard(){
        this.board.createBoard(this.name)
    }
    createEnemyBoard(){
        this.enemyBoard.createBoard('enemy')
    }
    createCarrier(){
        const carrier = shipFactory(5, 'carrier', 0)
        return carrier
    }
    createBattleship(){
        const battleship = shipFactory(4, 'battleship', 0)
        return battleship
    }
    createDestroyer(){
        const destroyer = shipFactory(3, 'destroyer', 0)
        return destroyer
    }
    createSubmarine(){
        const submarine = shipFactory(3, 'submarine', 0)
        return submarine
    }
    createPatrolboat(){
        const patrolboat = shipFactory(2, 'patrolboat', 0)
        return patrolboat
    }


}
function gameLoop(){
    let enemyBoard = gameBoard()
    let playerBoard = gameBoard()
    let player = new Player(playerBoard, enemyBoard)
    player.createPlayerBoard()
    player.createEnemyBoard()
    
    player.placeCpuShips()
    player.board.placeShip(player.carrier, [5,4], 'player')
    player.attack()
    
    
}
gameLoop()
/*
function gameLoop(){
    let enemyBoard = gameBoard()
    let playerBoard = gameBoard()
    let player = new Player('player', playerBoard, enemyBoard)
    player.createPlayerBoard()
    player.board.placeShip(player.carrier, [5,4])
    
    let cpuBoard = gameBoard()
    let cpu = new Player('cpu', cpuBoard)
    cpu.createPlayerBoard()
    player.attack()
}
gameLoop()
*/

/*
function player(){
    console.log('pppp');
    let testCoord = [5,4]
    let domBoard = document.querySelector('.leftGrid')
    let playerName = 'player'
    const carrier = shipFactory(5, 'carrier', 0)
    const battleship = shipFactory(4, 'battleship', 0)
    const destroyer = shipFactory(3, 'destroyer', 0)
    const submarine = shipFactory(3, 'submarine', 0)
    const patrolboat = shipFactory(2, 'patrolboat', 0)
    const playerGameBoard = gameBoard()
    playerGameBoard.createBoard(domBoard,playerName)
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
    let playerName = 'cpu'
    const carrier = shipFactory(5, 'carrier')
    const battleship = shipFactory(4, 'battleship')
    const destroyer = shipFactory(3, 'destroyer')
    const submarine = shipFactory(3, 'submarine')
    const patrolboat = shipFactory(2, 'patrolboat')
    const cpuGameBoard = gameBoard()
    cpuGameBoard.createBoard(domBoard, playerName)
    cpuGameBoard.placeShip(carrier, [5,4])
    cpuGameBoard.placeShip(battleship, [2,6])
    cpuGameBoard.placeShip(destroyer, [1,5])
    cpuGameBoard.placeShip(submarine, [4,4])
    cpuGameBoard.placeShip(patrolboat, [5,4])
    
   

}
*/
