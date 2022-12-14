function shipFactory(length, name, hit, sunk){
    return{
        length,
        name,
        hit,
        sunk,
        gotHit(){
            if(length > hit){
                this.hit += 1
                return this.hit;
            }
        },
        isSunk(){
            return this.length <= this.hit;
        }
    }   
}

module.exports = shipFactory
