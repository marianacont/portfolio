const box = document.querySelector("#checkers .box");
const board = document.querySelector("#checkers .board");
const colors = ["red", "black"];
const startBtn = document.querySelector('button');

// Functions

// Create pieces
function createPieces(index, obj){
    let img = document.createElement('img')
    Object.assign(img, {
        id: `${obj.name}_${index}`,
        src: obj.src,
        draggable: true
    })
    box.append(img)
}

// Board (rows)
function boardRows(index){
    let tr = document.createElement('tr');
    repeat(8, boardCells, {tag:tr, index: index})
    board.append(tr)
}
// Board (cells)
function boardCells(i, obj){
    obj.tag.innerHTML += `<td id="cell_${obj.index}${i}"></td>`;
}
// Function Repeat
function repeat(times, callback, params){
    for(let i=1; i<= times; i++){
        callback(i, params);
    }
}

// Events
function dragEv(e){
    e.dataTransfer.setData('piece', e.target.id);
}
function dragOver(e){
    e.preventDefault();
    e.stopPropagation();
}
function dropEv(e){
    e.preventDefault();
    let piece = e.dataTransfer.getData('piece');
    piece = document.getElementById(piece);
    e.target.append(piece)
}


function order(id){
    return(
        id[0] % 2 == 1 && id % 2 == 0
    ) || (
        id[0] % 2 == 0 && id % 2 == 1
    )
}

function setActions(){
    const pieces = document.querySelectorAll('#checkers img');
    const cells = document.querySelectorAll('#checkers td');

    pieces.forEach(p => p.addEventListener('dragstart', (e) => dragEv(e)))
    cells.forEach(c => {
        c.addEventListener('dragover', (e) => dragOver(e));
        c.addEventListener('drop', (e) => {
            let id = e.target.id.split('_')[1]
            if(order(id)) dropEv(e)
        })
    })
}

// Function start
function start(){
    const pieces = document.querySelectorAll('#checkers img');
    const cells = document.querySelectorAll('#checkers td');
    let i = 0;

    cells.forEach( c => {
        let cell = c.id.split('_')[1];
       
        if(order(cell)){
            if(cell[0] <= 3 || cell[0] >=6){
            c.appendChild(pieces[i])
            i ++;
            }
        }
        
    })
}

// Insertion of pieces
colors.forEach( color => repeat(12, createPieces, {
    name: color,
    src: `${color}.svg`
}))
// Board creation
repeat(8, boardRows);
// Functions assing
setActions();
startBtn.addEventListener('click', () => start())