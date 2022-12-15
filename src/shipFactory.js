function shipFactory(length, name, hit){
    return{
        length,
        name,
        hit,
        gotHit(){
            if(length > hit){
                console.log('test')
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
