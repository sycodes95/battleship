const shipFactory = require('./shipFactory')
const carrier = shipFactory(5, 'carrier')
const battleship = shipFactory(4, 'battleship')
const destroyer = shipFactory(3, 'destroyer')
const submarine = shipFactory(3, 'submarine')
const patrolboat = shipFactory(2, 'patrolboat')

function gameBoard(){
    return {
        board: [],
        occupied: [],
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
    }
}
const boord = gameBoard();
console.log(boord.createBoard());
console.log(boord.board);
console.log(boord.placeShip(submarine, [1,7]))
console.log(boord.submarineHitbox)
