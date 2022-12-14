function playerDOM(coord, color){
    let cell = document.getElementById(`${coord[0]},${coord[1]}`);
    cell.style.backgroundColor = color
}
module.exports = playerDOM
