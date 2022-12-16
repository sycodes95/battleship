const playerDOM = require('./leftDOM')
const enemyDOM = require('./rightDOM')
const shipFactory = require('./shipFactory')
function gameBoard(){
    return {
        attacked: [],
        carrierHitbox: [],
        battleshipHitbox: [],
        destroyerHitbox: [],
        submarineHitbox: [],
        patrolboatHitbox: [],

        createBoard(playerName){
            const leftGrid = document.querySelector('.leftGrid')
            const rightGrid = document.querySelector('.rightGrid')
            let coords = [];
            let xAxis = [0,1,2,3,4,5,6,7,8,9]
            xAxis.forEach(el => {
                for(let i = 0; i < xAxis.length; i++) coords.push([el, xAxis[i]]);
            })
            for (let e of coords) {
                let cell = document.createElement('div');
                
                if(playerName == 'player'){
                    cell.classList.add('leftCells');
                    cell.setAttribute('id', `left${[e[0], e[1]]}`);
                    leftGrid.appendChild(cell);
                } else {
                    cell.classList.add('rightCells');
                    cell.setAttribute('id', `right${[e[0], e[1]]}`);
                    rightGrid.appendChild(cell);
                }
                
            }
        },
        placeShip(ship, coord, name) {
            
            if (coord[1] + ship.length > 10) {
                return false;
            }
            const hitboxKey = `${ship.name}Hitbox`;
            for (let i = 0; i < ship.length; i++) {
                const x = coord[0];
                const y = coord[1] + i;
                this[hitboxKey].push([x, y]);
                if(name == 'player'){
                    playerDOM([x,y], 'green')
                } else {
                    enemyDOM([x,y], 'green')
                }
                
                
            }
            return this[hitboxKey];
        },
        receiveAttack(coord) {
            this.attacked.push(coord);
            const shipHitboxes = [this.carrierHitbox, this.battleshipHitbox, this.destroyerHitbox,
            this.submarineHitbox, this.patrolboatHitbox]
            
            for(let ship of shipHitboxes){
                for(let hitboxes of ship){
                    if(hitboxes[0] == coord[0] && hitboxes[1] == coord[1]){
                        let color = 'red'
                        playerDOM(coord, color)
                        //return shipHitboxes.indexOf(ship)
                        break;
                        
                    } else {
                        let color = 'white'
                        playerDOM(coord, color)
                    }
                }
                break;
            }
            return coord
        },
        allShipsSunk(ships){
            return ships.every(ship => ship.isSunk())
        }
    }
}

module.exports = gameBoard