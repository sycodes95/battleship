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
        this.playerHitboxes = [this.board.carrierHitbox, this.board.battleshipHitbox,
        this.board.destroyerHitbox, this.board.submarineHitbox, this.board.patrolboatHitbox]

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
    attack() {
        if (this.name == 'player') {
            const cpuCells = document.querySelectorAll('.rightCells');
            cpuCells.forEach(cell => {
                cell.addEventListener('click', () => {
                const leftCommand = document.querySelector('.leftCommand')
                leftCommand.innerHTML = ''
                let cd = this.convertEnemyIdToCoord(cell);
                let attackCoord = this.enemyBoard.attacked;
                const overallHitboxes = this.enemyHitboxes.reduce((acc, arr) => acc.concat(arr), []);
        
                if (attackCoord.some(e => e[0] == cd[0] && e[1] == cd[1])) {
                    return; // Return early if the cell has already been attacked
                }
        
                let isHitbox = false;
                for (let hb of overallHitboxes) {
                    if (hb[0] == cd[0] && hb[1] == cd[1]) {
                    isHitbox = true;
                    break;
                    }
                }
                
                if (isHitbox) {
                    enemyDOM(cd, 'red');
                    this.findEnemyAttackedShip(cd);
                    attackCoord.push(cd);
                } else {
                    enemyDOM(cd, 'white');
                    attackCoord.push(cd);
                }
                console.log(this.carrier.hit)
                console.log(this.battleship.hit)
                console.log(this.destroyer.hit)
                console.log(this.submarine.hit)
                console.log(this.patrolboat.hit)
                if(!this.checkGameOver()){
                    setTimeout(() => {
                        
                        let rcvCd = this.board.receiveAttack(this.cpuAttackCoord());
                        this.findPlayerAttackedShip(rcvCd)
                        console.log(rcvCd);
                    }, 200);
                }
                });
            });
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
    convertEnemyIdToCoord(el){
        return [parseInt(el.id.charAt(5)), parseInt(el.id.charAt(7))]
    }
    convertPlayerIdToCoord(el){
        return [parseInt(el.id.charAt(4)), parseInt(el.id.charAt(6))]
    }
    
    findEnemyAttackedShip(coord){
        this.enemyHitboxes.some((ship, index) =>{
            for(let hb of ship){
                if(hb[0] == coord[0] && hb[1] == coord[1]){
                    this.enemyShips[index].gotHit()
                }
            }
        })
    }
    findPlayerAttackedShip(coord){
        this.playerHitboxes.some((ship, index) =>{
            for(let hb of ship){
                if(hb[0] == coord[0] && hb[1] == coord[1]){
                    this.ships[index].gotHit()
                }
            }
        })
    }

      
    
    placePlayerShips(){
        const leftCommand = document.querySelector('.leftCommand')
        
        let placeCarrier = document.createElement('div')
        placeCarrier.textContent = 'Place your carrier!';
        placeCarrier.style.color = 'white'
        leftCommand.appendChild(placeCarrier)
        
        const playerCells = document.querySelectorAll('.leftCells');
        
        playerCells.forEach(cell =>{
            cell.addEventListener('mouseenter', ()=>{
                let cd = this.convertPlayerIdToCoord(cell);
                
                if(this.board.carrierHitbox.length < 1){
                    for(let i = 0; i < this.carrier.length; i++){
                        let coord = document.getElementById(`left${cd[0]},${cd[1]+i}`)
                        coord.classList.add('ships')
                    }
                } else if (this.board.battleshipHitbox.length < 1){
                    for(let i = 0; i < this.battleship.length; i++){
                        let coord = document.getElementById(`left${cd[0]},${cd[1]+i}`)
                        coord.classList.add('ships')
                    }
                } else if (this.board.destroyerHitbox.length < 1){
                    for(let i = 0; i < this.destroyerHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'green')
                    }
                } else if (this.board.submarineHitbox.length < 1){
                    for(let i = 0; i < this.submarineHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'green')
                    }
                } else if (this.board.patrolboatHitbox.length < 1){
                    for(let i = 0; i < this.patrolboatHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'green')
                    }
                }
            
            })
            cell.addEventListener('mouseout', ()=>{
                let cd = this.convertPlayerIdToCoord(cell);
                
                if(this.board.carrierHitbox.length < 1){
                    for(let i = 0; i < this.carrier.length; i++){
                        let coord = document.getElementById(`left${cd[0]},${cd[1]+i}`)
                        coord.classList.remove('ships')
                    }
                } else if (this.board.battleshipHitbox.length < 1){
                    for(let i = 0; i < this.battleship.length; i++){
                        let coord = document.getElementById(`left${cd[0]},${cd[1]+i}`)
                        coord.classList.remove('ships')
                    }
                } else if (this.board.destroyerHitbox.length < 1){
                    for(let i = 0; i < this.destroyerHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'black')
                    }
                } else if (this.board.submarineHitbox.length < 1){
                    for(let i = 0; i < this.submarineHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'black')
                    }
                } else if (this.board.patrolboatHitbox.length < 1){
                    for(let i = 0; i < this.patrolboatHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'black')
                    }
                }

            })
            
            cell.addEventListener('click', ()=>{
                console.log('click');
                let cd = this.convertPlayerIdToCoord(cell);
                if(this.board.carrierHitbox.length < 1){
                    
                    if(!this.board.placeShip(this.carrier, cd, 'player')){
                        return
                    }
                    
                    this.board.placeShip(this.carrier, cd, 'player');
                    leftCommand.innerHTML = ''
                    let placeBattleship = document.createElement('div')
                    placeBattleship.textContent = 'Place your battleship!';
                    placeBattleship.style.color = 'white'
                    leftCommand.appendChild(placeBattleship)
                    
                } else if (this.board.battleshipHitbox.length < 1){
                    if(!this.board.placeShip(this.battleship, cd, 'player')){
                        return
                    }
                    this.board.placeShip(this.battleship, cd, 'player');
                    leftCommand.innerHTML = ''
                    let placeDestroyer = document.createElement('div')
                    placeDestroyer.textContent = 'Place your destroyer!';
                    placeDestroyer.style.color = 'white'
                    leftCommand.appendChild(placeDestroyer)
                } else if (this.board.destroyerHitbox.length < 1){
                    if(!this.board.placeShip(this.destroyer, cd, 'player')){
                        return
                    }
                    this.board.placeShip(this.destroyer, cd, 'player')
                    leftCommand.innerHTML = ''
                    let placeSubmarine = document.createElement('div')
                    placeSubmarine.textContent = 'Place your submarine!';
                    placeSubmarine.style.color = 'white'
                    leftCommand.appendChild(placeSubmarine)
                } else if (this.board.submarineHitbox.length < 1){
                    if(!this.board.placeShip(this.submarine, cd, 'player')){
                        return
                    }
                    this.board.placeShip(this.submarine, cd, 'player')
                    leftCommand.innerHTML = ''
                    let placePatrolboat = document.createElement('div')
                    placePatrolboat.textContent = 'Place your patrolboat!';
                    placePatrolboat.style.color = 'white'
                    leftCommand.appendChild(placePatrolboat)

                } else if (this.board.patrolboatHitbox.length < 1){
                    if(!this.board.placeShip(this.patrolboat, cd, 'player')){
                        return
                    }
                    this.board.placeShip(this.patrolboat, cd, 'player')
                    leftCommand.innerHTML = ''
                    let beginAssault = document.createElement('div')
                    beginAssault.textContent = 'Begin assault!';
                    beginAssault.style.color = 'red'
                    leftCommand.appendChild(beginAssault)
                    this.attack()
                    

                }
            })

            
            

            
            /*
            cell.addEventListener('mouseenter', ()=>{
                let cd = this.convertPlayerIdToCoord(cell);
                
                if(this.board.carrierHitbox.length < 1){
                    for(let i = 0; i < this.carrier.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'green')
                    }
                } else if (this.board.battleshipHitbox.length < 1){
                    for(let i = 0; i < this.battleship.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'green')
                    }
                } else if (this.board.destroyerHitbox.length < 1){
                    for(let i = 0; i < this.destroyerHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'green')
                    }
                } else if (this.board.submarineHitbox.length < 1){
                    for(let i = 0; i < this.submarineHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'green')
                    }
                } else if (this.board.patrolboatHitbox.length < 1){
                    for(let i = 0; i < this.patrolboatHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'green')
                    }
                }
            
            })
            cell.addEventListener('mouseout', ()=>{
                let cd = this.convertPlayerIdToCoord(cell);
                
                if(this.board.carrierHitbox.length < 1){
                    for(let i = 0; i < this.carrier.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'black')
                    }
                } else if (this.board.battleshipHitbox.length < 1){
                    for(let i = 0; i < this.battleship.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'black')
                    }
                } else if (this.board.destroyerHitbox.length < 1){
                    for(let i = 0; i < this.destroyerHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'black')
                    }
                } else if (this.board.submarineHitbox.length < 1){
                    for(let i = 0; i < this.submarineHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'black')
                    }
                } else if (this.board.patrolboatHitbox.length < 1){
                    for(let i = 0; i < this.patrolboatHitbox.length; i++){
                        playerDOM([cd[0], cd[1]+i], 'black')
                    }
                }

            })
            cell.addEventListener('click', ()=>{
                console.log('click');
                let cd = this.convertPlayerIdToCoord(cell);
                if(this.board.carrierHitbox.length < 1){
                    
                    if(!this.board.placeShip(this.carrier, cd, 'player')){
                        return
                    }
                    
                    this.board.placeShip(this.carrier, cd, 'player');
                    leftCommand.innerHTML = ''
                    let placeBattleship = document.createElement('div')
                    placeBattleship.textContent = 'Place your battleship!';
                    placeBattleship.style.color = 'white'
                    leftCommand.appendChild(placeBattleship)
                    
                } else if (this.board.battleshipHitbox.length < 1){
                    if(!this.board.placeShip(this.battleship, cd, 'player')){
                        return
                    }
                    this.board.placeShip(this.battleship, cd, 'player');
                    leftCommand.innerHTML = ''
                    let placeDestroyer = document.createElement('div')
                    placeDestroyer.textContent = 'Place your destroyer!';
                    placeDestroyer.style.color = 'white'
                    leftCommand.appendChild(placeDestroyer)
                } else if (this.board.destroyerHitbox.length < 1){
                    if(!this.board.placeShip(this.destroyer, cd, 'player')){
                        return
                    }
                    this.board.placeShip(this.destroyer, cd, 'player')
                    leftCommand.innerHTML = ''
                    let placeSubmarine = document.createElement('div')
                    placeSubmarine.textContent = 'Place your submarine!';
                    placeSubmarine.style.color = 'white'
                    leftCommand.appendChild(placeSubmarine)
                } else if (this.board.submarineHitbox.length < 1){
                    if(!this.board.placeShip(this.submarine, cd, 'player')){
                        return
                    }
                    this.board.placeShip(this.submarine, cd, 'player')
                    leftCommand.innerHTML = ''
                    let placePatrolboat = document.createElement('div')
                    placePatrolboat.textContent = 'Place your patrolboat!';
                    placePatrolboat.style.color = 'white'
                    leftCommand.appendChild(placePatrolboat)

                } else if (this.board.patrolboatHitbox.length < 1){
                    if(!this.board.placeShip(this.patrolboat, cd, 'player')){
                        return
                    }
                    this.board.placeShip(this.patrolboat, cd, 'player')
                    leftCommand.innerHTML = ''
                    let beginAssault = document.createElement('div')
                    beginAssault.textContent = 'Begin assault!';
                    beginAssault.style.color = 'red'
                    leftCommand.appendChild(beginAssault)
                    this.attack()
                    

                }
            })
            */
            
            
        })
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
        const leftCells = document.querySelectorAll('.leftCells')
        const rightCells = document.querySelectorAll('.rightCells')
        if(this.board.allShipsSunk(this.ships)){
            leftCells.forEach(e =>{
                e.remove()
            })
            rightCells.forEach(e =>{
                e.remove()
            })
            alert('You lost u fkn noob')
            
            gameLoop()
            return true
        } else if(this.enemyBoard.allShipsSunk(this.enemyShips)){
            leftCells.forEach(e =>{
                e.remove()
            })
            rightCells.forEach(e =>{
                e.remove()
            })
            alert('you won, what a G')
            
            gameLoop()
            return true
        } else {
            return false
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
    player.placePlayerShips();
    player.placeCpuShips()
    /*
    player.board.placeShip(player.carrier, [5,4], 'player')
    player.board.placeShip(player.battleship, [4,4], 'player')
    player.board.placeShip(player.destroyer, [3,4], 'player')
    player.board.placeShip(player.submarine, [2,4], 'player')
    player.board.placeShip(player.patrolboat, [1,4], 'player')
    */
    
    
    
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
