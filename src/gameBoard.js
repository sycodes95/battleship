function gameBoard(){
    return {
        board: [],
        attacked: [],
        overallHitbox: [],
        carrierHitbox: [],
        battleshipHitbox: [],
        destroyerHitbox: [],
        submarineHitbox: [],
        patrolboatHitbox: [],

        createBoard(){
            let coords = [];
            let xAxis = [0,1,2,3,4,5,6,7,8,9]
            xAxis.forEach(el => {
                for(let i = 0; i < xAxis.length; i++) coords.push([el, xAxis[i]]);
            })
            this.board = coords
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
                this.overallHitbox.push([x, y])
            }
            return this[hitboxKey];
        },
        receiveAttack(coord) {
            this.attacked.push(coord);
          
            const hitboxes = [
              this.carrierHitbox,
              this.battleshipHitbox,
              this.destroyerHitbox,
              this.submarineHitbox,
              this.patrolboatHitbox
            ];
            const ships = [carrier, battleship, destroyer, submarine, patrolboat];
          
            for (let i = 0; i < hitboxes.length; i++) {
              if (hitboxes[i].includes(coord)) {
                ships[i].gotHit();
              }
            }
          
            if (carrier.isSunk() && battleship.isSunk() && destroyer.isSunk() && submarine.isSunk() && patrolboat.isSunk()) {
              return 'game over';
            }
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