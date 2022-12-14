function playerDOM(gameBoard){
    let domBoard = document.querySelector('.leftGrid')
    gameBoard.forEach(e =>{
        let cell = document.createElement('div')
        cell.classList.add('leftCells')
        cell.setAttribute('id', `${[e[0], e[1]]}`)
        domBoard.appendChild(cell)
    })
}
module.exports = playerDOM
