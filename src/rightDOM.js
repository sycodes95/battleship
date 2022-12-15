function enemyDOM(coord,color) {
    let cell = document.getElementById(`right${coord[0]},${coord[1]}`)
    cell.style.backgroundColor = color
}
  

/*
function cpuDOM(gameBoard, shipsArray, overallHitbox){
    let domBoard = document.querySelector('.rightGrid')
    gameBoard.forEach(e =>{
        let cell = document.createElement('div')
        cell.classList.add('rightCells')
        cell.setAttribute('id', `${[e[0], e[1]]}`)
        domBoard.appendChild(cell)
        cell.addEventListener('click', ()=>{
            console.log(overallHitbox)
            overallHitbox.forEach(e =>{
                if(cell.id == `${e[0]},${e[1]}`){
                    cell.style.backgroundColor = 'red';
                    cell.style.opacity = '0.6'
                }
                
            })
            
        })
        
    })
    
}
*/

module.exports = enemyDOM