         
document.getElementById("fillBtn").onclick = function fillSudoku(){
                                                eel.getUnsolvedGrid();
                                            }
document.getElementById("visualizeBtn").onclick = function visualizeFilling(){
                                                        eel.visualize();
                                                    }

function getCellId(row,col){
    var gridNumber  = (Math.floor(row/3)*3)+Math.floor(col/3);
    var cellNumber  = ((row%3)*3)+(col%3);
    var cellId = "cell"+gridNumber+cellNumber;
    return cellId
}

eel.expose(changeCellColor)
function changeCellColor(row,col , color){
    var cellId = getCellId(row, col)
    var cell = document.getElementById(cellId);
    cell.style.background = color ;
}

eel.expose(updateCellValue)
function updateCellValue(row,col , val){
    var cellId = getCellId(row, col)
    var cell = document.getElementById(cellId);
    cell.innerHTML = ""+val ;
}

