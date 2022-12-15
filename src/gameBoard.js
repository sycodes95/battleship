const playerDOM = require('./leftDOM')
const shipFactory = require('./shipFactory')
function gameBoard(){
    return {
        board: [],
        attacked: [],
        carrierHitbox: [],
        battleshipHitbox: [],
        destroyerHitbox: [],
        submarineHitbox: [],
        patrolboatHitbox: [],

        createBoard(domBoard, playerName){
            let coords = [];
            let xAxis = [0,1,2,3,4,5,6,7,8,9]
            xAxis.forEach(el => {
                for(let i = 0; i < xAxis.length; i++) coords.push([el, xAxis[i]]);
            })
            this.board = coords
            
            for (let e of this.board) {
                let cell = document.createElement('div');
                cell.classList.add('rightCells');
                cell.setAttribute('id', `${[e[0], e[1]]}`);
                
                domBoard.appendChild(cell);
            }
            return coords;
        },
        placeShip(ship, coord) {
            if (coord[1] + ship.length > 10) {
                return;
            }
            const hitboxKey = `${ship.name}Hitbox`;
            for (let i = 0; i < ship.length; i++) {
                const x = coord[0];
                const y = coord[1] + i;
                this[hitboxKey].push([x, y]);
                
            }
            return this[hitboxKey];
        },
        receiveAttack(coord, ships) {
            this.attacked.push(coord);
            const shipHitboxes = [this.carrierHitbox, this.battleshipHitbox, this.destroyerHitbox,
            this.submarineHitbox, this.patrolboatHitbox]
            for(let ship of shipHitboxes){
                for(let hitboxes of ship){
                    console.log(hitboxes);
                    if(hitboxes[0] == coord[0] && hitboxes[1] == coord[1]){
                        
                        let color = 'red'
                        playerDOM(coord, color)
                        return shipHitboxes.indexOf(ship)
                        break;
                        
                    } else {
                        let color = 'white'
                        playerDOM(coord, color)
                    }
                }
                break;
            }
            if (ships[0].isSunk() && ships[1].isSunk() && ships[2].isSunk() && ships[3].isSunk() && ships[4].isSunk()) {
              return 'game over';
            }
            return coord
            
        },
        cpuEventListener(){
            let rightCells = document.querySelectorAll('.rightCells');
            rightCells.forEach(e =>{
                e.addEventListener('click', ()=>{
                    console.log(e.id)
                })
            })
        }
        
    }
}

module.exports = gameBoard




/* refactored blocks:::
placeShip(ship, coord){
    if(coord[1] + ship.length <= 10){
        for(let i = 0; i < ship.length; i++){
            if(i == 0){
                this.occupied.push([coord[0], coord[1]])
                switch (ship.name){
                    case 'carrier': this.carrierHitbox.push([coord[0], coord[1]])
                    case 'battleship': this.battleshipHitbox.push([coord[0], coord[1]])
                    case 'destroyer': this.destroyerHitbox.push([coord[0], coord[1]])
                    case 'submarine': this.submarineHitbox.push([coord[0], coord[1]])
                    case 'patrolboat': this.patrolboatHitbox.push([coord[0], coord[1]])
                }
            } else {
                this.occupied.push([coord[0], coord[1]+i])
                switch (ship.name){
                    case 'carrier': this.carrierHitbox.push([coord[0], coord[1]+i])
                    case 'battleship': this.battleshipHitbox.push([coord[0], coord[1]+i])
                    case 'destroyer': this.destroyerHitbox.push([coord[0], coord[1]+i])
                    case 'submarine': this.submarineHitbox.push([coord[0], coord[1]+i])
                    case 'patrolboat': this.patrolboatHitbox.push([coord[0], coord[1]+i])
                }
            }
        }
    } else {
        return;
    }
    return this.occupied;
}

receiveAttack(coord){
    this.attacked.push(coord);
    if(this.carrierHitbox.includes(coord)) carrier.gotHit();
    if(this.battleshipHitbox.includes(coord)) battleship.gotHit();
    if(this.destroyerHitbox.includes(coord)) destroyer.gotHit();
    if(this.submarineHitbox.includes(coord)) submarine.gotHit();
    if(this.patrolboatHitbox.includes(coord)) patrolboat.gotHit();

    if(carrier.isSunk() && battleship.isSunk() && destroyer.isSunk() && submarine.isSunk() && patrolboat.isSunk()){
        return 'game over'
    }


}
*/