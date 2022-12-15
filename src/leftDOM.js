function playerDOM(coord, color){
    
    console.log('e');
    //let cell = document.getElementById(`left${coord[0]}`,`${coord[1]}`)
    let cell = document.getElementById(`left${coord[0]},${coord[1]}`)
    cell.style.backgroundColor = color
}
module.exports = playerDOM
